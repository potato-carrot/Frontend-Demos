/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
    let pReservedHead = null
    let pNode = head
    let pPrev = null
    let pNext = null
    while (pNode !== null) {
        pNext = pNode.next
        if (pNext === null) {
            pReservedHead = pNode
        }
        pNode.next = pPrev
        pPrev = pNode
        pNode = pNext
    }
};


function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
