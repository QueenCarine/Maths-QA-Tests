const isValidEmail=require("./emailvalidator")
test('email is valid',()=>{
    expect(isValidEmail('queencarineh@gmail.com')).toBe(true);
    expect(isValidEmail('queencarinehgmail.com')).toBe(false)

})