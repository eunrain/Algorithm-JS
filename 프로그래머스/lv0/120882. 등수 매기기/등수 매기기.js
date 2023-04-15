function solution(score) {
    const rank = new Array(score.length).fill(1);
    const average = score.map((i) => (i[0] + i[1]) / 2);
    for (let i = 0; i < average.length; i++) {
        for (let j = 0; j < average.length; j++) {
            if (average[j] > average[i]) rank[i]++;
        }
    }
    return rank;
}