function solution(n) {
    return String(n).split("").reduce((acc, curr) => Number(acc) + Number(curr),0)
    }