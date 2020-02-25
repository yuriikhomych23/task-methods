// TASK4
// let adrs = prompt('') ;
// if(adrs.startsWith('http://')) {
//     console.log(adrs.slice(7));
// } else if(adrs.startsWith('https://')) {
//     console.log(adrs.slice(8));
// }


// TASK2 
// let mail = prompt('Enter yout mail');

// if(mail.startsWith('@') || mail.endsWith('@') || mail.indexOf('@') == -1) {
//     console.log('Wrong mail Sorry')
// } else {
//     console.log('Your mail is correct, Thank you')
// }


//TASK1


let str = prompt('');
let res = str.indexOf(' ')
if (res < 0) {
    console.log('Пробіли відсутні')
} else {
    for (let i = 1; i <= (str.length - res) + 1; i++) {
        console.log(`Кількість пробілів складає: ${res}`)
    }
}



// let res = str.indexOf(' ');
// if(res < 0) {
//     console.log('Пробіли відстуні')
// } else {
//     let sum = 1;
//     for (let i = 1; i < sum; i++) {
//         console.log(sum)
//     }
// }

// console.log(res);
