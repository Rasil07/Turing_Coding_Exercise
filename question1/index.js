const BST = require("./binary_search_tree");

const tree = new BST(1, 3);

console.log({ tree });

tree.insert(2, 1);
tree.insert(5, 10);
tree.insert(3, 11);

console.log({ tree });

console.log(`Searched value`, tree.searchValueOfKey(2));

console.log("Sorted keys below");
tree.printKeysInSortedOrder();

console.log("Smallest keys's value in tree is", tree.findMin().value);

console.log(tree.searchNode(1).findSuccessor());

tree.delete(5);
console.log("Sorted keys below");
tree.printKeysInSortedOrder();
