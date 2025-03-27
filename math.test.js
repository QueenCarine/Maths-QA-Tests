const{add,subtract,multiply,divide}=require('./maths');

test('adds 1+4 to equal to 5',()=>{
    expect(add(1,4)).toBe(5);
});
test('subtracts 5-2 to equal to 3',()=>{
    expect(subtract(5,2)).toBe(3);
});
test('multiplies 3*2 to equal to 6',()=>{
    expect(multiply(3,2)).toBe(6);
})
test('divides 10/2 to equal to 5',()=>{
    expect(divide(10,5)).toBe(2);
})