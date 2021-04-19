const Employee = require("../lib/Employee");
const {test, expect} = require("@jest/globals");

const employee = new Employee("brandi", 1, "pritchettb14@gmail.com");
    
test("testing for new employee", ()=>{
    expect(typeof(employee)).toBe("object");
})

test("should be able to retrieve name that was input", () => {
    expect(employee.getName()).toBe("brandi");
});

test("should store id", () => {
    expect(employee.getId()).toBe(1);
});

test("should store email", () => {
    expect(employee.getEmail()).toBe("pritchettb14@gmail.com");
});

test("should return employee", () => {
    expect(employee.getRole()).toBe("Employee");
});