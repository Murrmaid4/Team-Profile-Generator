const Intern = require("../lib/Intern")
const { test, expect } = require("@jest/globals");

const intern = new Intern("brandi", 1, "pritchettb14@gmail.com","Ucf")

test("New Intern", ()=>{

    expect(typeof(intern)).toBe("object");
})
test("should return with intern school info", () => {
    expect(intern.getSchool()).toBe("Ucf");
});

test("should have proper role", () => {
    expect(intern.getRole()).toBe("Intern");
});