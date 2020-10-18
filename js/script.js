
// navbar dropdown function
function dropdown() {

  $('.parent-dropdown').hover(function() {
    $(this).children('.dropdown').show();
  },
  function() {
    $(this).children('.dropdown').hide();
  });
}

// open side menu function
function openMenu() {

  $('#open-button').click(function() {

    $('#side-menu').css('width', '200px');
    $('#container').css('margin-right', '200px');
  });
}

// close side menu function
function closeMenu() {

  $('#close-button').click(function() {

    $('#side-menu').css('width', '0');
    $('#container').css('margin-right', '0');
  });

  $(window).resize(function(){

    if ($(window).width() > 768) {

      $('#side-menu').css('width', '0');
      $('#container').css('margin-right', '0');
       }
  });
}

// slide toggle side menu child link function
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
