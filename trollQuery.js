(function(){
    var originalText = jQuery.fn.text;
    jQuery.fn.text = function(){
        arguments[0] = 'Poop ' + arguments[0];
        originalText.apply( this, arguments );
    }
})();
