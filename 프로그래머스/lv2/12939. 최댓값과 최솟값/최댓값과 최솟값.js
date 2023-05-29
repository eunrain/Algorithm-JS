function solution(s) {
    const numbers = s.split(" ").map(Number);
    const maxValue = Math.max(...numbers);
    const minValue = Math.min(...numbers);
    return `${minValue} ${maxValue}`;
}