/********************************************************************************
  The core.StringTools
 ********************************************************************************/
core.StringTools = {};

/**
 * 去两边空格
 */
core.StringTools.trim = function (str) {
	var reg = new RegExp("^\\s+|\\s+$","g");
    reg = /^\s+|\s+$/g;

    return str.replace(reg,"");
}
 
/**
 * 去左边空格
 */
core.StringTools.ltrim = function (str) {
    return str.replace(/^\s+/,"");
}

/**
 * 去右边空格
 */
core.StringTools.rtrim = function (str) {
    return str.replace(/\s+$/,"");
}