const Manager = require("../lib/Manager")
const { test, expect } = require("@jest/globals");
const manager = new Manager("brandi", 1, "pritchettb14@gmail.com","555.555.555")

test("New Manager", ()=>{    
    expect(typeof(manager)).toBe("object");
})
test("should return with office number", () => {
    expect(manager.getOfficeNumber()).toBe("555.555.555");
});

test("should return with Manager", () => {
    expect(manager.getRole()).toBe("Manager");
});