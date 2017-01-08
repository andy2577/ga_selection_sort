function findSmallest(arr){
    let smallest = arr[0];
    let smallest_index = 0;
    
    for(let i = 1, len = arr.length; i < len ; i++){
        if(arr[i] < smallest){
            smallest = arr[i];
            smallest_index = i;
        }
    }
    return smallest_index;
}

function selectionSort(arr){
    let new_arr = [];
    
    for(let i = 0, len = arr.length; i < len ; i++){
        let smallest = findSmallest(arr);
        new_arr.push(arr.splice(smallest, 1).pop());
    }
    
    return new_arr;
}

let arr = [5, 3, 1, 6, 9, 4, 2, 7, 8];

console.log(arr);
console.log(selectionSort(arr));