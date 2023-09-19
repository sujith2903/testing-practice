const capitalize = function (string) {
    let firstLetter = string.slice(0, 1).toUpperCase()
    let rest = string.slice(1)
    return firstLetter+rest
}

export default capitalize