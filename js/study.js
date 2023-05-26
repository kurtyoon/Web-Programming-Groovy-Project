window.onload = function () {
  function showPopup() {
    document.getElementById("popupContainer").style.display = "block";
  }
};

window.onload = function () {
  // 카테고리 이름을 기반으로 테이블 ID를 반환
  function getCategoryTableName(categoryName) {
    const formattedCategoryName = categoryName.toLowerCase().replace(" ", "");
    return formattedCategoryName + "Table";
  }
};

window.onload = function () {
  // 글쓰기 기능 - 글 추가
  function addPost() {
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const currentDate = new Date().toLocaleDateString();

    const category = document.querySelector(".category-title");
    const categoryTable = document.getElementById(
      getCategoryTableName(category.innerText)
    );

    const row = categoryTable.insertRow(1);
    const titleCell = row.insertCell(0);
    const authorCell = row.insertCell(1);
    const dateCell = row.insertCell(2);

    titleCell.innerHTML = title;
    authorCell.innerHTML = author;
    dateCell.innerHTML = currentDate;

    hidePopup();
  }
};

window.onload = function () {
  // 글쓰기 팝업 숨김
  function hidePopup() {
    document.getElementById("popupContainer").style.display = "none";
  }
};
