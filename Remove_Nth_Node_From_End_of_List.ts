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
{
    type LinkedList = ListNode | null;
    let removeNthFromEnd = (head: LinkedList, n: number): LinkedList => {
        let totalCnt: number = 0;
        let cnt: number = 1;
        let total: LinkedList = head;
        let headNode: LinkedList = head;
        
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
}
