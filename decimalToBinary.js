let num = 1001;
let reverseNum = "";
let binNum = "";

while (num) {
    reverseNum += num % 2;
    num = Math.floor(num / 2);
}

for (j = reverseNum.length - 1; j >= 0; j--) {
    binNum += reverseNum[j];
}

console.log(binNum);
