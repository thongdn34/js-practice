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
var mergeTwoLists = function (h1, h2) {
  if (!h1 && !h2) {
    return null;
  } else if (!h1 && h2) {
    return h2;
  } else if (h1 && !h2) {
    return h1;
  } else if (h1.val < h2.val) {
    let cur = h1;
    cur.next = mergeTwoLists(h1.next, h2);
    return cur;
  } else {
    let cur = h2;
    cur.next = mergeTwoLists(h1, h2.next);
    return cur;
  }
};
