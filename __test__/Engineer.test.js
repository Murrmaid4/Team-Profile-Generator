const Engineer = require("../lib/Engineer");
const { test, expect } = require("@jest/globals");

const engineer = new Engineer("brandi", 1, "pritchettb14@gmail.com","murrmaid4")

test("make New Engineer", ()=>{
    expect(typeof(engineer)).toBe("object");
})
test("should grab Github Username", () => {
    expect(engineer.getGitHub()).toBe("murrmaid4");
});

test("should return with Engineer", () => {
    expect(engineer.getRole()).toBe("Engineer");
});