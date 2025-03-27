const fizzBuzz=require('./fizzbuzz')
test('Returns fizz,buzz or fizzbuzz according to number',()=>{
    expect(fizzBuzz(15)).toBe('FizzBuzz');
    expect(fizzBuzz(3)).toBe('Fizz');
    expect(fizzBuzz(5)).toBe('Buzz');
})