/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = (head) => {
  if (!head) return false;

  let slow = head;
  let fast = head.next;

  while (true) {
    if (!fast || !fast.next) {
      return false;
    }
    if (fast === slow || fast.next === slow) {
      return true;
    }

    slow = slow.next;
    fast = fast.next.next;
  }
};
