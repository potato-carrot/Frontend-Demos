// 封装once，函数只能被调用一次
function once(fn) {
    let done = false
    return done ?
        void 0 :
        (
            (done = true),
            function () {
                typeof fn === 'function' && fn.apply(this, arguments)
            }
        )
}