var geolocate = function() {

	var needle = require('needle');
	var route = "http://www.museum.tulane.edu/webservices/geolocatesvcv2/glcwrap.aspx";

	var me = this;

	var setDefaultValues = function() {
		me.country = '';
		me.state = '';
		me.county = '';
		me.language = 0;
		me.enableH2O = true;
		me.enableHwy = true;
		me.restrictToLowestAdm = false;
		me.enableUncert = true;
		me.doPoly = true;
		me.displacePoly = false;
	}
	
	setDefaultValues();
	
	this.setCountry = function( country ) {
		me.country = country;
	}

	this.setState = function( state ) {
		me.state = state;
	}

	this.setCounty = function( county ) {
		me.county = county;
	}

	this.setLanguge = function( language ) {
		me.language = language;
	}

	this.setEnableH2O = function( enableH2O ) {
		me.enableH2O = enableH2O;
	}

	this.setEnableHwy = function( enableHwy ) {
		me.enableHwy = enableHwy;
	}

	this.setRestrictToLowestAdm = function( restrictToLowestAdm ) {
		me.restrictToLowestAdm = restrictToLowestAdm;
	}

	this.setEnableUncert = function( enableUncert ) {
		me.enableUncert = enableUncert;
	}

	this.setDoPoly = function( doPoly ) {
		me.doPoly = doPoly;
	}

	this.setDisplacePoly = function( displacePoly ) {
		me.displacePoly = displacePoly;
	}

	this.clearValues = function() {
		setDefaultValues();
	}
	
	this.find = function( locality, resultFlag, callback ) {
		if(!locality || locality == '' || me.country == '' ) return callback({success:false,message:"Locality and Country should be set."});
		resultFlag = ('undefined' == typeof resultFlag || resultFlag == false) ? false : true;
		var params = ['country','state','county','language','enableH2O','enableHwy','restrictToLowestAdm','enableUncert','doPoly','displacePoly'];
		var req = route + '?';
		var ar = ["locality=" + encodeURIComponent(locality)];
		var res;
		for ( var i in params ) {
			ar.push(params[i] + '=' + encodeURIComponent(me[params[i]]));
		}
		req += ar.join('&');
		
		needle.get(req, function(error, response, body){
			if (response.statusCode == 200) {
				return (resultFlag) ? callback(body.resultSet) : callback(body);
			} else {
				return false;
			}
		});
	}

};

module.exports = geolocate;