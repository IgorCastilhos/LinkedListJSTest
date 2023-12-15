const node3 = {data: 4, next: null};
const node2 = {data: 1, next: node3};
const node1 = {data: 3, next: node2};


function TraverseLinkedList(head) {
  let curNode = head;
  while (curNode) {
    console.log(curNode.data);
    curNode = curNode.next;
  }
}

TraverseLinkedList(node1);