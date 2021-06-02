// 通过yield* 实现展开多维数组
function* iterTree(tree) {
    if (Array.isArray(tree)) {
        for (let i = 0; i < tree.length; i++) {
            yield* iterTree(tree[i])
        }
    } else {
        yield tree
    }
}

const tree = ['a', 'b', ['c', 'd'], ['e', 'f', ['g', 'h']]]

for (let x of iterTree(tree)) {
    console.log(x);
}