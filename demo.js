function BinaryTree() {
    this.root = null;                 //根元素

    var Node = function (key) {         //节点函数
        this.key = key;
        this.left = null;
        this.right = null;
    }

    this.insert = function (key) {      //对外提供访问函数内部的接口
        var newNode = new Node(key);
        if (this.root == null) {
            this.root = newNode
        } else {
            insertNode(this.root, newNode);
        }
    }
    var insertNode = function (node, newNode) {//创建相互关系的根实体
        if (node.key > newNode.key) {
            if (node.left == null) {
                node.left = newNode;
            } else {
                insertNode(node.left, newNode)
            }
        } else {
            if (node.right == null) {
                node.right = newNode
            } else {
                insertNode(node.right, newNode)
            }
        }
    }

    var proOrderTraverseNode = function (node, callback) {
        if (node != null) {
            callback(node.key)
            proOrderTraverseNode(node.left, callback)
            proOrderTraverseNode(node.right, callback)
        }
    }
    //前序遍历  复制   效率高得多
    this.proOrderTraverse = function (callback) {
        proOrderTraverseNode(this.root, callback);
    }

    var postOrderTraverseNode = function (node, callback) {
        if (node != null) {
            postOrderTraverseNode(node.left, callback)
            postOrderTraverseNode(node.right, callback)
            callback(node.key)
        }
    }
    //后续遍历  文件系统遍历
    this.postOrderTraverse = function (callback) {
        postOrderTraverseNode(this.root, callback);
    }

    var maxNode = function (node) {
        if (node) {
            while (node && node.right != null) {
                node = node.left
            }
            return node.key;
        }
    }
    // 查找最大值
    this.max = function () {
        return maxNode(this.root)
    }

    var minNode = function (node) {
        if (node) {
            while (node && node.left != null) {
                node = node.left
            }

            return node.key;
        }
    }
    // 查找最小值
    this.min = function () {
        return minNode(this.root)
    }

    var findMinNode = function (node) { //如果存在左右两个节点的话查找右节点的最小节点
        if (node) {
            while (node && node.left != null) {
                node = node.left
            }
            return node;
        }
        return null
    }

    var removeNode = function (node, key) {
        if (node == null) {
            return null;
        }
        if (node.key > key) {// 递归查找左叶子节点，直接等于返回的null值
            node.left = removeNode(node.left, key)
            return node;
        } else if (node.key < key) {// 递归查找右叶子节点，直接等于返回的null值
            node.right = removeNode(mode.right, key)
            return node;
        } else {// 如果查找到相等的情况下
            if (node.left == null && node.right == null) {// 当只有一个节点，而且被选中
                node = null;
                return node;
            }
            if (node.left == null) { //左节点为空
                node = node.right;
                return node;
            } else if (node.right == null) {//右节点为空
                node = node.left;
                return node;
            }

            var aux = findMinNode(node.right);//查找到右节点最小节点赋值
            node.key = aux.key;
            node.right = removeNode(node.right, aux.key);
            return node;
        }
    }
    this.remove = function (key) {
        return removeNode(this.root, key)
    }

    var maxDepth = function (root) {
        if (root === null) {
            return 0;
        } else {
            var leftDepth = maxDepth(root.left),
                rightDepth = maxDepth(root.right);
            var childDepth = leftDepth > rightDepth ? leftDepth : rightDepth;
            return 1 + childDepth;
        }
    }

    this.maxDepth = () => maxDepth(this.root)
    
    // 获取二叉树所有节点个数
    var getNodeCount=node=>{
        if(node===null){
          return 0
        }
        return 1+getNodeCount(node.left)+getNodeCount(node.right)
    }
   this.nodeCount=getNodeCount(this.root)
    
    var getNodeLeafCount=node=>{
        if(node===null){
          return 0
        }
		else if(node.left===null&&node.right===null){
          return 1
        }
        return getNodeLeafCount(node.left)+getNodeLeafCount(node.right)
    }    
    this.nodeLeafCount=getNodeLeafCount(this.root)
}

// 创建二叉树实例
var nodes = [8, 3, 10, 1, 6, 14, 4, 7, 13];
var binaryTree = new BinaryTree();
nodes.forEach(function (key) {
    binaryTree.insert(key);
})
