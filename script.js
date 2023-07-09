document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("post-form");
    var usernameInput = document.getElementById("username-input");
    var postContent = document.getElementById("post-content");
    var postsContainer = document.getElementById("posts");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        var username = usernameInput.value;
        var content = postContent.value;

        if (username.trim() === "" || content.trim() === "") {
            alert("Please enter your username and post content.");
            return;
        }

        var postElement = document.createElement("div");
        postElement.classList.add("post");
        postElement.innerHTML = "<strong>" + username + "</strong>: " + content;

        postsContainer.appendChild(postElement);

        // Clear the form inputs
        usernameInput.value = "";
        postContent.value = "";
    });
});
