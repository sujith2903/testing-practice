function caesarCipher(string,shift) {

    let cipher = ''
    let alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    
    function checkUpperCase(letter) {
        return letter == letter.toUpperCase()
    }

    for (let letter in string) {

        let index = alphabets.indexOf(string[letter].toLowerCase())

        if ( index + shift >= 26) {
            index = index - 26 
        }

        if (string[letter].match(/[A-Za-z]/)) {
            if (checkUpperCase(string[letter])) {
                cipher += alphabets[index + shift].toUpperCase()
            } else {
                cipher += alphabets[index + shift]
            }
        } else {
            cipher += string[letter]
        }
    }
    return cipher
}

export default caesarCipher