const Engineer = require("../lib/Engineer");


test("New Engineer", ()=>{
    const engineer = new Engineer()
    expect(typeof(engineer)).toBe("object");
})