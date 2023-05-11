function solution(name, yearning, photo) {
    let answer = new Array(photo.length).fill(0);
    for (let i = 0; i < photo.length; i++) {
        for (let j = 0; j < yearning.length; j++) {
            if (photo[i].includes(name[j])) {
                answer[i] += yearning[j]
            }
        }
    }
    return answer;
}