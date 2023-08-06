
//                               // ----------ES-6 Test-Answer---------- \\    

// 1. Differnce between let and const keyword?
   
//     * let methods is used to Re-Assigned the value
//     * const methids is used to Not Re-Assigned value
//     * This is the difference between the let and const variables .
// //----------------------------------------------------------------------------------------------------------------

// 2. Which methods are used to avoid Shallow copy?
//     * Json parse/json stringify  
//     * Object Assigned 
//     * Spread Operator .

// //----------------------------------------------------------------------------------------------------------------

// 3. Difference between match and forloop.
  
//    The map() method returns a new array.
// The map() method is used to transform the elements of an array

// 	forEach = forEach() method does not return a new array.
// forEach() method is used to loop through the elements of an array.

// //----------------------------------------------------------------------------------------------------------------

// 4. Write the states of promises.
//     * Fulfilled   
//     * Rejected  
//     * Pending  .
 
// //----------------------------------------------------------------------------------------------------------------

// 5. Difference between promise chaining and promise all.
   
//    *Executes one by one (synchronous). Result of one execution can be passed to the next step.
// Execution time to fulfill all the promise is comparatively high. Chaining after an error is possible.

// //----------------------------------------------------------------------------------------------------------------

// 6. What is the final value of obj.
   
//        const obj = {foo:1}
// 	 	 obj.bar = 2;
// 	  console.log(obj)
	
// 	ouptut is ( {foo:1,bar:2} )

// //----------------------------------------------------------------------------------------------------------------  

// 7. const speed = "quick";

// 	   console.log(`The ${speed} brown fox jumps over the lazy dog`)

// 	   output is (The quick brown fox jumps over the lazy dog)

// //----------------------------------------------------------------------------------------------------------------

// 8. var obj1 = {id: 1,company: "GFG"};

// 		var obj2 = obj1;
// 		obj2.id = 2;
// 		console.log(obj1.id);
// 		console.log(obj2.id);

// 	 output is ( 2,2 )
 
// //----------------------------------------------------------------------------------------------------------------

// 9.  var input = [3,4,5,6] How to achieve this output?
		 		
// 	  var c = input.map((a,b)=>{
		   
// 		   return a+b
	       
// 		   })

// 	  console.log(c)

// 	  Output is ( [3,5,7,9] )

// //----------------------------------------------------------------------------------------------------------------

// 10. Which method is used to check all values and return boolean value?
		
// 		 * Some
// 		 * Every .

// //----------------------------------------------------------------------------------------------------------------

// 11. How to find minimum value?
		
// 		const price = [35,66,234,56,88,90,22]

// 		var c =	price.sort((a,b)=>{

// 			return a-b
// 		})

// 		console.log(c[0])

// 		   output is( 22 )		

// //----------------------------------------------------------------------------------------------------------------

// 12. ES6 Published in ----?
	
// 	 * ES6 Published in 2015 .
	
				
// //----------------------------------------------------------------------------------------------------------------			

// 13. var employee =[
// 						{name : "Karuppasamy",age : 24,Salary : 25000,level : "junior"},
// 						{name : "Samy",age : 21,Salary : 20000,level : "junior"},
// 						{name : "Kaviya",age : 22,Salary : 18000,level : "junior"},
// 						{name : "Naresh",age : 45,Salary : 100000,level : "senior"},
// 						{name : "Prem",age : 24,Salary : 50000,level : "senior"}
// 																					 ]
// 	   		let	c=employee.map((a,b)=>{

// 	   			return a.level=="senior"?a.name:""

// 	   		})

// 	 		console.log(c)
			
// 			Output is ( ["Naresh","Prem"] )

// //----------------------------------------------------------------------------------------------------------------

//  14.  const rem = 0
// 			rem++;
// 			rem++;
// 			console.log(rem);

// 			output is (Output is Error Because Const Variable Method is Not Re-Assigned the Value)
			
// //----------------------------------------------------------------------------------------------------------------

//  15.	function a(){
// 	 		console.log("Hi")
// 	 		}

// 	 		function b(){
// 	 		console.log("Fabevy")
// 	 		}

// 	 		a(b)
		
// 			output is (Hi)

// //----------------------------------------------------------------------------------------------------------------

// 16. var num = 0;
// 		console.log(num++)
// 		console.log(num++)
// 		console.log(++num)
// 		console.log(num)
		
// 		output is (0 1 3 3)	

// //----------------------------------------------------------------------------------------------------------------

//  17. Solve the armstrong logic in async/await
// 		var a = 111
// 		var b = a
// 		var c = b
// 		var count = 0
// 		var sum = 0

// 		function counts() {
			
// 			return new Promise((d,e)=>{

// 				while(x!=0){
// 					let rem = a % 10
// 					a = ( a-rem) / 10
// 					count++			
// 				}
// 				d(count)
// 			})
// 		}

// 		function sums(count) {
				
// 				return new Promise(( f , g )=>{

// 					while(y!=0){
// 						let rem = b % 10
// 						b = ( b-rem ) / 10
// 						sum+= ( rem**count ) 
// 					}
// 					f(sum)
// 				})
// 		}


// 		function check(amstrong) {
			
// 			return new Promise(( h , i) => {
				
// 				if (c==amstrong) {
// 					console.log( c + " this is a Amstrong Number")
// 				} else {
// 					console.log( c + " this is not a Amstrong Number")
// 				}
// 			})
// 		}



// 		async function final() {
			
// 			try{
// 				let count = await counts()
// 				let amstrong = await sums(count)
// 				let output = await check(amstrong)
// 				console.log(outpt)
// 			}
		
// 			catch{
// 				console.log("error")
// 			}
// 		}

// 		final()
	 
//                       output is (111 is not a Amstrong Number)	 

// //----------------------------------------------------------------------------------------------------------------

// 18. let obj1 = {name : "Monisha"}

// 		let obj = Object.assign({},obj1);
// 		obj1.position = "QAE"

// 		console.log(obj,obj1);
		
// 		output is ( {name: 'Monisha'} {name: 'Monisha', position: 'QAE'} )
		
// //----------------------------------------------------------------------------------------------------------------

// 19. let person = {name: "Linda"}

// 		const members = [person];
// 		person = null;
// 		console.log(person)

// 		output is ( null )

// //----------------------------------------------------------------------------------------------------------------

// 20. Which methods are used to solve async function into sync?

// 	  * Promise	
// 	  * Promise Chaining	
// 	  * Promise All	
// 	  * Async Wait	
// 	  * Call Back	
// 	  * Call Back Hell .

// //-----------------------------------------------------************--------------------------------------------------------	 
// 			