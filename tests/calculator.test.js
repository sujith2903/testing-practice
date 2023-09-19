import calculator from "../scripts/calculator";

test('Returns results of basic arithmetic operations', () => {
    expect(calculator(2,2)).toEqual({ add: 4, subtract: 0, multiply: 4, divide: 1 });
});