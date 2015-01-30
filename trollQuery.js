(function(){
  var jqText = jQuery.fn.text;
  jQuery.fn.text = function(){
    arguments[0] = 'Poop ' + arguments[0];
    jqText.apply( this, arguments );
  }
})();
