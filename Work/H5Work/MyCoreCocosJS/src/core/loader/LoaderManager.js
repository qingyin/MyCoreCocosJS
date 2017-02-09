
/*
** core.LoaderManager
*/

core.LoaderManager = {};

core.LoaderManager.loadFileSync = function (filePath) {
    var txtData;
    if (cc.sys.platform >= cc.sys.MOBILE_BROWSER) {//html5
        txtData = cc.loader._loadTxtSync(filePath);  
    }else{//native
        txtData = jsb.fileUtils.getStringFromFile(filePath);
    }
    return txtData;
}

core.LoaderManager.loadImgFromUrl = function (targetSprite, imgUrl, p, tag) {
    if(!imgUrl)return;  
    var self = targetSprite;  
    var loadCb = function(err, img){
        if(err) {
            cc.log("err------",err);
            return;
        }
        cc.textureCache.addImage(imgUrl);

        if (cc.sys.isNative) {
            self.initWithTexture(img);
            if(self.imgH && self.imgW){            	
	            self.setScaleY(self.imgH/img.height);
	            self.setScaleX(self.imgW/img.width);
            }
        }else{
            var texture2d = new cc.Texture2D();          
            texture2d.initWithElement(img);
            texture2d.handleLoadedTexture();
            self.initWithTexture(texture2d);
            if(self.imgH && self.imgW){            	
	            self.setScaleY(self.imgH/img.height);
	            self.setScaleX(self.imgW/img.width);
            }
        }  
    };  
    cc.loader.loadImg(imgUrl, {isCrossOrigin:true}, loadCb);
}







