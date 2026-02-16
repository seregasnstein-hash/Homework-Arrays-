let arr = [];

let evenNumber = 0;
let oddNumber = 0;

for(let i = 0; i < 20; i++){
    let randomNumber = Math.floor(Math.random() * 101);
    arr.push(randomNumber);
};

for(let i = 0; i < arr.length; i++){
    if(arr[i] % 2 === 0) evenNumber += arr[i];
    else oddNumber += arr[i];
};

if(evenNumber > oddNumber) alert(`Ваш массив: ${arr}
Сумма четных: ${evenNumber}
Сумма нечетных: ${oddNumber}
Сумма четных больше.`);
else if (evenNumber < oddNumber) alert(`Ваш массив:${arr}
Сумма четных: ${evenNumber}
Сумма нечетных: ${oddNumber}
Сумма нечетных больше.`);
else alert(`Ваш массив:${arr}
Сумма четных: ${evenNumber}
Сумма нечетных: ${oddNumber}
Суммы равны.`);