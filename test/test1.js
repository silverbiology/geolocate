var geolocate = require('../index');
lookup = new geolocate();
lookup.setState("Louisiana");
lookup.setCountry("USA");

lookup.find("2 miles west of baton rouge",true,function (result) {
	console.log(result);
});

// res = lookup.find("2 miles west of baton rouge");
// console.log(res);
// var result = lookup.getResult();
// var resultSet = lookup.getResultSet();
// console.log(result);
// console.log(resultSet);