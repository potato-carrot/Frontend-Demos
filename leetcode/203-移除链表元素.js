/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
    const dummy = new ListNode(0)
    dummy.next = head
    let prev = dummy
    while (head && head.next) {
        if (head.val === val) {
            prev.next = head.next
            head = head.next
        } else {
            prev = head
            head = head.next
        }
    }
    return dummy.next
};

const head = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 6,
            next: {
                val: 5,
                next: {
                    val: 4
                }
            }
        }
    }
}

let newHead = removeElements(head, 6)
// while (newHead) {
//     console.log(newHead.val);
//     newHead = newHead.next
// }


function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}