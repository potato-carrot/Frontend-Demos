// function readLinesSync(file) {
//     return {
//         next() {
//             return { done: true }
//         },
//         return() {
//             console.log('释放资源');
//             return { done: true }
//         }
//     }
// }

// for (let line of readLinesSync([1, 2, 3])) {
//     console.log(line);
//     break
// }

// 有bug