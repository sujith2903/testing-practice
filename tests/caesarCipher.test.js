import caesarCipher from "../scripts/caesarCipher";

test('Returns caesarCiphered string', () => {
    expect(caesarCipher('string', 5)).toBe('xywnsl');
});

test('Test for wrapping', () => {
    expect(caesarCipher('zebra', 2)).toBe('bgdtc');
});

test('Test for case', () => {
    expect(caesarCipher('STRING', 5)).toBe('XYWNSL');
});

test('Test for punctuation', () => {
    expect(caesarCipher('string!', 5)).toBe('xywnsl!');
});


