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

let removeNthFromEnd = (head: node, n: number): node => {
    let totalCnt: number = 0;
    let cnt: number = 1;
    let total: node = head;
    let headNode: node = head;
    
    while(total){
        total = total.next;
        totalCnt++;
    }
    
    if(totalCnt - n === 0){            
        return head.next;
    }
    
    while(headNode){                        
        if(totalCnt - n === cnt){
            headNode.next = (headNode.next).next;
        }
        
        cnt++
        headNode = headNode.next;
    }
    
    return head;
};