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

  let deleteDuplicates = (head: LinkedList): LinkedList => {
      if(!head || !head.next) return head;
      
      let node = head;
      
      while(node.next){
          if(node.val === node.next.val){
              node.next = node.next.next;
          }else{
              node = node.next;   
          }
      }
      
      return head;
  };
}