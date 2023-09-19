import capitalize from "../scripts/capitalize";

test('Returns Capitalized String', () => {
    expect(capitalize('test')).toBe('Test');
});