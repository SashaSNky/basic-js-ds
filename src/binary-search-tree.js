const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class treeObj{
  constructor(val) {
    this.data = val;
    this.r=null;
    this.l=null;
  }  
}

class BinarySearchTree {
  constructor(value) {
    this.rootObj=null;
  }  
   root() {
    if (this.rootObj) return this.rootObj 
       else return null;
  }

  add(value) {
    function addTreeObj(obj, val){
      if (!obj) return new treeObj(val); 

      if (val===null || val===undefined) return obj;

      if (obj.data===val) return obj;
      
      val<obj.data ? obj.l=addTreeObj(obj.l, val) : obj.r=addTreeObj(obj.r, val);   
      return obj;
    } // end func addTreeObj
    
    this.rootObj = addTreeObj(this.rootObj, value);
  } 
  
  has(value) {
    function searchInObj(obj, val){
      if (!obj) return false; 
      
      if (obj.data===val) return true;

      let resSearch;
      val < obj.data ? resSearch=searchInObj(obj.l , val) :
      resSearch= searchInObj(obj.r , val);
      return resSearch;
    }

    if (value===null || value===undefined) return false;
    else 
     return searchInObj(this.rootObj, value);
      
  } //end method has

  find(value) {
    function searchObj(obj, val){
      if (val===null || val===undefined) return null;
      if (!obj) return null; 
      
      if (obj.data===val) return obj;

      let resSearch;
      val < obj.data ? resSearch=searchObj(obj.l , val) : resSearch= searchObj(obj.r , val);
      return resSearch;
    }
    
    return searchObj(this.rootObj, value);
  }

  remove(value) {
    this.rootObj=removeObj(this.rootObj, value);

    function removeObj(obj, val){
      if (!obj) { return null; }
      if (val===null || val===undefined) return null;
      if (val<obj.data){
        if (obj.l) { 
          obj.l=removeObj(obj.l, val);
          return obj;}  
         else 
           {return obj; } 
    } else 
      if (val>obj.data){
        obj.r=removeObj(obj.r, val);
        return obj; 
      }
      else {
      //that mean's that we need to delete this object
          if (!obj.l && !obj.r) return null;
          if (!obj.l) {
            obj=obj.r;
            return obj;
          }
          if (!obj.r) {
            obj=obj.l;
            return obj;
          }
        //  if we have left and right subtrees
        // find max from left, min from max
          let minRightVal = obj.r;
          while (minRightVal.l){
            minRightVal=minRightVal.l;
          }
          obj.data=minRightVal.data;
           
          obj.r= removeObj(obj.r,minRightVal.data);
          
          return obj;
      }  
    }        
  } //end method remove

  min() {
    if (!this.rootObj) return null; 
    let objMin = this.rootObj;
    while (objMin.l){  
      objMin=objMin.l;
    }

    return objMin.data;
  }

  max() {
    if (!this.rootObj) return null; 
    let obj = this.rootObj;
    while (obj.r){  
      obj=obj.r;
    }

    return obj.data;
  }
}
module.exports = {
  BinarySearchTree
};