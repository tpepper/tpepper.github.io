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
	const reader = new FileReader();
	reader.onload = function(e) {
		console.log(e.target.result);
	};
	reader.readAsText(kudoBlob);
}).catch(function(error) {
	console.log(error);
	return "could not find kudo commit at "+url;
});
