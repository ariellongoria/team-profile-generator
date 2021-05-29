const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");

test("create manager object", () => {
    const manager = new Manager("Dave", 3, "dave@work.com", 207);

    expect(manager.name).toBe("Dave");
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toBe("dave@work.com");
    expect(manager.officeNum).toEqual(expect.any(Number));
});

test("get manager role", () => {
    const manager = new Manager("Dave", 3, "dave@work.com", 207);

    expect(manager.getRole()).toBe("Manager");
});
