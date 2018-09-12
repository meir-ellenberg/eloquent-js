// FizzBuzz
function fizzBuzz() {
    for(let i = 1; i < 101; i++) {
        if(i % 3 === 0){
            if(i % 5 === 0) {
                console.log(`${i}: FizzBuzz`);
            }
            else {
                console.log(`${i}: Fizz`);
            }
        } else if(i % 5 === 0) {
            console.log(`${i}: Buzz`);
        } else {
            console.log(`${i}`);
        }
    }
}

// Bean Counting
function countBs(str) {
    let counter = 0;
    for(let i = 0; i < str.length; i++) {
        if(str.charAt(i) === 'B') {
            counter++;
        }
    }
    console.log(counter);
}

function countChar(str, chr) {
    let counter = 0;
    for(let i = 0; i < str.length; i++) {
        if(str.charAt(i) === chr) {
            counter++;
        }
    }
    console.log(counter);
}

// Sum of a range
function range(start, end) {
    let arr = [];
    for(let i = start; i <= end; i++) {
        arr.push(i);
    }
    console.log(arr);
    return arr;
}

function sum(numbers) {
    let sum = 0;
    for(let number of numbers) {
        sum += number;
    }
    console.log(sum);
    return sum;
}

// Every And Then Some
function every(arr, predicate) {
    for(let item of arr) {
        if(!predicate(item)) {
            return false;
        }
    }
    return true;
}

function some(arr, predicate) {
    for(let item of arr) {
        if(predicate(item)) {
            return true;
        }
    }
    return false;
}

// Build a table
var MOUNTAINS = [
    {name: "Kilimanjaro", height: 5895, country: "Tanzania"},
    {name: "Everest", height: 8848, country: "Nepal"},
    {name: "Mount Fuji", height: 3776, country: "Japan"},
    {name: "Mont Blanc", height: 4808, country: "Italy/France"},
    {name: "Vaalserberg", height: 323, country: "Netherlands"},
    {name: "Denali", height: 6168, country: "United States"},
    {name: "Popocatepetl", height: 5465, country: "Mexico"}
  ];

function buildTable(data) {
    const body = document.querySelector("body");
    const tableElement = document.createElement("table");
    body.appendChild(tableElement);
    
    let heading = 0; // if th applied, heading = 1 else heading = 0

    for(let element of data) {
        // check if heading is applied
        if(!heading) {
            // creates new tr element and append it to table
            const trElement = document.createElement("tr");
            tableElement.appendChild(trElement);
            // make an array of keys with Object.keys function
            const keysArr = keys(element);
            for(let key of keysArr) {
                // creates new th element
                const thElement = document.createElement("th");
                // creates new text node
                const node = document.createTextNode(key);
                // append text node to th
                thElement.appendChild(node);
                // append th to tr
                trElement.appendChild(thElement);
            }
            heading = 1; // heading was applied
        }
        // creates new tr element and append it to table
        const trElement = document.createElement("tr");
        tableElement.appendChild(trElement);

        // make an array of values with Object.values function
        const valuesArr = values(element);
        for(let value of valuesArr) {
            const tdElement = document.createElement("td");
            // right align cells containing only numbers
            if(!isNaN(value)) {
                tdElement.style.textAlign = "right";
            }
            const node = document.createTextNode(value);
            tdElement.appendChild(node);
            trElement.appendChild(tdElement);
        }
    }
}

// Censored Keyboard
let field = document.querySelector("input");