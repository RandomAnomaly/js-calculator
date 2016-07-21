/**
 * 
 */

var calculator = (function(){
	// locally scoped object
	var returnObject = {};
	
	
	returnObject.testFunc = function(value){
		return value + " public, yay!";
	};
	
	
	
	// return to give everyone access to our public methods
	return returnObject;
})();

function testFunction(){
	
}