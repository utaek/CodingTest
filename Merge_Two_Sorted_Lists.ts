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
  let mergeTwoLists = (l1: LinkedList, l2: LinkedList): LinkedList => {
      if(l1 === null) return l2;
      if(l2 === null) return l1;
      
      let node:LinkedList = new ListNode();
      let copy = node;
      
      while(l1 && l2){
          if(l1.val > l2.val){
              copy.next = l2;
              l2 = l2.next;
          }else{
              copy.next = l1;
              l1 = l1.next;
          }
          
          copy = copy.next;
      }
      
      copy.next = l1 === null ? l2 : l1;
      
      return node.next;
  };
}