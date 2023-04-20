function solution(keyinput, board) {
    let result = [0, 0];
    const [x, y] = board;
      for (let i = 0; i < keyinput.length; i++) {
        if (keyinput[i] === "left") result[0]--;
        if (keyinput[i] === "right") result[0]++;
        if (keyinput[i] === "up") result[1]++;
        if (keyinput[i] === "down") result[1]--;
      }
    
        if (Math.abs(result[0]) > Math.floor(x / 2)) {
        result[0] = result[0] > 0 ? Math.floor(x / 2) : Math.ceil(-(x - 1) / 2);
      }
        if (Math.abs(result[1]) > Math.floor(y / 2)) {
        result[1] = result[1] > 0 ? Math.floor(y / 2) : Math.ceil(-(y - 1) / 2);
      }
    
      return result;
}