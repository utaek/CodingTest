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
type listNode = ListNode | null;

let rotateRight = (head: listNode, k: number): listNode => {
    if(head === null || head.next === null || k === 0) return head;
    
    let node: listNode = head;
    let total: listNode = head;
    let dummy: listNode = new ListNode();
    let cnt: number = 0;

    while(total){
        total = total.next;
        cnt++;
    }
    
    k = k - (cnt * Math.floor(k/cnt));
    
    if(k === 0) return head;
    
    for(let i:number = 1; i < cnt - 1; i++){
        node = node.next;
    }
    
    dummy = node.next;
    node.next = null;
    dummy.next = head;
    
    k--;
    
    return k === 0 ? dummy : rotateRight(dummy, k);
};