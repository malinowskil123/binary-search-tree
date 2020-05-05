const Node = require('./node')

class BST {
  constructor() {
    this.root = null
  }
  add(data) {
    const node = this.root
    if (node === null) {
      this.root = new Node(data)
      return
    }
  }
  isEmpty() {
    return this.root === null ? true : false
  }
}
module.exports = BST
