'use strict';
$(document).ready(function(){
  
  function colorize(el){
      var randomColor = Math.floor(Math.random()*16777215).toString(16);
      $(el).css({
      'background-color': '#' + randomColor
      });
      console.log($(el).css('background-color'));
  }

  $('.colorize').on('click', function(e){
    e.preventDefault();
    colorize(this);
  });
});