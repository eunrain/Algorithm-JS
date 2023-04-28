function solution(str1, str2) {
    return str1.split("").reduce((acc,curr,index) => {
        return acc + curr + str2.split("")[index]
    },"")
}