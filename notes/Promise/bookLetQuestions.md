# // check  two array equal or not

let a= [1,2,3]
let b=[1,2,3]

if(a.length==b.length){
    let count=0
    for(let i=0; i<a.length;i++){
        
        if(a[i]==b[i]){
             count++
            continue;
        }
        else{
            console.log('noooo')
            break;
        }
    }
    if(count ==a.length){
        console.log('yes')
    }
}
else {
    console.log("not")
}

# // find the second largest element in an array

let a=[1, 22, 4, 45 , 21,30,23]
let max=0
let max2=0
for(let i=0; i<a.length;  i++){
    for(let j=i+1; j<a.length; j++){
        if(a[i]>a[j] && a[i]>max){
            max=a[i]
        }
        if(a[i]>a[j] && a[i]<max){
            max2=a[i]
        }
    }
}

console.log(max ,max2)

# question 1

let s1=['a','b','c','d']
let s2=['w','x','y','z' ,'e','f','g']
//  o/p = ['a', 'w', 'b', 'x','c', 'y', 'd', 'z','e', 'f', 'g']

let l=s1.length > s2.length ? s1.length : s2.length
let a=[]

for(let i=0; i<l; i++){
    if(s1[i]){
        a.push(s1[i])
    }
    if(s2[i]){
        a.push(s2[i])
    }
}
console.log(a)

# // sorting
let a= [1,6,2,56,78,3,5,8,3,4,5,7]
let b=[]
 
for(let i= 0 ; i < a.length ; i++){
    for(let j=0; j < a.length ; j++){
        
        if(a[j]>a[j+1]){
            
            let temp = a[j];
            a[j]=a[j+1];
            a[j+1]= temp;

            // a[j]= a[j]+a[j+1]
            // a[j+1]=a[j]-a[j+1]
            // a[j]= a[j]- a[j+1]
        }
    }
}
console.log(a)

# unique pairs

let a =[1, 1, 2]
// o/p= ['11',12', '21', '22' ]

let uniquePairs=new Set()
for (let i = 0; i < a.length; i++) {
  for (let j = 0; j < a.length; j++) {
   
      uniquePairs.add(`${a[i]},${a[j]}`)
  }
}
console.log([...uniquePairs])

#  all unique 3 digit possible pairs
let a =[1, 1, 2]

let set= new Set()
for(let i=0; i< a.length ; i++){
    for(let j=0; j<a.length;j++){
        for(let k = 0; k < a.length; k++){
            set.add(`${a[i]}${a[j]}${a[k]}`)
        }
    }
}
console.log([...set])



# triplets
let a=[1,1,2,3,5]
let triplets=[]

for (let i = 0; i < a.length - 2; i++) {
  for (let j = i + 1; j < a.length - 1; j++) {
    for (let k = j + 1; k < a.length; k++) {
      triplets.push([a[i], a[j], a[k]]);
    }
  }
}
console.log(triplets)

# string is present or not

let a = "nileshindesklkjljdjdljk";
let sr1 = "sh";
let isPresent = false;

for (let i = 0; i <= a.length - sr1.length; i++) {
  if (a.slice(i, i + sr1.length) === sr1) {
    isPresent = true;
    break;
  }
}