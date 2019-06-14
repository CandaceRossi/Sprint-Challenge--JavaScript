// ==== Callbacks ====  

/* Step 1: Create a higher-order function that accepts a callback
 * Create a higher-order function named consume that can take 3 parameters.
 * The first two parameters can accept any argument
 * The last parameter accepts a callback 
 * In the body of the function return the callback with the two parameters that you created
 */
function consume(x, y, cb) {
    cb(x) + cb(y);
}
consume(2, 3, function(itis) {
    console.log(itis);
});

/* Step 2: Create several functions to callback with consume();
 * Create a function named add that returns the sum of two numbers
 * Create a function named multiply that returns the product of two numbers 
 * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
 */
const sumNums = (x, y, cb) => {
    cb(x + y);
}
sumNums(2, 3, function(sum) {
    console.log(sum);
});

const multiplyNums = (x, y, cb) => {
    cb(x * y);
}
multiplyNums(2, 3, function(product) {
    console.log(product);
});

const greetings = (x, y, cb) => {
    cb(`Hello ${x} ${y}, nice to meet you!`);
};
greetings('candace', 'rossi', function(greeting) {
    console.log(greeting);
});
/* Step 3: Check your work by un-commenting the following calls to consume(): */
// consume(2,2,add); // 4
// consume(10,16,multiply); // 160
// consume("Mary","Poppins", greeting); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 

// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation: 
//Nestedfunction() can access the variables inside of the scope of the object because 
//it is can reach outward as a function in its object. 

const external = "I'm outside the function";

function myFunction() {
    console.log(external);
    const internal = "Hello! I'm inside myFunction!";

    function nestedFunction() {
        console.log(internal);
    };
    nestedFunction();
}
myFunction();