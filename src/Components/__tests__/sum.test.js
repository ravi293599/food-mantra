import sum from "../sum.js"

test("The sum function should calculate the sum of two numbers",() =>{
    const result = sum(4,5);

    //Assertion
    expect(result).toBe(9);
})