// Generator应用于Ajax请求
function* main() {
    const result = yield request()
    console.log(result);
}

function request() {
    setTimeout(() => {
        iter.next('resultData')
    }, 1000);
}

const iter = main()
iter.next()
