//PART 1
/**
 * first line of csv should = the keys to an object
 * second line+ of csv should be the data mapping to appropriate keys
 */
const data = { // should be empty at first, then add keys of first line as we read through the csv
    
}

let csv_string = "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232";
let new_string = "";
pastFirstLine = false; // will be used to check if first line was already parsed for object keys
col_counter = 0; // counts the columns of object/how many properties the object will have >> will eventually reset to 0
row_counter = 0; // counts rows/stores appropriate index of all arrays as they're filled out >> should never reset value


for (let i = 0; i < csv_string.length; i++) {
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
    else if (csv_string[i] === ',' || csv_string[i] === '\n' && pastFirstLine === true) {
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

//can complete pt2 without specifying num of columns