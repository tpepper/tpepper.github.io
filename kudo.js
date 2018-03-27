repo="tpepper/kudos-badge"
commit="8da5ea2a04664db616b115511403b71570341f74"
url="https://github.com/"+repo+"/commit/"+commit+".patch"

fetch(url, {
	mode: 'no-cors'
})
.then(function(response) {
	return response.blob();
})
.then(function(kudoBlob) {
	var div = document.createElement("div");
	var kudoText = document.createTextNode(kudoBlob);
	console.log(kudoText);
	div.appendChild(kudoText);
	document.appendChild(div);
}).catch(function(error) {
	console.log(error);
	return "could not find kudo commit at "+url;
});
