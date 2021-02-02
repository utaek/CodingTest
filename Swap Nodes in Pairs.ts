/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
type node = ListNode | null; 

let swapPairs = (head: node): node => {
    if (!head || !head.next) return head;
    
    let first: node = head.next;
    let seconed: node = first.next;
    
    first.next = head;
    head.next = swapPairs(seconed);
    
    return first;
};

class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
  }
}