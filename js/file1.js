let newArray = [22, 32, 44, 1, 45, 25, 78, 33, 8, 30];

alert(`Массив из 10 чисел 
${newArray},  
задача: поменять максимальное число с минимальным - местами (1 и 78)`);

let min = newArray[0];
let max = newArray[0];

for(let i = 1; i < newArray.length; i++){
    if(min > newArray[i]) min = newArray[i];
    else if (max < newArray[i]) max = newArray[i];
};

for(let j = 0; j < newArray.length; j++){
    if (newArray[j] === max){
        newArray[j] = min;
    }
    else if (newArray[j] === min){
        newArray[j] = max;
    };
};

alert(newArray);