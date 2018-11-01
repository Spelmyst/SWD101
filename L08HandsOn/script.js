// jQuery 
$(document).ready(
	function()
	{
		// jQuery here
		$("h3").hover
		(
			function()
			{
				$(this).css("color", "#f00");
			}
			, 
			function()
			{
				$(this).css("color", "#ff0");
			}
		);

		$("#_jQueryText").click
		(
			function()
			{
				$(this).text
				(
					"jQuery is a fast, JavaScript library that makes many tasks easier and simpler to accomplish. A JavaScript library contains pre-written JavaScript which makes developing applications a bit easier for the developer. This means jQuery is not a language, but an extension of JavaScript. It takes many lines of JavaScript code, which we would have had to write ourselves before jQuery, and compresses it."
				)
			}
		);

		$("li").dblclick
		(
			function()
			{
				$(this).hide()
			}
		);

		$("input").keydown
		(
			function()
			{
				$(this).toggleClass("input");
			}
		);
	}
);
