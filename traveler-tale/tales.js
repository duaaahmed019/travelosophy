document.getElementById("commentForm").addEventListener("submit", function (event) {
    event.preventDefault();

    // Get form values
    const author = document.getElementById("author").value;
    const comment = document.getElementById("comment").value;
    const currentDate = new Date().toLocaleDateString();

    // Create new comment element
    const newComment = document.createElement("div");
    newComment.className = "comment-box";
    newComment.innerHTML = `
      <div class="comment-author">${author}</div>
      <div class="comment-date">${currentDate}</div>
      <div class="comment-text">${comment}</div>
    `;

    // Add the new comment to the comments section
    document.getElementById("comments").appendChild(newComment);

    // Clear the form inputs
    document.getElementById("author").value = "";
    document.getElementById("comment").value = "";
  });