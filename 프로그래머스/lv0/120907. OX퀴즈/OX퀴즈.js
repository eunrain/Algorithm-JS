function solution(quiz) {
    let answer = [];
    quiz.map((i) => eval(i.split("=")[0]) == i.split("=")[1] ? answer.push("O") : answer.push("X"))
    return answer;
}