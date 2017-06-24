
function put(character)
{
	try{
	//if entering the numbers first time
	if(displayText == "0" && character != '.')
	{
		displayText = "";
		functionText = "(";
	}
	else if(displayText == "0" && character == '.')
	{
		functionText = "(0";
	}
	displayText += character;
	if(character != "!" && character.length === 1)
	{
		functionText += character;
	}
		
	document.getElementById("displayBox").value = displayText;
	}catch(err)
	{
		document.getElementById("wantsPadding").innerHTML = err;
	}
}		

function callMethod(key)
{
	switch(key)
		{
			case 1: put("sin(");
					functionText += "~(";
				break;
			case 2: put("cos(");
					functionText += "`(";
				break;
			case 3: put("tan(");
					functionText += "@(";
				break;
			case 4: put("asin(")
					functionText += "#(";
				break;
			case 5: put("acos(");
					functionText += "$(";
				break;
			case 6: put("atan(");
					functionText += "%(";
				break;
			case 7: put("log(");
					functionText += "_(";
				break;
			case 8: put("ln(");
					functionText += "|(";
				break;
			case 9: put("e^(");	
					functionText += ":(";
				break;
			case 10: put("!"); //, is the char key
					putFactorial();
				break;
			case 11: put("^(");
					functionText += "^(";
				break;
			case "ans": put("ans");
					functionText += ans;
			
		}
}

function putFactorial(){

		var bracketCount=0;
		var arr = functionText.split("");
		var lengthArray = functionText.length;
		try{
			var counter = 0;
			var replaceString2 = ",(";
			
			//if the last character is a digit then find the full no and replace the string
			if(!isNaN(arr[lengthArray-1]))
			{
				for( counter = lengthArray-2; counter>=0; counter-- )
				{
					if(isNaN(arr[counter]))
						break;	//break when the character is not a digit
				}
				
				//make a string from the last character that was a digit to the last 
				//counter +1 because the element at pos. counter is not a digit 
				for(var counter2 = counter+1; counter2<=lengthArray-1; counter2++)
					replaceString2 += arr[counter2];
				
				replaceString2 += ")";
				
				//remove the digits from the last and add the replaceString in the functionText
				functionText = functionText.substring(0,counter+1) + replaceString2;
				
				
			}
			
			else if(arr[lengthArray-1] == ')')
				{
					bracketCount++;
					
					for( counter = lengthArray-2; counter>=0; counter--)
					{
						if(arr[counter]==')')
							bracketCount++;
						else if(arr[counter]=='(')
							bracketCount--;
						else if(bracketCount==0)
							break;
					}
					
					//make a string from the character where brackets of the same level closed to the last 
					//counter +1 because the element at pos. counter is one ahead where bracketCount became 0
					for(var counter2 = counter+1; counter2<=lengthArray-1; counter2++)
						replaceString2 += arr[counter2];								
					
					replaceString2 += ")";
					
					//remove the digits from the last and add the replaceString in the functionText
					functionText = functionText.substring(0,counter+1) + replaceString2;
					
				}
				
			//if none of the two above cases then just put it so that either it can be deleted or produce an error on computation
			else 
				functionText += ",";
				
		}catch(err)
		{
			document.write("Error in put factorial");
		}
}
