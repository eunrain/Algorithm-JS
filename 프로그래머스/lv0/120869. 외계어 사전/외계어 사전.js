function solution(spell, dic) {
      let answer = 0;
      let array = new Array(dic.length + 1).fill(0);
      for (let i = 0; i < dic.length; i++) {
          for (let j = 0; j < spell.length; j++) {
              if (dic[i].includes(spell[j])) {
                  array[i]++;
              }
              array.includes(spell.length) ? (answer = 1) : (answer = 2)
          }
      }
      return answer;
}