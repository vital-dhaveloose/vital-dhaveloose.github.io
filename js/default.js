WinJS.UI.processAll().done(function() {
		console.log("WinJS processed");
	}	
);

var studies = new WinJS.Binding.List();
studies.push({
	name				: "Master in de ingenieurswetenschappen: computerwetenschappen",
	specialization		: "Specialisatie Mens-Machine Interactie",
	awards				: "Geslaagd met onderscheiding",
	institution			: "KU Leuven Faculteit ingenieurswetenschappen",
	'institution-logo'	: "../res/kul_FirW.png",
	time				: "09-2013 - 09-2015"
});
studies.push({
	name				: "Bachelor in de ingenieurswetenschappen",
	specialization		: "Major: computerwetenschappen, Minor: elektrotechniek",
	awards				: "",
	institution			: "KU Leuven, eerste twee jaar in KULAK Kortrijk",
	'institution-logo'	: "../res/kulak.png",
	time				: "09-2010 - 09-2014"
});
studies.push({
	name				: "TSO Industri\xEBle wetenschappen",
	specialization		: "",
	awards				: "Laureaat",
	institution			: "VTI St. Lucas, Menen",
	'institution-logo'	: "../res/st-lucas.png",
	time				: "09-2004 - 06-2010"
});