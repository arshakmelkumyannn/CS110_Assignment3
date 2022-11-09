let arr = [10, 9, 8, 7, 6, 5];
for (
    let i = 0, j = arr.length - 1;
    i <= arr.length / 2, j >= arr.length / 2;
    i++, j--
) {
    let x = arr[i];
    arr[i] = arr[j];
    arr[j] = x;
}
console.log(arr);
