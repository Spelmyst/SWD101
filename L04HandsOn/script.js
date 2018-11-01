class Employee 
{
	constructor(name, salary, hireDate)
	{
		this.name = name;
		this.salary = salary;
		this.hireDate = hireDate;
	}

	// These methods are not required to be used in the Hands-On
	// So I modified them for use in the example. 
	// Whats the point in having them if we don't use them.
	getName() 
	{
		return this.name.toUpperCase();
		// console.log(this.name.toUpperCase());
	}
	getSalary() 
	{
		return this.salary;
		// console.log(this.salary);
	}
	getHireDate() 
	{
		return this.hireDate;
		// console.log(this.hireDate);
	}
}

class Manager extends Employee
{
	constructor(name, salary, hireDate, descriptionOfJob)
	{
		super(name,salary,hireDate);
		this.descriptionOfJob = descriptionOfJob;
	}

	jobDescription()
	{
		// I added this to show it on the web page too.
		var _Page = document.getElementById("console").innerHTML;

		// Message builder
		var _MSG = this.getName() + " was hired on " + this.getHireDate() + " and makes " + this.getSalary() + " because they " + this.descriptionOfJob + ".";
		console.log(_MSG);

		// I added this to show it on the web page too.
		document.getElementById("console").innerHTML = _Page + _MSG + "<br>";
	}
}

class Designer extends Employee
{
	constructor(name, salary, hireDate, experience)
	{
		super(name,salary,hireDate);
		this.experience = experience;
	}

	yearsExperience()
	{
		// I added this to show it on the web page too.
		var _Page = document.getElementById("console").innerHTML;

		// Message builder
		var _MSG = this.getName() + " was hired on " + this.getHireDate() + " and makes " + this.getSalary() + " because they have " + this.experience + " years of experience.";
		console.log(_MSG);

		// I added this to show it on the web page too.
		document.getElementById("console").innerHTML = _Page + _MSG + "<br>";
	}
}

class SalesAssociate extends Employee
{
	constructor(name, salary, hireDate, degrees)
	{
		super(name,salary,hireDate);
		this.degrees = degrees;
	}

	degreeCompleted()
	{
		// I added this to show it on the web page too.
		var _Page = document.getElementById("console").innerHTML;

		// Message builder
		var _MSG = this.getName() + " was hired on " + this.getHireDate() + " and makes " + this.getSalary() + " because they have " + this.degrees + " degrees.";
		console.log(_MSG);

		// I added this to show it on the web page too.
		document.getElementById("console").innerHTML = _Page + _MSG + "<br>";
	}
}

// The Hands-On did not specify that I had to the LET or CONST keyword, so I chose to use them separately.
// The variable were not specified also. So I made them all strings.
const _Manager 		= new Manager("John Doe", "55000", "01/02/2003", "are a manager");
let _Designer 		= new Designer("Jane Doe", "40000", "04/05/2006", "6");
_SalesAssociate		= new SalesAssociate("Jeff Doe", "25000", "07/08/2009", "0");

_Manager.jobDescription();
_Designer.yearsExperience();
_SalesAssociate.degreeCompleted();