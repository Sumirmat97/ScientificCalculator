

function allClear()
{
	displayText = "0";
	functionText = "";
	document.getElementById("displayBox").value = functionText;
}

function clearLast(){
	
	var lengthDisplayText = displayText.length;
	var lengthFunctionText = functionText.length;
	var counter = 0;
	
	var functionArr = functionText.split("");
	var displayArr = displayText.split("");
	var replaceString = "";
	
	try{

		//not remove '(' from the functionText
		if(lengthFunctionText <= 1)
			return;

		//to remove factorial
		if(displayText[lengthDisplayText-1] == '!')
		{
	
			for(counter = lengthFunctionText-1; counter>=0; counter--)
				if(functionArr[counter] == ',')
					break;
			
			//remove ,( and ) from around the characters 
			for(var counter2 = counter+2; counter2<=lengthFunctionText-2; counter2++)
				replaceString += functionArr[counter2];
			
			//remake the string ater removing ,( and )
			functionText = functionText.substring(0,counter) + replaceString;
			//remove ! symbol
			displayText = displayText.substring(0,lengthDisplayText-1);
		}
		
		else if(displayText.substring(lengthDisplayText-3,lengthDisplayText) === "ans")
		{

			displayText=displayText.substring(0,lengthDisplayText-3);
			
			var ansString = ans.toString();
			functionText = functionText.substring(0,lengthFunctionText-ansString.length);			
		}
		
		//to remove function names eg. sin ,cos and digits and operators
		else{

			switch(functionText[lengthFunctionText-1])
			{
				
				case '~': displayText=displayText.substring(0,lengthDisplayText-3);
					break;
				case '`': displayText=displayText.substring(0,lengthDisplayText-3);
					break;
				case '@': displayText=displayText.substring(0,lengthDisplayText-3);
					break;
				case '#': displayText=displayText.substring(0,lengthDisplayText-4);
					break;
				case '$': displayText=displayText.substring(0,lengthDisplayText-4);
					break;
				case '%': displayText=displayText.substring(0,lengthDisplayText-4);
					break;
				case '_': displayText=displayText.substring(0,lengthDisplayText-3);
					break;
				case '|': displayText=displayText.substring(0,lengthDisplayText-2);
					break;
				case ':': displayText=displayText.substring(0,lengthDisplayText-2);	
					break;
				case '?': displayText=displayText.substring(0,lengthDisplayText-1);
					break;
					
				//to remove other characters like numbers or operators
				default: displayText=displayText.substring(0,lengthDisplayText-1);
				
			}
			
			functionText = functionText.substring(0,lengthFunctionText-1);
		}
		
		//display the text
		document.getElementById("displayBox").value = functionText;
	}catch(err)
	{
	document.getElementById("wantsPadding").innerHTML = err;
	
	//document.write("error in clearlast");
	}
}