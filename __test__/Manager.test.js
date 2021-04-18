const Manager = require("../lib/Manager")


test("New Manager", ()=>{
    const manager = new Manager()
    expect(typeof(manager)).toBe("object");
})