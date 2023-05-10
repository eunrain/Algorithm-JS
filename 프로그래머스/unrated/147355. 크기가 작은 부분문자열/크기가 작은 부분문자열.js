function solution(t, p) {
    let answer = 0;
    for (let i = 0; i < t.length; i++) {
        let num = t.substr(i, p.toString().length);
        if (num.length !== p.toString().length) continue;
        if (num <= p) {
            answer ++
        }
    }
    return answer;
}