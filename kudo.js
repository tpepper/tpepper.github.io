repo="tpepper/kudos-badge"
commit="8da5ea2a04664db616b115511403b71570341f74"
url="https://api.github.com/repos/"+repo+"/commits/"+commit

fetch(url, {
	mode: 'cors'
})
.then(function(response) {
	return response.json();
}).then(function(json) {
	kudoJSON = JSON.stringify(json);
	console.log("json is: "+kudoJSON);
	return kudoJSON;
}).catch(function(error) {
	console.log(error);
	return "could not find kudo commit at "+url;
});
