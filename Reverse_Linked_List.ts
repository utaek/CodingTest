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

  let reverseList = (head: LinkedList): LinkedList => {
      if (!head || !head.next) return head;
      
      let node = head;
      let dummy = null;
      
      while(node){
          let tmp = node.next; // 2, 3, 4, 5 // 3, 4, 5 // 4, 5

          node.next = dummy; // null // 2, 1 // 3, 2, 1
          dummy = node; // 1 // 2, 1 // 3, 2, 1
          node = tmp; // 2, 3, 4, 5 // 3, 4, 5 // 4, 5
      }
      
      return dummy;
  };
}