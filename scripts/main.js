/*$(document).ready(function(){
    $.ajax({
          headers: {"Authorization": "token f9aade4f2bc6d334fe720871214086a9a3bccc6a"},
          url: "https://api.github.com/user/repos",
          type: "GET",
        }).then(function(data){
          return data.forEach(function(repo){
          });
    });
*/
  /*  $(document).ready(function() {

     $.ajax({
      headers: {"Authorization": "token XXXXXXXXX"},
      url: "https://api.github.com/users/techgravy",
      type: "GET",
    }).then(function(data){

    var url = "https://api.github.com/users/techgravy";
    $.ajax(url).then(function(response) {
    console.log(response.avatar_url)
     $(".profile-pic").html('<img src="' + response.avatar_url +'"/>');

    })

    });
    $.ajax({
    headers: {"Authorization": "token XXXXXXXXX"},
    url: "https://api.github.com/user/repos",
    type: "GET",
}).then(function(data){
//console.log(data);


 });
});
    */
$(document).ready(function(){
  $.ajax({
    headers: {"Authorization": "token f9aade4f2bc6d334fe720871214086a9a3bccc6a"},
    url: "https://api.github.com/users/pnitto",
    type: "GET",
  }).then(function(userData){
    var url = "https://api.github.com/users/pnitto";
    $.ajax(url).then(function(response){
      console.log(response)
    $(".left-sidebar").css('background','url(' + response.avatar_url +')');
  })
});

$.ajax({
   headers: {"Authorization": "token f9aade4f2bc6d334fe720871214086a9a3bccc6a"},
   url: "https://api.github.com/users/pnitto/repos",
   type: "GET",
}).then(function(data){
var repoUrl = "https://api.github.com/users/pnitto/repos";

$.ajax(repoUrl).then(function(responses){
  responses.forEach(function(repo){
    var li = $('<li>'+ repo.full_name +'</li>');
    console.log(repo);
$(".repo-ulll").append(li);
  })
})
});
});


/*var repoUrl = "https://api.github.com/users/pnitto/repos",
$.ajax(repoUrl).then(function(repos){
  console.log(repos)
  repos.forEach()

})
*/
