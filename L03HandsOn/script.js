let highSchoolGrade = 11;
let yourGrade;

function switchCase()
{
    switch(highSchoolGrade)
    {
        case 9:
            yourGrade = "Freshman";
            break;
        case 10:
            yourGrade = "Sophomore";
            break;
        case 11:
            yourGrade = "Junior";
            break;
        case 12:
            yourGrade = "Senior";
            break;
        default:
            yourGrade = "Invalid";
            break;
    }
    
    // I had to add this code, since the instructions were too vague.
    // This will at least get you a response.
    console.log("yourGrade = " + yourGrade);
    document.getElementById("console").innerHTML = "yourGrade = " + yourGrade;
}
switchCase();

function name()
{
    // I had to add this code, since the instructions were too vague.
    // This will at least get you a response.
    let firstName = "John";
    
    (firstName === "John") ? document.getElementById("demo").innerHTML = "Hello John!" : document.getElementById("demo").innerHTML = "Hello Human!" ;
}
name();