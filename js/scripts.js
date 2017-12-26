function getTriangleArea (a, h) {

	if ( (a > 0) && (h > 0) ) {
    	
    	var score = a * h / 2;
    
    } else { 
		
		console.log('Nieprawidłowe dane');
	
	}

	return score;
}

var triangle0Area = console.log(getTriangleArea(0, 0));
var triangle1Area = console.log(getTriangleArea(10, 6));
var triangle2Area = console.log(getTriangleArea(10, 15));
var triangle3Area = console.log(getTriangleArea(3, 3));