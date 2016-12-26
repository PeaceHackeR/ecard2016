//------------------:: Apps ::------------------//
$(function(){
    var _allowPlay = true,
        _intervalID = null,
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
        
        _machine.removeClass("shake").addClass("finished");
        _allowPlay = true;
    }
})
