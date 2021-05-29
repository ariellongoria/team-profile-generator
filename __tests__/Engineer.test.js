const Engineer = require("../lib/Engineer");

test("creates an engineer object", () => {
    const engineer = new Engineer("Bob", 1, "bob@work.com", "bobcodeswell");

    expect(engineer.name).toBe("Bob");
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toBe("bob@work.com");
    expect(engineer.github).toBe("bobcodeswell");
});

test("gets engineer github", () => {
    const engineer = new Engineer("Bob", 1, "bob@work.com", "bobcodeswell");

    expect(engineer.getGithub()).toBe("bobcodeswell");
});

test("gets engineer role", () => {
    const engineer = new Engineer("Bob", 1, "bob@work.com", "bobcodeswell");

    expect(engineer.getRole()).toBe("Engineer");
});
