const Node = (data, left = null, right = null) => ({data, left, right});

const findMin = node => node.left ? findMin(node.left) : node;

const bst = {
  add(data) {
    const node = this.root;

    if (null === node) {
      this.root = Node(data);
      return;
    }

    const searchTree = node => {
      if (data < node.data) {
	if (null === node.left) {
	  node.left = Node(data);
	  return;
	}

	return searchTree(node.left);
      }

      if (data > node.data) {
	if (null === node.right) {
	  node.right = Node(data);
	  return;
	}

	return searchTree(node.right);
      }

      return null;
    }

    return searchTree(node);
  },

  get min() {
    return findMin(this.root);
  },

  get max() {
    const find = node => node.right ? find(node.right) : node;
    return find(this.root);
  },

  find(data) {
    const find = node => {
      if (node.data === data) return node;
      if (node.data > data) return node.left ? find(node.left) : null;
      if (node.data < data) return node.right ? find(node.right) : null;
    }
    return find(this.root);
  },

  isPresent(data) {
    const find = node => {
      if (node.data === data) return true;
      if (node.data > data) return node.left ? find(node.left) : false;
      if (node.data < data) return node.right ? find(node.right) : false;
    }
    return find(this.root);
  },

  remove(data) {
    const remove = (node, data) => {
      if (!node) return null;

      if (node.data === data) {
	if (!node.left && !node.right) return null;
	if (!node.left) return node.right;
	if (!node.right) return node.left;

	node.data = findMin(node.right).data;
	node.right = remove(node.right, node.data);

	return node;
      }

      if (node.data > data) {
	node.left = remove(node.left, data);
	return node;
      }

      node.right = remove(node.right, data);
      return node;
    }

    this.root = remove(this.root, data);
  }
}

export const BST = () => Object.create(bst, {
  root: { 
    value: null,
    writable: true
  }
});
