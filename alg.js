// 204

const arrMarks1 = [10, 8, 6, 9, 10, 3, 5, 7];
const arrMarks2 = [10, 8, 6, 9, 0, 3, 5, 7];

function mark(arrMarks) {
    console.log(arrMarks);
    const min = arrMarks.indexOf(Math.min(...arrMarks));
    arrMarks.splice(min, 1);
    const max = arrMarks.indexOf(Math.max(...arrMarks));
    arrMarks.splice(max, 1);
    let res = 0;
    arrMarks.forEach(element => {
        res += element;
    });
    res = res / arrMarks.length;
    return res;
}

const sport1 = mark(arrMarks1);
console.log(sport1);
const sport2 = mark(arrMarks2);
console.log(sport2);

// 207

const num1 = 5140;
const num2 = 514057051;

function countTransf(natNum) {
    console.log(natNum);
    let countTransf = [];
    natNum = String(natNum);
    for (let i = 0; i < natNum.length; i++) {
        // console.log(natNum[i]);
        if (natNum[i] != '0' && natNum[i] != '5') {
            countTransf.push(natNum[i])
        }
    }
    const res = countTransf.join('');
    return res;
}

const res1 = countTransf(num1);
console.log(res1);
const res2 = countTransf(num2);
console.log(res2);

// 117 

function multMemb(num) {
    let divisible = 1;
    let divisor = 1;
    let mult = 1;
    for (let i = 1; i <= num; i++) {
        mult *= divisible / divisor;
        divisible += 2;
        divisor += 1;
    }
    return mult;
}

const mult3 = multMemb(3);
console.log(mult3);
const mult4 = multMemb(4);
console.log(mult4);
const mult5 = multMemb(5);
console.log(mult5);
const mult10 = multMemb(10);
console.log(mult10);