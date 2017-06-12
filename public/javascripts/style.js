// testing testing....
console.log('Is connected');


// modal functions
function showLogin() {
  document.getElementById('login-form').style.display = "block";
};

function hideLogin() {
  document.getElementById('login-form').style.display = "none";
};

// jquery
$(function() {
  // hero cover to sticky nav
  $(window).scroll(function() {
    var winTop = $(window).scrollTop();
    if (winTop >= 30) {
      $("body").addClass("sticky-shrinknav-wrapper");
    } else {
      $("body").removeClass("sticky-shrinknav-wrapper");
    }
  });
});
