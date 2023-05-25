function solution(str) {
    return str
        .split(" ")
        .map((word) =>
          word
            .split("")
            .map((s, i) => (i % 2 === 0 ? s.toUpperCase() : s.toLowerCase()))
            .join("")
        )
        .join(" ");
}
