function solution(n, arr1, arr2) {
      let answer = [];
      let newArr1 = arr1.flatMap((i) =>
        i.toString(2).padStart(n, "0").split("")
      );
      let newArr2 = arr2.flatMap((i) =>
        i.toString(2).padStart(n, "0").split("")
      );
      let newArr3 = newArr1.map((_, i) =>
        newArr1[i] === "1" || newArr2[i] === "1" ? "#" : " "
      );

      for (let i = 0; i < newArr3.length; i += n) {
        answer.push(newArr3.slice(i, i + n).join(""));
      }
      return answer;
    }