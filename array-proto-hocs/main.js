function compareArrays (arr1, arr2) {
	if (arr1.length !== arr2.length) return false;
	for (let i=0; i<arr1.length; i++){
		if (arr1[i] !== arr2[i]) return false;
	}
	return true;
 }

let arr1 = [1, 2, 4];
let arr2 = [1, 2, 4];
console.log(compareArrays(arr1, arr2));



function memoize (fn, limit) {
	return function () {
		console.log(fn());
	}

   	const  sum = (a, b) => (a + b); 
   
   args = Array.from(arguments);
   let result = fn.apply(args);
   		
   			return result;

   		}
   	
   
  console.log(fn(3, 4));
  console.log(memoize(3, 4));


