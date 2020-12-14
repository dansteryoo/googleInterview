function reverseLL(head) {
  let previous = null;
  let current = head;

  while (current) {
    let next = current.next;
    current.next = previous;
    previous = current;
    current = next;
  }

  return previous;
}

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
