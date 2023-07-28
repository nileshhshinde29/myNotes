Certainly! Here are some more challenging string-based JavaScript exercises:

1. **Longest Substring Without Repeating Characters**:
   - Write a function that takes a string as input and returns the length of the longest substring in the string without repeating characters.

   Example:
   - Input: "abcabcbb"
   - Output: 3 (The longest substring without repeating characters is "abc")

   ans=>
   let input = "abcabcbb"
   let maxLength = 0


for (let i = 0; i < input.length; i++) {

    let str = input[i];

    for (let j = i + 1; j < input.length; j++) {

        if (str.includes(input[j])) {
            break;
        }
        str = str + input[j]

        if (maxLength < str.length) {
            maxLength = str.length
        }

    }
}

console.log(maxLength);


2. **Valid Parentheses**:
   - Write a function that takes a string containing parentheses, brackets, and curly braces as input and determines if the string's opening and closing brackets are valid and properly nested.

   Example:
   - Input: "{[()()]}"
   - Output: true

   const str = "{[()()]}";
   let stack= []
   for (const char of str) {
    if (char === '(' || char === '[' || char === '{') {
      stack.push(char);
    } 
    else if (char === ']' && stack.pop() !== '[') {
      return console.log('not');
    }
    else if (char === ')' && stack.pop() !== '(') {
      return console.log('not');
    }  else if (char === '}' && stack.pop() !== '{') {
      return console.log('not')
    }
  }
if(stack.length==0){
    console.log('yes')
}

3. **Most Common Word**:
   - Write a function that takes a paragraph of text and a list of banned words as input and returns the most common word in the paragraph that is not on the list of banned words.

   Example:
   - Input: "Bob hit a ball, the hit BALL flew far after it was hit.", banned: ["hit"]
   - Output: "ball"



let a = "Bob hit a ball, the hit BALL flew far after it was hit"

a = a.split(' ')

let mostRepeatedWord = ""
let mostRepeatedCount = 0

for (let i = 0; i < a.length; i++) {
    let count = 1;
    let w = a[i]

    for (let j = i + 1; j < a.length; j++) {
        if (a[i] == a[j]) {
            count++
        }
    }
    if (mostRepeatedCount < count) {
        mostRepeatedCount = count;
        mostRepeatedWord = w
    }
}
console.log(mostRepeatedWord);

4. **Count and Say**:
   - The count-and-say sequence is the sequence of integers with the first five terms as follows: 1, 11, 21, 1211, 111221, ...
   - Write a function that takes an integer n as input and returns the nth term of the count-and-say sequence.

   Example:
   - Input: 4
   - Output: "1211"

# check palendrom

    let a = "racecar"

    let b = a.split().reverse()

    if (a == b) {
        console.log("palandrom");
    } else {
        console.log("not");
    }

    // method 2
    // let arr = []
    // for (let i = 0; i < a.length; i++) {

    //     arr.unshift(a[i])
    // }
    // console.log(arr.join(''));

5. **Valid Palindrome II**:
   - Write a function that takes a string as input and determines if it can be made a palindrome by removing at most one character.

   Example:
   - Input: "racecar"
   - Output: true (Removing 'e' makes it a palindrome)
   let a= "racecar";
 
    for(let i = 0; i<a.length; i++){
    let a1= a.slice(0, i)
    let b1= a.slice(i+1)
    let b= a1+b1
    let c=b.split('').reverse().join('')
    
    if(b==c){
     console.log("Possible")
    }
 }

6. **String to Integer (Atoi)**:
   - Write a function that converts a string to an integer. The function should handle leading whitespaces, signs (+/-), and invalid characters.

   Example:
   - Input: "  -42"
   - Output: -42

   let a= " -42s "
 
    function a1(){
     let b = Number(a.trim())
     if(!Boolean(b/1)){
         console.log('invalid')
        }
    }
     a1()

7. **Zigzag Conversion**:
   -Write a function that takes a string and an integer numRows as input and returns the string arranged in a zigzag pattern (as in a zigzag matrix) and then read line by line.

   Example:
   - Input: "PAYPALISHIRING", numRows: 3
   - Output: "PAHNAPLSIIGYIR"

8. **Group Shifted Strings**:
   - Write a function that takes an array of strings as input and groups the strings that are shifted versions of each other.

   Example:
   - Input: ["abc", "bcd", "acef", "xyz", "az", "ba", "a", "z"]
   - Output: [["abc","bcd","xyz"], ["acef"], ["az","ba"], ["a","z"]]

These more challenging exercises will test your problem-solving skills and help you gain a deeper understanding of string manipulation in JavaScript. Remember to break down the problems into smaller steps and practice writing clean and efficient code. Happy coding!

Sure! Here are some string-based JavaScript exercise questions with examples of input and output:


2. **Title Case**:
   - Write a function that takes a sentence as input and returns the sentence with the first letter of each word capitalized.

   Example:
   - Input: "this is a sentence"
   - Output: "This Is A Sentence"

let a = "this is a sentence"
a = a.split(' ')

let b = []

for (let i = 0; i < a.length; i++) {

    if (a[i][0] == a[i][0].toLowerCase()) {

        let a1 = a[i].split('')
        let temp = a1[0]
        a1.shift()
        a1.unshift(temp.toUpperCase())
        b.push(a1.join(''))
    }


}
console.log(b.join(' '));

3. **Longest Word**:
   - Write a function that takes a sentence as input and returns the longest word in the sentence.

   Example:
   - Input: "The quick brown fox jumped over the lazy dog"
   - Output: "jumped"

   let a ="The quick brown fox jumped over the lazy dog"
   a= a.split(' ')
   let count =0;
   let max = ""
   for(let i=0; i< a.length; i++){
    if(a[i].length > count){
        max = a[i]
        
    }
}
console.log(max)

4. **Palindrome Check**:
   - Write a function that takes a string as input and determines if it is a palindrome (reads the same backward as forward). Ignore spaces, punctuation, and capitalization.

   Example:
   - Input: "A man, a plan, a canal, Panama"
   - Output: true

   let a ="A man, a plan, a canal, Panama"
    a= a.replaceAll(',', '').split(' ').join('')

    if(a.split('').reverse().join('').toLowerCase() == a.toLowerCase()){
        
       console.log("pa")
    }
    else{
        console.log('not')
    }

5. **Count Vowels**:
   - Write a function that takes a string as input and returns the count of vowels (a, e, i, o, u) in the string.

   Example:
   - Input: "Hello World"
   - Output: 3

   let a = "Hello World"
    let count=0

    for(let i=0; i< a.length; i++){
        if(a[i]=== 'a'|| a[i]==='e'||a[i]==='i'||a[i]==='o'||a[i]==="u"){
            count = count+1
        }
    }
console.log(count)



7. **Caesar Cipher**:
   - Write a function that takes a string and a shift value as input and returns the string with each letter shifted by the given value (Caesar Cipher).

   Example:
   - Input: "hello", shift: 3
   - Output: "khoor"

8. **Palindrome Permutation**:
   - Write a function that takes a string as input and determines if it can be rearranged into a palindrome.

   Example:
   - Input: "tact coa"
   - Output: true (can be rearranged as "taco cat")

9. **String Compression**:
   - Write a function that takes a string as input and returns a compressed version of the string where consecutive repeated characters are replaced with the character followed by the count.

   Example:
   - Input: "aaabbccc"
   - Output: "a3b2c3"
   let a = "aaabbccc"
   let str=''

  let count=1
  for(let i=0; i< a.length; i++){
   if(a[i]==a[i+1]){
       count++
   }
   else{
       str= str+ a[i]+count
       count=1
   }
   
}
console.log(str)

10. **Reverse Vowels**:
    - Write a function that takes a string as input and returns the string with its vowels reversed (i.e., "aeiou" becomes "uoiea").

    Example:
    - Input: "hello"
    - Output: "holle"

    let a = "hello"
let b=''

for(let i=0; i<a.length; i++){
    if(a[i]=='a'|| a[i]=="e"|| a[i]=="i"|| a[i]=="o"|| a[i]=="u" ){
        b=b+a[i];
    }
}
b=b.split('').reverse().join('')
let c = ''
let count =0;
for(let i=0; i<a.length; i++){
    if(a[i]=='a'|| a[i]=="e"|| a[i]=="i"|| a[i]=="o"|| a[i]=="u" ){
        c=c+b[count]
        count= count+1
    }
    else{
        c=c+a[i]
    }
}
console.log(c)

# QUESTION 

let input = "dog"
let result = [] // d, do, dog, o, og, g

for (let i = 0; i < input.length; i++) {

    let a = input[i]
    result.push(input[i])

    for (let j = i + 1; j < input.length; j++) {

        a = a + input[j];
        result.push(a)
    }

}

console.log(result.join(', '));