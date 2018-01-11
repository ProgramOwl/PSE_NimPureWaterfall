
function ConvertLinkToName(link) {
	//It returns the symbol from the hex value preceded by a %.
	var tempS="";
	tempS = link.replace('+', ' ');
	link = tempS.replace(/([%][0-9a-zA-Z][0-9a-zA-Z])/gi, function (n){
		return String.fromCharCode(parseInt(n.substring(1), 16));
    });
	//console.log(link);
	return link;
}
function getUrlVars() {
    var vars = {},
        parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (n, key, value) {
			value = ConvertLinkToName(value);
            vars[key] = value;
        });
	console.log("var: ", vars);
	return vars;
}
function RetriveFormData() {
    var x = getUrlVars();
	console.log("x: ", x);
}
//RetriveFormData();