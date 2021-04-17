const Employee = require("../lib/Employee");


test("Can instantiate Employee", ()=>{
    const employee = new Employee()
    expect(typeof(employee)).toBe("object");
})

//these run the tests of the classes code