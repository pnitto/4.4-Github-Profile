$.ajax({
  headers: {"Authorization": "token f9aade4f2bc6d334fe720871214086a9a3bccc6a"},
  url: "https://api.github.com/user/repos",
  type: "GET",
}).then(function(data){
  console.log(data);
});
