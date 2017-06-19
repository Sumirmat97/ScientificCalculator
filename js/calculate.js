
var functionTextArray = [];
var resultString = "";
var pos; //to index the FunctionTextArray 

function compute()
		{	
			try{
					
					//functionTextArray = functionText.split("");
					resultString = "";
					//findLevel(0,"Nofunction");
					//displayText = resultString;
					
			/*use stack to make posstfix expression and then evaluate*/
			
					functionText = "(" + resultString;
					ans = parseInt(resultString);
					document.getElementById("displayBox").value = ans;
				
				
				}catch(err){
						document.getElementById("displayBox").value = "Error";
				}
		}
		/*
	//split the function text and create anew string to store the results of individual brackets

function findLevel(startPos, hadFunction)
{
	try{
		var bracketString = "";

		pos = startPos+1;
		
		while(true)				// the function returns when ')' is found no need for a condition to stop the loop	
		{
			//to check if the brackets inside this current bracket has a function or not 
			var functionName = checkFunction(functionTextArray[pos]); 
			
			//if '(' is found call the findLevel function with the position of '(' and with the name of the function it has
			if(functionName !== "Nofunction")
				findLevel(pos+1,functionName);
				
			//if the corresponding ')' is found then evaluate the inside of the bracket
			else if(functionTextArray[pos] == ')')
				{
					for( var counter = startPos; counter<=pos; counter++)
						bracketString += functionTextArray[counter];
					
					var ansBracket = eval(bracketString);
				
					//if there is a function associated with the bracket pair then apply that fuunction and then append that value to resultString
					if(hadFunction != "Nofunction")
						ansBracket = applyFunction(ansBracket,hadFunction);

					resultString += ansBracket;
					return;
				}

			bracketString += functionTextArray[pos];
			pos++;
		}		
	}catch(err)
	{
		document.getElementById("displayBox").value = "Error";
	}
}*/

function checkFunction(value)
{
	switch(value){
				
				case '~': return '~';
					break;
				case '`': return '`';
					break;
				case '@': return '@';
					break;
				case '#': return '#';
					break;
				case '$': return '$';
					break; 
				case '%': return '%';
					break;
				case '_': return '_';
					break;
				case '|': return '|';
					break;
				case ':': return ':';
					break;	
				case '?': return '?';
					break;

				default: 
					return "Nofunction"; 							
	}
}

function  applyFunction(ansBracket,functionName)
{
	try{
		switch(functionName)
		{
			case '~': ansBracket = Math.sin(ansBracket);
				break;
			case '`': ansBracket = Math.cos(ansBracket);
				break;
			case '@': ansBracket = Math.tan(ansBracket)
				break;
			case '#': ansBracket = Math.asin(ansBracket);
				break;
			case '$': ansBracket = Math.acos(ansBracket);
				break; 
			case '%': ansBracket = Math.atan(ansBracket);
				break;
			case '_': ansBracket = Math.log(ansBracket)*2.303;
				break;
			case '|': ansBracket = Math.log(ansBracket);
				break;
			case ':': ansBracket = Math.exp(ansBracket);
				break;	
			case '?':
				
				//find the number whose power the user wants to find
				var counter = resultString.length - 1; 
				
				//find the string whose power is to be determined
				while(!isNaN(resultString[counter]))
				{
					numberString = resultString[counter];
					counter--;
				}
				//reverse the string as it was read in reverse order 72 was read as 27
				numberString = numberString.reverse();
				var num = parseInt(numberString);
				ansBracket = Math.pow(num,ansBracket);
				break;

			default: throw "invalid function selected";
		
	}

	}catch(err){
		document.getElementById("displayBox").value = err;
	}
	
	return ansBracket;
}
