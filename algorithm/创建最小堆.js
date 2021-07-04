class MinHeap {
    constructor() {
        this.heap = []
    }
    getLeftIndex(index) {
        return index * 2 + 1
    }
    getRightIndex(index) {
        return index * 2 + 2
    }
    getParentIndex(index) {
        if (index === 0) {
            return void 0
        }
        return Math.floor((index - 1) / 2)
    }
    insert(value) {
        if (value !== null) {
            this.heap.push(value)
            this.siftUp(this.heap.length - 1)
            return true
        }
        return false
    }
    extract() {

    }
    findMinimum() {

    }
    siftUp(index) {
        let parent = this.getParentIndex(index)
        while (index > 0 && this.heap[parent] > this.heap[index]) {
            this.swap(this.heap, parent, index)
            index = parent
            parent = this.getParentIndex(index)
        }
    }
    swap(array, a, b) {
        const temp = array[a]
        array[a] = array[b]
        array[b] = temp
    }
}

const minHeap = new MinHeap()
minHeap.insert(2)
console.log(minHeap.heap);
minHeap.insert(3)
console.log(minHeap.heap);
minHeap.insert(4)
console.log(minHeap.heap);
minHeap.insert(5)
console.log(minHeap.heap);
minHeap.insert(1)
console.log(minHeap.heap);
