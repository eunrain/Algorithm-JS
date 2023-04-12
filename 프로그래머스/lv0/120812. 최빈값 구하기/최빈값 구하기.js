function solution(array) {
      const getSum = array.reduce(
        (ac, v) => ({ ...ac, [v]: (ac[v] || 0) + 1 }),
        {}
      );
      const getSumValue = Object.values(getSum);

      const frequency = Object.keys(getSum).filter((key) => {
        return getSum[key] === Math.max(...getSumValue);
      });

      if (frequency.length > 1) {
        return -1;
      } else {
        return Number(frequency)
      }
    }