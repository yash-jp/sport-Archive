function mySportSelectionFunction()
{
	var mySelection = document.getElementById("mySport").value;
	console.log(mySelection);
	
	if(mySelection == 'cricket')
	{
		document.getElementById("cricketNews").style.display = "block";
		document.getElementById("footballNews").style.display = "none";
	}
	else if(mySelection == 'football')
	{
		document.getElementById("cricketNews").style.display = "none";
		document.getElementById("footballNews").style.display = "block";
	}
	else
	{
		document.getElementById("cricketNews").style.display = "block";
		document.getElementById("footballNews").style.display = "none";
	}
}