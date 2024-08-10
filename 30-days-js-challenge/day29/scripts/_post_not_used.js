// scripts/post.js

document.addEventListener("DOMContentLoaded", function () {
    const postContent = document.getElementById("post-content");

    function getQueryParams() {
        const params = new URLSearchParams(window.location.search);
        return {
            id: params.get("id"),
        };
    }

    function renderPost(post) {
        if (!post) {
            postContent.innerHTML = "<p>No post found.</p>";
            return;
        }

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
        postContent.appendChild(postElement);
    }

    function loadPost() {
        const { id } = getQueryParams();
        let posts = JSON.parse(localStorage.getItem("posts")) || [];
        const post = posts[id];

        renderPost(post);
    }

    // Load and render post on page load
    loadPost();
});
