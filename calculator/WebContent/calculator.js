/**
 * 
 */
var calculator = (function(){
	var OPERATOR_REGEX = /\+|-|\/|\*/;

	var returnObject = {};
	var entry = [];
	var maxLength = 8
	var operandA = null;
	var operator = null;

	returnObject.pressButton = function(value){
		if(typeof value === 'number' && entry.length < maxLength){
			entry.push(value);
			console.log(entry.join(''));
		} else{
			// check for operator
			if(OPERATOR_REGEX.test(value)){
				// no previous value has been entered (i.e. first in a chain)
				if(operandA === null){
					operandA = entry.join('');
					entry = [];
					operator = value;
				}
				// previous value is present
				else{
					operandA = calculate();
					entry = [];
					operator = value;
					updateDisplay();
				}
			} else if(value == "AC"){
				//clear everything
				entry = [];
				operandA = null;
				operator = null;
			}

		}
		updateDisplay();
	};


	
	function calculate(){
		switch(operator){
		case "-":
			return (Number(operandA) - Number(entry.join('')));
		case "/":
			return (Number(operandA) / Number(entry.join('')));
		case "*":
			return (Number(operandA) * Number(entry.join('')));
		default:
			return (Number(operandA) + Number(entry.join('')));
		}
		
	}



	function updateDisplay(value){
		if(typeof value === 'undefined'){
			if(entry.length > 0){
				setDisplay(entry.join(''));
			} else if(operandA === null){
				setDisplay(0);
			} else{
				setDisplay(operandA);
			}		
		}
		else {
			setDisplay(vale);
		}
	}

	function setDisplay(value){
		document.getElementById("calc-display").innerHTML = value;
	}

	return returnObject;
})();