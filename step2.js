const sumZero = (arr) => {
    let answer = false
    for(let i = 0; i < arr.length; i++){
        for(let j = (i+1); j<arr.length; j++){
            if(arr[i] + arr[j] == 0){
                answer = true
            } 
        }
    }
    return answer
}


console.log(sumZero([1, 2, 3]))
//time complexity is O(n^2)
//space complexity is O(n^2)

///////////////////////////////////////////////////////

const hasUniqueChars = (string) => {
    let answer = false
    string.split('')
    for(let i = 0; i<string.length; i++){
        for(let j=(i+1); j< string.length; j++){
            if(string[i] == string[j]){
                answer = true
            }
        }
    }
    return answer
}

console.log(hasUniqueChars('Moonday'))
//time complexity is O(n^2)
//space complexity is O(n^2)

/////////////////////////////////////////////////////
 
let letterCount = {a:0, b:0, c:0, d:0, f:0, g:0, h:0, i:0, j:0, k:0, l:0, m:0, n:0, o:0, p:0, q:0, r:0, s:0, t:0, u:0, v:0, w:0, x:0, y:0, z:0}

function isPangram(string){
    let pangram = true
    string = string.toLowerCase().split('')
    console.log(string)
    string.forEach(element => {
        if(letterCount.hasOwnProperty(element)){
            letterCount[element] += 1
        } 
    });
    for(letter in letterCount){
        if (letterCount[letter] == 0){
            pangram = false
            
        }
    }
    return pangram
}

console.log(isPangram('The quick brown fox jumps over the lay dog!'))
//time complexity is O(n)
// space complexity is O(n)

////////////////////////////////////////////////////////////////////////////

function findLongestWord(arr){
    let longestWord = 0
    for(let i = 0; i <arr.length; i++){
        if(arr[i].length > longestWord){
            longestWord = arr[i].length
        }
    }
    return longestWord

}

console.log(findLongestWord(["hi", "hello", 'testarooni']))
//time complexity is O(n)
//space complexity is O(n)
