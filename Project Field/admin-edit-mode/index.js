function openEditMode() {
    document.getElementById("edit-page-html").value = document.getElementById("review-html").innerHTML;
}
function updateReviewHTML() {
    document.getElementById("review-html").innerHTML = document.getElementById("edit-page-html").value;
    document.getElementById("edit-page-html").value = "";
}
function displayReview(dataIndex) {
    document.getElementById("review-html").innerHTML = `
    <h1>${reviewDatabase[dataIndex].name}</h1>
    <img src="${reviewDatabase[dataIndex].image}" style="width:100%" alt="img not found">
    <h2>${reviewDatabase[dataIndex].description}</h2>
    <p>${reviewDatabase[dataIndex].content}</p>`
}
displayReview(1);