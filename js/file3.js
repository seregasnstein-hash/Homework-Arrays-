let arr = [];

for(let i = 0; i < 10; i++){
    let numRandom = Math.random() * 10;

    let numToFix = Number(numRandom.toFixed(1));
    arr.push(numToFix);
};

let last = arr.at(-1);

let sumNum = 0;


for(let i = 0; i < arr.length; i++){
    if(last > arr[i]) sumNum++
};

alert(`Массив: ${arr}
${sumNum} чисел, меньше последнего - ${last}`);