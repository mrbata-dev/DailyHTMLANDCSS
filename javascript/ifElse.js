// syntax
/*
if(conditions)
{
    // statements
}
    */

// Example
// if(5 > 3)
// {
//     console.log("5 is greater than 3");
// }

/*
if(conditions)
{
    // statements
}
else{
    // statements
}
*/

// if(5 > 3)
// {
//     console.log("5 is greater than 3");
// }else{
//     console.log("3 is greater than 5");
    
// }
/*
// if..else..if else
    if(conditions1)
    {
        // statements
    }
    else if(conditions2)
    {
        // statements
    }
    else{
        // statements
    }
        */

    // if(marks >= 90)
    // {
    //     console.log("A+ Grade");
    // }
    // else if(marks >= 80)
    // {
    //     console.log("A Grade");
    // }
    // else if(marks >= 70)
    // {
    //     console.log("B+ Grade");
    // }else {
    //     console.log("Fail");
    // }

    // WAP to find the largest of two numbers

let num1 = 20;
let num2 = 5;

if(num1 > num2)
{
    console.log(num1 + " is largest");
} else if(num2 > num1)
{
    console.log(num2 + " is largest");
}
else if (num1 == num2)
{
    console.log("Both are equal");
}
else{
    console.log("Invalid input");
}



    // WAP to find the voter is eligible or not'
    let age = 8;
    if(age >= 18)
    {
        console.log("Eligible to vote");
        
    }
    else{
        console.log("Not eligible to vote");
    }