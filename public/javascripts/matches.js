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

// function getAllUsers() {
//   let allusers = 'http://localhost:3000/api/users'
//   axios.get(allusers).then(function(res) {
//     let allData = res.data.data;
//     for(let i = 0; i < allData.length; i++){
//
//     }
//
//
//     allData.forEach(function(arrayItem) {
//       console.log(arrayItem.username);
//       console.log(arrayItem.main_language);
//       console.log(arrayItem.learning_language);
//       console.log(arrayItem.email);
//       console.log(arrayItem.skype);
//       console.log(arrayItem.whatsapp);
//
//     });
//
//   });
// };
