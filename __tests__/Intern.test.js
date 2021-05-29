const Intern = require("../lib/Intern");

test("creates a new Intern object", () => {
    const intern = new Intern("Bob", 1, "bob@work.com", "UT Bootcamp");

    expect(intern.name).toBe("Bob");
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toBe("bob@work.com");
    expect(intern.school).toBe("UT Bootcamp");
});

test("gets intern school", () => {
    const intern = new Intern("Bob", 1, "bob@work.com", "UT Bootcamp");

    expect(intern.getSchool()).toBe("UT Bootcamp");
});

test("gets intern role", () => {
    const intern = new Intern("Bob", 1, "bob@work.com", "UT Bootcamp");

    expect(intern.getRole()).toBe("Intern");
});
