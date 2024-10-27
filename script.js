//PART 1
/**
 * first line of csv should = the keys to an object
 * second line+ of csv should be the data mapping to appropriate keys
 */
console.log("==========FIRST PART==========");
const data = {} // should be empty at first, then add keys of first line as we read through the csv

let csv_string = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor's Assistant,26";
let new_string = "";
pastFirstLine = false; // will be used to check if first line was already parsed for object keys
col_counter = 0; // counts the columns of object/how many properties the object will have >> will eventually reset to 0
row_counter = 0; // counts rows/stores appropriate index of all arrays as they're filled out >> should never reset value


for (let i = 0; i <= csv_string.length; i++) {
    // first we will initialize the keys of object properties as empty arrays
    if ((csv_string[i] === ',' || csv_string[i] === '\n') && pastFirstLine === false) { // fill keys/header
        data[`${new_string}`] = []; // adds name of a new key and assigns it an empty array
        new_string = ""; // reset value of new string
        if (csv_string[i] === '\n') {
            let print_string = "";
            pastFirstLine = true; // determines all keys are created and assigned empty array
            // console.log(Object.keys(data)); >> prints as array with []
            for (const dataKey in data) {
                print_string += dataKey + " ";
            }
            console.log(print_string);
        }
    }
    // once keys are proven initialized, we use this else if to populate the respective arrays
    else if ((csv_string[i] === ',' || csv_string[i] === '\n' && pastFirstLine === true) || (i == csv_string.length && pastFirstLine === true)) { // checks for commas or \n BUT ALSO checks for end of a CSV string as well
        let keyName = Object.keys(data)[col_counter]; // access proper key name
        data[keyName].push(new_string); // push data into proper key
        new_string = "";
        col_counter++;
        // once all columns filled, print, then go to next row of data
        if (col_counter == Object.keys(data).length) {
            // console log all properties' arrays at index of row_counter
            let print_string = "";
            for (const dataKey in data) {
                print_string += data[dataKey][row_counter] + " ";
            }
            console.log(print_string);
            col_counter = 0;
            row_counter++;
        }
    }
    else {
        new_string += csv_string[i];
    }
}

//PART 2
/**
 *  task is asking for [  [] [] []  ], 
 *  so arrays within one single 2d array
 */
console.log("==========SECOND PART==========");
let total_columns = Object.keys(data).length;
const two_d_array = [];
let temp_array = []; // cannot be const because it will be re-assigned as an empty array

// dynamically populate 2d array
for (i = 0; i < row_counter+1; i++) { // + 1 to account for keys of object as a row
    for (k = 0; k < Object.keys(data).length; k++) {
        if (i == 0) {
            temp_array.push(Object.keys(data)[k]); // pushes name of key to temp array
        }
        else {
            let keyName = Object.keys(data)[k];
            temp_array.push(data[keyName][i-1]); // pushes values of key to temp array >> we have -1 to not leave out the very first row of data
        }
        if (k+1 == Object.keys(data).length) {
            two_d_array.push(temp_array); // pushes populated array
            temp_array = []; // resets populated array
        }
    }
}
console.log(two_d_array);

//PART 3
/**
 */
console.log("==========THIRD PART==========");
const single_array = two_d_array[0]; // will contain key names from 2d array
const obj_array = [];
let myObj = {}; // cannot be const because it will be re-assigned

for (i=1; i<two_d_array.length; i++) { // from 1 to 10 in our example
    for(k=0; k<single_array.length; k++) { // from 0 to 3 in our example
        myObj[`${single_array[k]}`] = two_d_array[i][k];
        if (k==single_array.length-1) {
            obj_array.push(myObj);
            myObj = {};
        }
    }
}
console.log(obj_array);

//PART 4
/**
 */
console.log("==========FOURTH PART==========");
obj_array.pop(); // removes last element from object array
obj_array.splice(1, 0, { ID: "48", Name: "Barry", Occupation: "Runner", Age: "25" });
obj_array.push({ ID: "7", Name: "Bilbo", Occupation: "None", Age: "111" });
console.log(obj_array);

//PART 5
/**
 */
console.log("==========FIFTH PART==========");