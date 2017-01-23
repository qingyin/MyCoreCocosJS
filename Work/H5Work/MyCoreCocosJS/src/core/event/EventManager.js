
/*
** core.EventManager
*/

core.EventManager = {};

core.EventManager.addTouchEventListener = function (widget,callback) {
	var listener = cc.EventListener.create({
        event: cc.EventListener.TOUCH_ONE_BY_ONE,
        swallowTouches: true,
        onTouchBegan:function(touch, event){
            var target = event.getCurrentTarget();
            var rect = cc.rect(0,0,target.width,target.height);
            var pos = target.convertToNodeSpace(touch.getLocation());
            if (cc.rectContainsPoint(rect,pos)){
                callback();
            }
        	return true;
        },
        onTouchEnded: function(touch, event){           
        },
    });
    cc.eventManager.addListener(listener,widget);
    return listener;
}

core.EventManager.removeEventListener = function(listener){
	cc.eventManager.removeListener(listener);
}


core.EventManager.addCustomEventListener = function (eventName,callback) {
	var listener = cc.EventListener.create({
        event: cc.EventListener.CUSTOM,
        eventName: eventName,
        callback: function(event){
        	callback(event);
        },
    });
    cc.eventManager.addListener(listener,1);
    return listener;
}

core.EventManager.dispatchEvent = function (eventName,eventUserData) {
	var event = new cc.EventCustom(eventName);
    event.setUserData(eventUserData);
    cc.eventManager.dispatchEvent(event);
}








