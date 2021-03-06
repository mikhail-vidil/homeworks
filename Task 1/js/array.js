//initialize array by zeroes
var myArr = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
];

let num = 1;

//dimensions of the array
let cols = 7;
let rows = 6;


// Fill the perimeter of the array
for (let j = 0; j < cols; j++) { // go right
    myArr[0][j] = num;
    num++;
}

for (let i = 1; i < rows; i++) { // go down
    myArr[i][rows] = num;
    num++;
}

for (let j = cols - 2; j >= 0; j--) { //go left
    myArr[rows - 1][j] = num;
    num++;
}

for (let i = rows - 2; i > 0; i--) { //go up
    myArr[i][0] = num;
    num++;
}

// choose next position
var pos_i = 1;
var pos_j = 1;

while (num < cols * rows) {
    while (myArr[pos_i][pos_j] == 0) { //Move right
        myArr[pos_i][pos_j] = num;
        num++;
        pos_j++;
    }

    while (myArr[pos_i + 1][pos_j - 1] == 0) { //Move down
        myArr[pos_i + 1][pos_j - 1] = num;
        num++;
        pos_i++;
    }

    while (myArr[pos_i][pos_j - 2] == 0) { //Move left
        myArr[pos_i][pos_j - 2] = num;
        num++;
        pos_j--;
    }

    while (myArr[pos_i - 1][pos_j - 1] == 0) { //Move up
        myArr[pos_i - 1][pos_j - 1] = num;
        num++;
        pos_i--;
    }
}

let arr_rows = '';

for (let i = 0; i < myArr.length; i++) {
    let arr_cols = '';
    for (let j = 0; j < myArr[i].length; j++) {
        arr_cols += '<div class="block_cell">' + myArr[i][j] + '</div>';
    }

    arr_rows += '<div class="block_row">' + arr_cols + '</div>';
}

document.querySelector('body').insertAdjacentHTML('beforeend', '<div class="block">' + arr_rows + '</div>');