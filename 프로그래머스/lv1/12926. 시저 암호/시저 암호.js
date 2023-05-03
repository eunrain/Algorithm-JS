function solution(s, n) {
    return s
    .split("")
    .map((str) => {
        if (str === " ") return " ";
        const code = str.charCodeAt(0) + n;
        return str.toUpperCase() === str
        ? String.fromCharCode(((code - 65) % 26) + 65)
        : String.fromCharCode(((code - 97) % 26) + 97)
    })
    .join("");
}