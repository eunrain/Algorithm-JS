function solution(n) {
    return Array.from(Array(n+1).keys())
    .filter(num => n % num === 0)
    .reduce((a,b) => a + b, 0)
}