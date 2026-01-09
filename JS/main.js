/*
//String
let fname = 'Jonh Smith'
console.log('mr.',fname)
const idcard = '123'

//number
let age = 30
let height = 183.5
const pi = 3.14159
fname = 'tom'

console.log('idcard',idcard)
console.log('mr.',fname , 'age', age)
//console.log('age',age)
*/

/**
 + plus
 - minus
 * multiple
 / divide
 % mod
 */

/*
condition statement (if, else, switch)
== เท่ากับ
!= ไม่เท่ากับ
> มากกว่า
>= มากว่าเท่ากับ
< น้อยกว่า
<= น้อยกว่าเท่ากับ
 */

/*
let number1 = 'supawat' //String
let number2 = 'jiamjumroen'

let number3 = number1 +' '+ number2

console.log('Number 3 =',number3)
*/

/*
let number1 = 5
let number2 = 3

let condition1 = number1 <= number2 // boolean(True , False)

console.log("Condition is = ",condition1)
*/
//if - else condition

/*
let number1 = 5
let number2 = 5

if (number1 != number2) {
    console.log('this if')
}

else if(number1 == number2){
    console.log('This else if')
}

else{
    console.log('this else')
}

*/

/*
//Grade
let score = prompt('Enter you number')
if(score>=80){
    console.log('Grade : A','\nYou score =', score)
}
else if(score>=70){
    console.log('Grade :  B','\nYou score =', score)
}
else if(score>=60){
    console.log('Grade : C','\nYou score =', score)
}
else if(score>=50){
    console.log('Grade : D','\nYou score =', score)
}
else{
    console.log('Grade : F','\nYou score =', score)
}
    
&& and และ
|| or หลือ
! not ไม่


*/

/*
let number1 = 5
let number2 = 10


let condition = !(number1 >= 3 || number2 >= 11)
console.log('Result of condition', condition)


let number = 20
if (!(number % 2 == 0)){
    console.log('You are Even.')
}

let counter = 0
while(counter < 10){
    console.log('Hi')
    counter = counter + 1
}

for (let counter = 0; counter<10; counter++){
    console.log('Hi')
}
let Ages1 = 20
let Ages2 = 25
let Ages3 = 30

let ages = [20,25,30]

//แทนที่
ages = [200,100,50]

console.log('Ages1 Ages2 Ages3',Ages1,Ages2,Ages3)
console.log('Ages1 Ages2 Ages3',ages[0],ages[1],ages[2])
console.log('Array',ages)

//ต่อ Array
ages.push(25)
console.log('push array',ages)

ages.pop()
console.log('pop array',ages)


let ages = [20,25,30,35,40]
if (ages.includes(30)){
    console.log('มีเลข 30 อยุ่ใน array')
}

let num_sort = [50,25,30,35,40]
num_sort.sort()
console.log(num_sort)

let name_list = ['aa', 'bb','cc']
name_list.push('dd')
console.log(name_list)

name_list.pop()
console.log('pop name_list',name_list)

for (let index = 0 ; index < name_list.length; index++){
    console.log('name list', name_list[index])
}


let students = [{
    age: 30,
    name: 'aa',
    grade:'A'
},{
    age: 35,
    name: 'bb',
    grade:'B'
}]
students.push({
    age: 40,
    name: 'cc',
    grade:'C'
})

console.log(students)

for (let index = 0; index< students.length; index++){
    console.log('Student Number',(index+1))
    console.log('name',students[index].name)
    console.log('age',students[index].age)
    console.log('grade',students[index].grade)
}


let score1 = 55
let score = 65

// ประกาศ Funtion
let grade = ''
function calculat_grade(score){
if(score>=80){
    grade = 'A'
}
else if(score>=70){
    grade = 'B'
}
else if(score>=60){
    grade = 'C'
}
else if(score>=50){
    grade = 'D'
}
else{
    grade = 'F'
}
return grade
}
// เรียกใช้ Funtion

let grade1 = calculat_grade(score1)
let grade2 = calculat_grade(score)

console.log('grade1 =',grade1)
console.log('grade2 =',grade2)

//วิธีแมนนวล
/*
score[0] = score[0] * 2
score[1] = score[1] * 2
score[2] = score[2] * 2
score[3] = score[3] * 2

score = score.map((s) =>{
    return s * 2
})

    if(score[index] >= 30){
        newScore.push(score[index])


let score = [20,30,40,50]
let newScore = []

for(let index = 0; index<score.length;index++){
    console.log('Score =',score[index])
    }
}



.forEach((s) =>{
    console.log('ForEach',s)
})
*/

let students = [
    {
        name: 'aa',
        score: 50,
        grade: 'A'
    },{
        name: 'bb',
        score: 80,
        grade: 'A'
    }
]

let student = students.find((s) =>{
    if(s.name == 'aa'){
        return true
    }
})

let double_score = students.map((s)=>{
    s.score = s.score * 2
})
let highScore = students.filter((s) =>{
    if(s.score >= 120)
        return true
})
console.log(student)
console.log('double_score',double_score)
console.log(highScore)