const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
 class ListNode {
  constructor(x) {
    this.value = x;
    this.next = null;
}
}
function ArrayToList(arr) {
return arr.reverse().reduce((accum, current) => {
 if (accum) {
   const node = new ListNode(current);
   node.next = accum;
   return node;
 }

 return new ListNode(current);
}, null);
}

 function removeKFromList( l, k ) {
  let arr=[];
   var length=0;
   var current= l; //new ListNode;
    console.log(current);
   while (current){
     //  console.log(current);
       if (current.value===k) {
           current=current.next;
       } 
       else {
          arr[length]=current.value; 
          current=current.next;
          length++;
       }
   }
   return ArrayToList(arr);
}


module.exports = {
  removeKFromList
};
