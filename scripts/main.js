$(document).ready(function() {
  $.ajax({
    headers: {
      "Authorization": "token f9aade4f2bc6d334fe720871214086a9a3bccc6a"
    },
    url: "https://api.github.com/users/pnitto",
    type: "GET",
  }).then(function(userData) {
    var url = "https://api.github.com/users/pnitto";
    $.ajax(url).then(function(response) {
      //console.log(response)
      $(".left-sidebar").css('background-image', 'url(' + response.avatar_url + ')');
      $(".name-under-pic").html(response.name);
      $(".username").html(response.login);
      $(".email").html(response.email);
      $(".joined").html(response.created_at);
      $(".js-followers").html(response.followers);
      $(".js-following").html(response.following);
    })
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
    var li = $('<li>'+ '<a href="">'+ repo.name  + '</a>'+ '</li>');
$(".repo-ulll").append(li);
  })
})
});

$.ajax({
  headers: {
    "Authorization": "token f9aade4f2bc6d334fe720871214086a9a3bccc6a"
  },
  url: "https://api.github.com/users/pnitto/starred",
  type: "GET",
}).then(function(stars) {
  console.log(stars.length);
  $(".js-starred").html(stars.length);
});

$.ajax({
  headers: {
    "Authorization": "token f9aade4f2bc6d334fe720871214086a9a3bccc6a"
  },
  url: "https://api.github.com/users/pnitto/orgs",
  type: "GET",
}).then(function(orgs) {
  console.log(orgs);
})
