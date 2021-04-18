const Intern = require("../lib/Intern")


test("New Intern", ()=>{
    const intern = new Intern()
    expect(typeof(intern)).toBe("object");
})