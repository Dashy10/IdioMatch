console.log('matches.js is here')

let allusers = 'http://localhost:3000/api/users'

axios.get(allusers)
.then(function(res){
  let allData = res.data.data;
  allData.forEach(function(arrayItem){
    console.log(arrayItem.username);
    console.log(arrayItem.main_language);
    console.log(arrayItem.learning_language);
    console.log(arrayItem.email);
    console.log(arrayItem.skype);
    console.log(arrayItem.whatsapp);
  });

});
