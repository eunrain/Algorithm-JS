function solution(t, p) {
    let answer = 0;
    for (let i = 0; i < t.length; i++) {
        let num = t.substr(i, p.length);
        if (num.length !== p.length) continue;
        if (num <= p) {
            answer ++
        }
    }
    return answer;
}