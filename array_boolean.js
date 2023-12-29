const  arr = [24,56,55,4];
let = swap = false;
for (let i=0; i<arr.length; i++){
    for (let j = 0; j < arr.length; j++) {
        if (arr[j] > arr[j +1]){
            let temp = arr[j +1];
            arr[j+1] = arr[j];
            arr[j] = temp;
            swap = true;
         }
    }
    if (swap = false){
        break;
    }
}
    console.log("Min number is: ", arr);
