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
