// 定义一个访问器属性 year，修改year会自动更新edition
// 访问器属性的Configurable和Enumerable默认都是true

let book = {
    _year: 2017,
    edition: 2
}

Object.defineProperty(book, "year", {
    get() {
        return this._year
    },
    set(newValue) {
        if (newValue > 2017) {
            // 修改_year
            this._year = newValue;
            // 修改edition
            this.edition = newValue - 2017;
        }
    }
})

// Q1
console.log(book, "book");  // { _year: 2017, edition: 2 } 

// Q2
console.log(book.year, "book.year"); // 2017

// Q3
book.year = 2018;
console.log(book._year, "book._year"); // 2018
console.log(book.year, "book.year"); // 2018
console.log(book.edition, "book.edition"); // 1

// Q4 访问器属性默认是否可遍历？
// 实测访问器属性默认是false，与书中描述不符 v14.14.0
console.log(Object.keys(book)); // [ '_year', 'edition' ]

// Q5 访问器属性默认是否可遍历？
// 实测访问器属性默认是false，与书中描述不符 v14.14.0
for (let prop in book) {
    // _year
    // edition
    console.log(prop);
}

// Q6 访问器属性定义后是否可修改？
// TypeError: Cannot redefine property: year
// Object.defineProperty(book,"year",{
//     get(){
//         return this._year
//     },

//     set(){
//         console.log("哈哈哈");
//     }
// })

// book.year = 2020;

// Q7 如何获取对象属性的类型？
console.log(Object.getOwnPropertyDescriptor(book, "year"));
// {
//     get: [Function: get],
//     set: [Function: set],
//     enumerable: false,
//     configurable: false
//   }


// Q8 如何批量获取对象所有属性的类型？
console.log(Object.getOwnPropertyDescriptors(book));
// {
//     _year: { value: 2018, writable: true, enumerable: true, configurable: true },
//     edition: { value: 1, writable: true, enumerable: true, configurable: true },
//     year: {
//       get: [Function: get],
//       set: [Function: set],
//       enumerable: false,
//       configurable: false
//     }
//   }

// Q9 如何批量定义对象属性?
// configurable/enumerable/writable默认都是false
let abao = {};
Object.defineProperties(abao, {
    name: {
        value: "abao",
        enumerable: true
    },
    _age: {
        writable: true,
        value: 18
    },
    age: {
        get() {
            return this._age
        },
        set(newValue) {
            // ATTENTION 这里如果不令_age的writable为true，修改age属性值无法改变_age属性值
            this._age = newValue
        }
    }
})

console.log(Object.keys(abao)); // [ 'name' ]

abao.name = "benben"
console.log(abao.name); // abao

abao.age = 26
console.log(abao._age); // 26