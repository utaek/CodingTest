/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
let addTwoNumbers = (l1, l2) => {
  let listNode = new ListNode();
  let node = listNode;
  let sum = 0;
  let tmp = 0;

  while(l1 || l2 || sum > 0){
      if(l1){
          sum += l1.val;
          l1 = l1.next;
      }
      
      if(l2){
          sum += l2.val;
           l2 = l2.next;
      }
      
      if(sum > 9){
          sum -= 10;
          tmp = 1;
      }

      node.next = new ListNode(sum);
      node = node.next;
      
      sum = tmp;
      tmp = 0;
  }
  
  return listNode.next;
};