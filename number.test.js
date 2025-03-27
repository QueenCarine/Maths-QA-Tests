const isEven=require('./numbers')
test('divides by 2 to equal to 0',()=>{
expect(isEven(2)).toBe(true);
expect(isEven(4)).toBe(true);
expect(isEven(0)).toBe(true);
expect(isEven(-2)).toBe(true);
expect(isEven(-3)).toBe(false);
})