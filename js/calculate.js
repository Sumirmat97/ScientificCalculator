
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
function factorial(num)
{
	var fact = 1;
	
	if(num == 0)
		return fact;
	for(var i=1; i<=num; i++)  
	{
		fact = fact*i;
	}
	return fact;
}
function calculatePop1(operation,resultStack)
{
	
	try{
		val = parseFloat(resultStack.pop());
		
		switch(operation)
		{
			case '~': resultStack.push(Math.sin(val)); break;
			case '`': resultStack.push(Math.cos(val)); break;
			case '@': resultStack.push(Math.tan(val)); break;
			case '#': resultStack.push(Math.asin(val)); break;
			case '$': resultStack.push(Math.acos(val));	break; 
			case '%': resultStack.push(Math.atan(val)); break;
			case '_': resultStack.push(Math.log(val)*2.303); break;
			case '|': resultStack.push(Math.log(val)); break;
			case ':': resultStack.push(Math.exp(val));break;
			case ',': resultStack.push(factorial(val));break;
		}
	
	}catch(err)
	{
		document.getElementById("displayBox").value = err;
	}
}

function calculatePop2(operator,resultStack)
{
	try{
		var val1 = parseFloat(resultStack.pop());
		var val2 = parseFloat(resultStack.pop());
	
		switch(operator)
		{
			case "+": resultStack.push(val2 + val1); break;
			case "-": resultStack.push(val2 - val1); break;
			case "*": resultStack.push(val2 * val1); break;
			case "/": resultStack.push(val2 / val1); break;
			case "^": resultStack.push(Math.pow(val2,val1)); break;
		}
	}
	catch(err)
	{
		document.getElementById("displayBox").value = err;
	}
}

function calculate(exp)
{
	try{
		
		var arr = exp.split(" ");
		var resultStack = [];
		
		for(var i=0; i<arr.length-1; i++)
		{
			if(isNaN(arr[i]))
			{
				switch(arr[i])
				{
					case "+":
					case "-":
					case "*":
					case "/":
					case "^":
						calculatePop2(arr[i],resultStack);
						break;
					default: 
						calculatePop1(arr[i],resultStack)
						break;	
				}
			}
			else
				resultStack.push(arr[i]);
		}
		
		ans = resultStack.pop()
		resultString = ans.toString();
		displayText = resultString;
		functionText = "(" + resultString; 
		document.getElementById("displayBox").value = displayText; 
		
	}catch(err)
	{
		document.getElementById("displayBox").value = "Error";
	}
}

function compute()
{	
	try{
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
						else if(ch == 'e')
						{
							str += ch;
							ch = functionText.charAt(j+1);
							if(ch == "+" || ch == "-")
							{
								str += ch;
								j++;
							}
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
			
			//document.write(postfixExp);
			calculate(postfixExp);
			
		}catch(err){
				document.getElementById("displayBox").value = err;
		}
}
