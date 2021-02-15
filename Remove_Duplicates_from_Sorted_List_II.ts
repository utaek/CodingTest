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
      
      let dummy = new ListNode();
      dummy.next = head;
      let node = dummy;
      
      while(node.next && node.next.next){
          if(node.next.val === node.next.next.val){
              let tmp = node.next.val;

              while(node.next && tmp === node.next.val){
                  node.next = node.next.next;
              }
          }else{
              node = node.next;   
          }
      }
      
      return dummy.next;
  };
}