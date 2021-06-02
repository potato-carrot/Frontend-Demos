// Generator实现状态机
const Clock = function* () {
    while (true) {
        console.log('tik');
        yield
        console.log('tok');
        yield
    }
}

const clock = Clock()

clock.next()
clock.next()
clock.next()
clock.next()
clock.next()
clock.next()
clock.next()
clock.next()
clock.next()
clock.next()