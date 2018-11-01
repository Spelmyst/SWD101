function regexChecker()
{

	var  firstName = document.getElementById("_i_first_name").value;
	var   lastName = document.getElementById("_i_last_name").value;
	
	let _nameRegex = /^[A-Z][a-z]+$/;

	if (firstName.match(_nameRegex) && lastName.match(_nameRegex))
	{
		alert('Yay! Your inputs were all correct!');
	}
	else 
	{
		alert("Oh no! Thats an invalid format!");
	}
}