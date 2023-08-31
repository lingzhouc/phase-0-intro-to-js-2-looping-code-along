// Code your solutions in this file

// returns an array of thank you messages for each name
function writeCards(names, occasion) {
    const message = [];
    for (let i = 0; i < names.length; i++) {
        message.push(`Thank you, ${names[i]}, for the wonderful ${occasion} gift!`);
        debugger;
    }
    return message;
}

// alternative
// function writeCards(names, occasion) {
//     const message = [];
//     for (person of names) {
//         message.push(`Thank you, ${person}, for the wonderful ${occasion} gift!`);
//         debugger;
//     }
//     return message;
// }

// logs number while counting down, starting at provided number
function countDown(num) {
    while (num > -1) {
        console.log(num);
        num--;
    }
}

// alternative
// function countDown(num) {
//     for (let i = num; i > -1; i--) {
//         console.log(i);
//     }
// }
