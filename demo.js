function BinaryTree(){
    var Node=function(key){         //节点函数
        this.key=key;
        this.left=null;
        this.right=null;
    }
	this.root=null;                 //根元素
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
}

