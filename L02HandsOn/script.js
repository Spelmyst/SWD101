let idealCar = 
{
    name: "Mustang",
    color: "Red",
    weightInPounds: 3600,
    myCar : function()
    {
        var _LogOutput = "My ideal car is a "+this.name+" with a color of "+this.color+", but I do not want it to be over "+this.weightInPounds+" pounds.";
        console.log(_LogOutput);

        // I added more than was necessary.
        document.getElementById("_Result").innerHTML = _LogOutput;
    }
}

idealCar.myCar();