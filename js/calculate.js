
var resultString = "";

function precedence(ch)
{
	switch(ch)
	{
		case '+':
		case '-': return 0;
		case '*': 
		case '/': return 1;
		case '(': return -1;
		default:
			return 2;
	}
}
function calculate(exp)
{
	
}

function compute()
{	
	try{
		
		debugger;
			var stck = [];
			var postfixExp = "";
			
			for(var i = 0; i < functionText.length; i++) 
			{
				var ch = functionText.charAt(i);	
				if(ch == '(')
				{
					stck.push(ch);
				}
				else if(!isNaN(ch) || ch == '.')
				{
					var str = "";
					var j=0;
					str += ch;
					for(j = i+1; j < functionText.length ; j++)
					{
						ch = functionText.charAt(j);
						if(!isNaN(ch) || ch == '.')
						{
							str += ch;
						}
						else
							break;
					}
					postfixExp += str + " ";
					i = j-1;
				}
				else if(ch == ')')
				{
					while(stck.length != 0 && stck[stck.length - 1] != '(')
						postfixExp += stck.pop() + " ";
					
					if(stck.length != 0 && stck[stck.length -1] != '(' )
						throw "brackets not matching";
					else
						stck.pop();
				}
				else
				{
					while(stck.length != 0 && precedence(ch) <= precedence(stck[stck.length - 1]))
						stck.pop();
					
					stck.push(ch);
				}	
			}
			while(stck.length != 0)
			{
				postfixExp += stck.pop() + " ";
			}
			
			calulate(postfixExp);
			
			/* return postfix expression to evaluate it */
			functionText = "(" + resultString;
			ans = parseInt(resultString);
			document.getElementById("displayBox").value = ans;
		
		
		}catch(err){
				document.getElementById("displayBox").value = err;
		}
}

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

function applyFunction(ansBracket,functionName)
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
