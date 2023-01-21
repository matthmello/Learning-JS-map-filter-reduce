const arr = [5, 1, 3, 2, 6]

//_____________________________________________________________________________
//                           map(callBackFunction)


// double,triple and binary using map()

// double
const double = (x) => {    // Criando a função double
    return x * 2;
}
const output = arr.map(double) // Chamando a função double dentro do metodo map()
console.log(output)

// triple
const output2 = arr.map(triple = (x) => { // Criando a função p triplicar dentro do metodo map()
    return x * 3;                // Para ser chamada imediatamente
})
console.log(output2)

// binary

function binary(x) {
    return x.toString(2);       // Logica para mostrar o número em forma de binário
}

const output3 = arr.map(binary);
console.log(output3)

//_____________________________________________________________________________
//                          filter(callBackFunction)


// filter only numbers > 4

const output4 = arr.filter((x) => {
    return x > 4;
})
console.log(output4);

// filter only numbers < 4

const output5 = arr.filter((x) => {
    return x < 4;
})
console.log(output5);

// filter odd numbers

const output6 = arr.filter((x) => {
    return x % 2 == 1;                       // odd numbers of array
})
console.log(output6)

// filter even numbers

const output7 = arr.filter((x) => {
    return x % 2 == 0;                       // even numbers of array
})
console.log(output7)

//_____________________________________________________________________________
//                          reduce(callBackFunction)

// use reduce to get max number of the array, has 2 parameteres

const output8 = arr.reduce((max, current) => {
    if(current > max) {
        max = current
    } 
    return max;
}, 0);
console.log(output8)

// use reduce to get mininum number of the array, has 2 parameteres

const output9 = arr.reduce((min, current) => {
    if (min == 0){
        min = current
    } else if (current < min){
        min = current
    } 
    return min;
}, 0);
console.log(output9)

// use reduce to get the sum of all numbers of array, has 2 parameters

const output10 = arr.reduce((sum, current) => {
    sum += current
    return sum;
}, 0)

console.log(output10)

//_____________________________________________________________________________


const users = [
    { firstName: "Matheus", lastName: "Melo", age: 26 },
    { firstName: "Elon", lastName: "Musk", age: 50 },
    { firstName: "Donald", lastName: "Trump", age: 75 },
    { firstName: "Deepika", lastName: "Pakudone", age: 26 },
]

//                          map() nivel moderado


// use map() to find list of full name of all users

const output11 = users.map((x) => {
   return x.firstName + x.lastName
})

// or while it's only 1 line return, I can remove line am put in just 1 line code

const output12 = users.map((x) => x.firstName + x.lastName)

console.log(output11)
console.log(output12)


//                         reduce() nivel moderado

// use reduce to get how many people has the ages in users object

const output13 = users.reduce((total, current) => {
    if (total[current.age]){
        total[current.age] += 1
    } else {
        total[current.age] = 1
    }
    return total;
}, {});

console.log(output13)


//                         using filter() + map() nivel moderado

// use filter to get how many people has the ages < 30 and map to get first name of them

const output14 = users.filter((x) => x.age < 30).map((x) => x.firstName);
console.log(output14)


// use only reduce to get the solution above

const output15 = users.reduce((names, curr) => {
    if(curr.age < 30){
        names.push(curr.firstName);
    }
    return names;
}, []) 

console.log(output15)