function BinaryTree(){
    this.root=null;                 //根元素
	
    var Node=function(key){         //节点函数
        this.key=key;
        this.left=null;
        this.right=null;
    }
	
    this.insert=function(key){      //对外提供访问函数内部的接口
        var newNode=new Node(key);
        if(this.root==null){
            this.root=newNode
        }else{
            insertNode(this.root,newNode);
        }
    }
    var insertNode=function(node,newNode){//创建相互关系的根实体
        if(node.key>newNode.key){
            if(node.left==null){
                node.left=newNode;
            }else{
                insertNode(node.left,newNode)
            }
        }else{
            if(node.right==null){
                node.right=newNode
            }else{
                insertNode(node.right,newNode)
            }
        }
    }
    
    var proOrderTraverseNode=function(node,callback){
	    if(node!=null){
		callback(node.key)
		proOrderTraverseNode(node.left,callback)
		proOrderTraverseNode(node.right,callback)
	    }
	}
	//前序遍历  复制   效率高得多
	this.proOrderTraverse=function(callback){
	    proOrderTraverseNode(this.root,callback);
	}
	
	var postOrderTraverseNode=function(node,callback){
    		if(node!=null){
		postOrderTraverseNode(node.left,callback)
		postOrderTraverseNode(node.right,callback)
		callback(node.key)
		 }
	}
	//后续遍历  文件系统遍历
	this.postOrderTraverse=function(callback){
	    postOrderTraverseNode(this.root,callback);
	}
	
	var maxNode=function(node){
	    if(node){
		while(node&&node.right!=null){
		    node=node.left
		}
		return node.key;
	    }
	}
	// 查找最大值
	this.max=function(){
	    return maxNode(this.root)
	}

	var minNode=function(node){
	    if(node){
		while(node&&node.left!=null){
		    node=node.left
		}

		return node.key;
	    }
	}
	// 查找最小值
	this.min=function(){
	    return minNode(this.root)
	}
	
}

// 创建二叉树实例
var nodes=[8,3,10,1,6,14,4,7,13];
var binaryTree=new BinaryTree();
nodes.forEach(function(key){
    binaryTree.insert(key);
})
