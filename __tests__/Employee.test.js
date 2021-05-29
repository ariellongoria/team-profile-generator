const Employee = require("../lib/Employee");

test("creates a new employee object", () => {
    const employee = new Employee("Bob", 1, "bob@work.com");

    expect(employee.name).toBe("Bob");
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toBe("bob@work.com");
});

test("get employee name, id, and email", () => {
    const employee = new Employee("Bob", 2, "bob@work.com");

    expect(employee.getId()).toBe(2);
    expect(employee.getName()).toBe("Bob");
    expect(employee.getEmail()).toBe("bob@work.com");
});

test("get employee role", () => {
    const employee = new Employee("Bob", 2, "bob@work.com");

    expect(employee.getRole()).toBe("Employee");
});
