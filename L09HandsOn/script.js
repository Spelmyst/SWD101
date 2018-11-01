function PageSetup()
{
	$(document).ready(function() 
	{
		BioP1();

		$("#_BtnBio").click(function(event) 
		{
			BioP2();
		});
	});
}

var _httpRequest = new XMLHttpRequest();
var url = 'http://www.spelmyst.com/';
const _JSON = "einstein.json";
   
function BioP1()
{
	// Show the Name and Birthday
	var _Nam = document.getElementById("_Nam");
	var _DoB = document.getElementById("_DoB");

	let _httpRequest = new XMLHttpRequest();

	_httpRequest.onreadystatechange = function()
	{
		console.log(this.status);
		if (this.readyState == 4 && this.status == 200) 
		{
			let _Obj = JSON.parse(this.responseText);
			_Nam.innerHTML = _Obj.name;
			_DoB.innerHTML = _Obj.birthday;
		}
	};
	
	console.log(_JSON);

	_httpRequest.open("GET", _JSON, true);
	_httpRequest.send();
}

function BioP2()
{
	// Show Bio
	var _Bio = document.getElementById("_Bio");

	let _httpRequest = new XMLHttpRequest();

	_httpRequest.onreadystatechange = function() 
	{
		if (this.readyState == 4 && this.status == 200) 
		{
			let _Obj = JSON.parse(this.responseText);
			_Bio.innerHTML = _Obj.bio;
		}
	};
	
	_httpRequest.open("GET", _JSON, true);
	_httpRequest.send();
}

PageSetup();