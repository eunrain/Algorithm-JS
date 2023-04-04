function solution(id_pw, db) {
    let answer = '';
    db.map((user) => {
    if(user[0] === id_pw[0] && user[1] === id_pw[1]) answer ="login"
    if(user[0] === id_pw[0] && user[1] !== id_pw[1]) answer = "wrong pw"
    if(user[0] !== id_pw[0] && user[1] !== id_pw[1]) return answer="fail"
    })
   
    return answer;
}