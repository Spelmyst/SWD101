function numberChecking(number1, number2)
{
    // Obviously this is not part of the requirement.
    var  number1 = document.getElementById("_Number1").value;
    var  number2 = document.getElementById("_Number2").value;
    
    // I included a predefined error since it's possible to get a null or "undefined" result. See defaults below
    var _LogMsg = "No matching IF statements.";

    if(number1 > 100)
    {
        _LogMsg = "Number 1 has many digits!";
    }
    if(number1 < 0)
    {
        _LogMsg = "Number 1 is a negative number";
    }
    if(number2 < 20)
    {
        _LogMsg = "Number 2 is not a very high number";
    }
    if(number2 > 50)
    {
        _LogMsg = "Number 2 is a high number";
    }

    document.getElementById("_Result").innerHTML = "Console.log[ "+_LogMsg+" ];";

    console.log(_LogMsg);
}

// Nothing specified what values you wanted in this function.
// So I expanded answer the answer with data from SWD100 to include a page that you can enter results for.
numberChecking(50,40);

// This is running on my actual web server, not a local at:
// http://www.spelmyst.com/Woz-U/SWD101//L01HandsOn/index.html

// Also, the HINT in SWD101 - Lesson 1 - #12 is wrong. It says :
// Hint! You will use 4 if statements. You will not need 'if else' statements as you are checking for 4 different cases of the parameters.

// They aren't 'if else' statements. They're 'else if'.