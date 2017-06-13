console.log('matches.js is here')

function showFrench() {
  $('.english').css("display", "block");
  $('.spanish').css("display", "block");
  $('.russian').css("display", "block");
  $('.icelandic').css("display", "block");
  $('.czech').css("display", "block");
  $('.french').css("display", "block");

  $('.english').css("display", "none");
  $('.spanish').css("display", "none");
  $('.russian').css("display", "none");
  $('.icelandic').css("display", "none");
  $('.czech').css("display", "none");
};
function showEnglish() {
  $('.english').css("display", "block");
  $('.spanish').css("display", "block");
  $('.russian').css("display", "block");
  $('.icelandic').css("display", "block");
  $('.czech').css("display", "block");
  $('.french').css("display", "block");

  $('.french').css("display", "none");
  $('.spanish').css("display", "none");
  $('.russian').css("display", "none");
  $('.icelandic').css("display", "none");
  $('.czech').css("display", "none");
};
function showSpanish() {
  $('.english').css("display", "block");
  $('.spanish').css("display", "block");
  $('.russian').css("display", "block");
  $('.icelandic').css("display", "block");
  $('.czech').css("display", "block");
  $('.french').css("display", "block");

  $('.english').css("display", "none");
  $('.french').css("display", "none");
  $('.russian').css("display", "none");
  $('.icelandic').css("display", "none");
  $('.czech').css("display", "none");
};

function showRussian() {
  $('.english').css("display", "block");
  $('.spanish').css("display", "block");
  $('.russian').css("display", "block");
  $('.icelandic').css("display", "block");
  $('.czech').css("display", "block");
  $('.french').css("display", "block");

  $('.english').css("display", "none");
  $('.spanish').css("display", "none");
  $('.french').css("display", "none");
  $('.icelandic').css("display", "none");
  $('.czech').css("display", "none");
};

function showIcelandic() {
  $('.english').css("display", "block");
  $('.spanish').css("display", "block");
  $('.russian').css("display", "block");
  $('.icelandic').css("display", "block");
  $('.czech').css("display", "block");
  $('.french').css("display", "block");

  $('.english').css("display", "none");
  $('.spanish').css("display", "none");
  $('.russian').css("display", "none");
  $('.french').css("display", "none");
  $('.czech').css("display", "none");
};

function showCzech() {
  $('.english').css("display", "block");
  $('.spanish').css("display", "block");
  $('.russian').css("display", "block");
  $('.icelandic').css("display", "block");
  $('.czech').css("display", "block");
  $('.french').css("display", "block");

  $('.english').css("display", "none");
  $('.spanish').css("display", "none");
  $('.russian').css("display", "none");
  $('.icelandic').css("display", "none");
  $('.french').css("display", "none");
};

function initMap() {
  var uluru = {
    lat: 40.7388,
    lng: -73.9815
  };
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}
