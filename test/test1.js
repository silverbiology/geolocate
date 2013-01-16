var geolocate = require('../index');
lookup = new geolocate();
lookup.setState("Louisiana");
lookup.setCountry("USA");

lookup.clearValues();

lookup.find("2 miles west of baton rouge",true,function (result) {
	console.log(result);
});

