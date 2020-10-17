
function dropdown() {

  $('.parent-dropdown').hover(function() {
    $(this).children('.dropdown').show();
  },
  function() {
    $(this).children('.dropdown').hide();
  });
}


function init() {

  dropdown();
  console.log("Hello World");
}

$(document).ready(init);
