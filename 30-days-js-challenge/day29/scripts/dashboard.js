// scripts/index.js

document.addEventListener("DOMContentLoaded", function () {
    const newPostForm = document.getElementById("new-post-form");
    const postText = document.getElementById("post-text");
    const postImage = document.getElementById("post-image");
    const postsContainer = document.getElementById("posts-container");

    // Array to hold posts
    let posts = JSON.parse(localStorage.getItem("posts")) || [];

    // Get the logged-in username
    const loggedInUser = sessionStorage.getItem("loggedInUser");
    if (!loggedInUser) {
        // Redirect to login page if no user is logged in
        window.location.href = "./authentication/login.html";
    }

    function addPost(post) {
        // Initialize post with likes and comments
        post.likes = 0;
        post.comments = [];
        posts.push(post);
        localStorage.setItem("posts", JSON.stringify(posts));
        // Redirect to post page
        // window.location.href = `post.html?id=${posts.length - 1}`; // Pass the index of the new post to open it in a new Post page
        postsContainer.innerHTML = "";
        const postElement = document.createElement("div");
        postElement.className = "post";

        const postHtml = `
            <p><strong>${
                post.username
            }</strong> - <span class="timestamp">${new Date(
            post.timestamp
        ).toLocaleString()}</span></p>
            <p>${post.text}</p>
            ${post.image ? `<img src="${post.image}" alt="Post image">` : ""}
        `;
        postElement.innerHTML = postHtml;
        postsContainer.appendChild(postElement);
    }

    newPostForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const text = postText.value.trim();
        const image = postImage.value.trim();

        if (text && loggedInUser) {
            const newPost = {
                text,
                image,
                username: loggedInUser,
                timestamp: new Date().toISOString(),
            };
            addPost(newPost);

            // Clear the form
            postText.value = "";
            postImage.value = "";
        } else {
            alert(
                "Please enter some text for the post and ensure you are logged in."
            );
        }
    });
});
