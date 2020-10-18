
function dropdown() {

  $('.parent-dropdown').hover(function() {
    $(this).children('.dropdown').show();
  },
  function() {
    $(this).children('.dropdown').hide();
  });
}

function openMenu() {

  $('#open-button').click(function() {

    $('#side-menu').css('width', '200px');
    $('#container').css('margin-right', '200px');
  });
}

function closeMenu() {

  $('#close-button').click(function() {

    $('#side-menu').css('width', '0');
    $('#container').css('margin-right', '0');
  });
}

function showMenuChild() {

  $('.parent-sidemenu').click(function() {

    $(this).children('.child-sidemenu').slideToggle();

    $(this).siblings().children('.child-sidemenu').slideUp();
  });
}


function init() {

  dropdown();
  openMenu();
  closeMenu();
  showMenuChild();
}

$(document).ready(init);
