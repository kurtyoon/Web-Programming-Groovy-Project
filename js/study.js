var board = document.getElementById("board");
var writePost = document.getElementById("writePost");
var viewPost = document.getElementById("viewPost");

var writeBtn = document.getElementById("writeBtn");
var submitPost = document.getElementById("submitPost");
var backBtn = document.getElementById("backBtn");

var postList = [];

writeBtn.addEventListener("click", function () {
  board.style.display = "none";
  writePost.style.display = "block";
});

submitPost.addEventListener("click", function (event) {
  event.preventDefault();

  var category = document.getElementById("category").value;
  var title = document.getElementById("title").value;
  var author = document.getElementById("author").value;
  var content = document.getElementById("content").value;

  var newPost = {
    date: new Date().toLocaleDateString(),
    category: category,
    title: title,
    author: author,
    content: content,
  };

  postList.push(newPost);

  updateBoard();

  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("content").value = "";

  writePost.style.display = "none";
  board.style.display = "block";
});

backBtn.addEventListener("click", function () {
  viewPost.style.display = "none";
  board.style.display = "block";
});

function updateBoard() {
  var postListNode = document.getElementById("postList");
  postListNode.innerHTML = "";
  for (var i = 0; i < postList.length; i++) {
    var postNode = document.createElement("tr");
    postNode.innerHTML =
      "<td>" +
      postList[i].date +
      '</td><td class="postTitle">' +
      postList[i].title +
      "</td><td>" +
      postList[i].author +
      "</td>";
    postListNode.appendChild(postNode);
  }

  var postTitles = document.getElementsByClassName("postTitle");
  for (var i = 0; i < postTitles.length; i++) {
    postTitles[i].addEventListener("click", function (event) {
      var index = Array.prototype.indexOf.call(postTitles, event.target);
      var post = postList[index];
      document.getElementById("postTitle").textContent = post.title;
      document.getElementById("postContent").textContent = post.content;
      board.style.display = "none";
      viewPost.style.display = "block";
    });
  }
}

updateBoard();
