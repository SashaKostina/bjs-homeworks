
let compareArrays = function (arr1, arr2){
	if (arr1.length !== arr2.length) return false;
	for (let i=0; i<arr1.length; i++){
		if (arr1[i] !== arr2[i]) return false;
	}
	return true;
 }

let arr1 = [1, 2, 4];
let arr2 = [1, 2, 3];
console.log(compareArrays(arr1, arr2));



let memoize = function (fn, limit) {
   	let sum, mSum;
   	let results = {args, result};
   	return fn = (a, b) => (a + b); 
   		if (fn in args) {
   			console.log();
   			return results[fn];
   		}
   		else {
   			result = a + b;
   			results[fn] = result;
   			return result;

   		}
   	}
   	
   let memory = memoize();
   
  
  console.log(fn(3, 4));
  console.log(memoize(3,4));
