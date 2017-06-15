// testing testing....
console.log('style.js Is connected');

// modal functions
function showLogin() {
  $('#login-form').fadeIn(1300);
}
function hideLogin() {
  document.getElementById('login-form').style.display = "none";
};

// jquery
$(function() {
  // hero cover to sticky nav
  $(window).scroll(function() {
    var winTop = $(window).scrollTop();
    if (winTop >= 10) {
      $("body").addClass("sticky-shrinknav-wrapper");
    } else {
      $("body").removeClass("sticky-shrinknav-wrapper");
    }
  });

});
