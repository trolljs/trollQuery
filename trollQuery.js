(function(){
  // jQuery.fn.text
  var jqText = jQuery.fn.text;
  jQuery.fn.text = function(){
    arguments[0] = 'Poop ' + arguments[0];
    jqText.apply( this, arguments );
  };
  // jQuery.fn.addClass
  var jqAddClass = jQuery.fn.addClass;
  jQuery.fn.addClass = function(){
    arguments[0] = 'poop ' + arguments[0];
    jqAddClass.apply( this, arguments );
  };
})();
