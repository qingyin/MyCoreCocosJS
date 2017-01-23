
/*
** core.SpriteTools
*/

core.SpriteTools = {};

core.SpriteTools.enableMotive = function (sprite,touchBeganCallback,touchEndedCallback) {
	var listener = cc.EventListener.create({
        event: cc.EventListener.TOUCH_ONE_BY_ONE,
        swallowTouches: true,
        onTouchBegan : function(touch, event){
            var target = event.getCurrentTarget();
            var rect = cc.rect(0,0,target.width,target.height);
            var pos = target.convertToNodeSpace(touch.getLocation());
            if (cc.rectContainsPoint(rect,pos)){
                if (touchBeganCallback) {
                    touchBeganCallback();
                }          
                target.opacity = 180;
                return true;
            }
        	return false;
        },
        onTouchMoved : function(touch, event){
            var target = event.getCurrentTarget();
            var delta = touch.getDelta();
            target.x += delta.x;
            target.y += delta.y;
        },
        onTouchEnded : function(touch, event){  
            var target = event.getCurrentTarget();
            if (touchEndedCallback) {
                touchEndedCallback();
            }
            target.opacity = 255;
        },
    });
    cc.eventManager.addListener(listener,sprite);
    return listener;
}



