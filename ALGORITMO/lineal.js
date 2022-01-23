// Javascript program to implement
// the above approach
 
// Function to generate random numbers
function linearCongruentialMethod(Xo, m,  a, c,
    randomNums, noOfRandomNums)
{

// Initialize the seed state
randomNums[0] = Xo;

// Traverse to generate required
// numbers of random numbers
for(let i = 1; i < noOfRandomNums; i++)
{

// Follow the linear congruential method
randomNums[i] = ((randomNums[i - 1] * a) + c) % m;
}
}

// Driver Code

// Seed value
let Xo = 5;

// Modulus parameter
let m = 7;

// Multiplier term
let a = 3;

// Increment term
let c = 3;

// Number of Random numbers
// to be generated
let noOfRandomNums = 10;

// To store random numbers
let randomNums = new Array(noOfRandomNums).fill(0);

// Function Call
linearCongruentialMethod(Xo, m, a, c,
            randomNums,
            noOfRandomNums);

// Print the generated random numbers
for(let i = 0; i < noOfRandomNums; i++)
{
document.write(randomNums[i] + " ");
console.log(randomNums[i] + " ");
}