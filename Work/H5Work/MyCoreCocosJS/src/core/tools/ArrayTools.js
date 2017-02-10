/********************************************************************************
  The core.ArrayTools
 ********************************************************************************/
core.ArrayTools = {};

/**
 * 洗牌
 */
core.ArrayTools.shuffle = function (arr) {	
	var swap=function(array,index1,index2){            
	    var temp = array[index1];
	    array[index1] = array[index2];
	    array[index2] = temp;
	}
	var len = arr.length;
	while(len > 1){
	    len = len - 1;
	    var index1 = Math.round(Math.random()*len);
	    swap(arr,index1,len);
	}
}