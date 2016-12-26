//------------------:: Apps ::------------------//
var _tl;
$(function(){
    var _allowPlay = true,
        _intervalID = null,
        _contentBox = $("#content"),
        _message = _contentBox.find("li"),
        _machine = $(".box-02");
    
    $(".fx-coin").click(function(e){
        e.preventDefault();
        if(_allowPlay){
            _allowPlay = false;
            _machine.addClass("shake");
            _intervalID = setTimeout(showMessage, 2500);
        }
    });
    
    function showMessage(){
        var _rnd = getRandomInt(0,8);
        _message.removeClass("active");
        $(_message[_rnd]).addClass("active");
        _machine.removeClass("shake").addClass("finished");
        _allowPlay = true;
        _tl.restart(true);
    }
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    // TweenLite //
    var _popup = $("#happyMessage"),
        _bg = _popup.find(".popup-bg"),
        _box03 = $(".box-03"),
        _obj01 = _box03.find(".obj-01"),
        _obj02 = _box03.find(".obj-02"),
        _box04 = _popup.find(".box-04");
    
     _tl = new TimelineLite({paused:true});
    
    _tl
        .delay(0.85)
        .set(_popup, {css:{ display:"block"}})
        .set(_bg, { scale:1, autoAlpha:0 })
        .set(_obj01, {x:0}).set(_obj02,{x:0})
        .set(_box04, {width: 0, x: 390})
        .set(_contentBox, {y:20})
        .to(_bg, 0.56, { ease: Power2.easeOut, scale:1, autoAlpha: 1 }, 0)
        .to(_obj01, 0.84, { ease: Power2.easeOut, x:-300 }, 0.2)
        .to(_obj02, 0.84, { ease: Power2.easeOut, x:300 }, 0.2)
        .to(_box04, 0.84, { ease: Power2.easeOut, width:782, x:0}, 0.2)
        .to(_contentBox, 0.56, {ease: Power2.easeOut, autoAlpha: 1, y:0 });
})
