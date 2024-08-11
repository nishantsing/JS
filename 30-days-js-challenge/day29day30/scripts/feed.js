// scripts/feed.js

// document.addEventListener("DOMContentLoaded", function () {
const postsContainer = document.getElementById("posts-container");
document.querySelector("form").addEventListener("submit", createComment);
// Fetch posts from localStorage
let posts = JSON.parse(localStorage.getItem("posts")) || [];
let currentUser = sessionStorage.getItem("loggedInUser");
let currentIndex = null;
let color = {};

function generateRandomColor() {
    const r = Math.floor(Math.random() * 128 + 128);
    const g = Math.floor(Math.random() * 128 + 128);
    const b = Math.floor(Math.random() * 128 + 128);
    return `rgb(${r},${g},${b})`;
}

function renderPosts() {
    if (posts.length === 0) {
        postsContainer.innerHTML = "<p class='empty'>No post found.</p>";
    } else {
        postsContainer.innerHTML = "";
    }

    posts.forEach((post, idx) => {
        const postElement = document.createElement("div");
        postElement.className = "post";
        postElement.setAttribute("data-index", idx);
        if (post.username !== currentUser) {
            if (!color[post.username]) {
                color[post.username] = generateRandomColor();
            }
            postElement.style.backgroundColor = color[post.username];
        }

        const postContent = `
                <p><strong>${
                    post.username
                }</strong> - <span class="timestamp">${new Date(
            post.timestamp
        ).toLocaleString()}</span></p>
                <p>${post.text}</p>
                ${
                    post.image
                        ? `<img src="${post.image}" alt="Post image">`
                        : ""
                }
                <button class="btn like-button">Like (${post.likes})</button>
                <button class="btn comment-button">Comment (${
                    post.comments.length
                })</button>
            `;
        postElement.innerHTML = postContent;
        postsContainer.appendChild(postElement);
    });

    // Attach event listeners to like and comment buttons
    document.querySelectorAll(".like-button").forEach((button) => {
        button.addEventListener("click", function (e) {
            // const index = button.getAttribute("data-index");
            let postElement = this.parentNode;
            const index = postElement.getAttribute("data-index");
            likePost(index);
        });
    });

    document.querySelectorAll(".comment-button").forEach((button) => {
        button.addEventListener("click", function () {
            // const index = button.getAttribute("data-index");
            // window.location.href = `post.html?id=${index}`;
            let postElement = this.parentNode;
            const index = postElement.getAttribute("data-index");
            currentIndex = index;
            // window.location.href = `comment.html`

            renderComments(index);
        });
    });
}

function likePost(index) {
    posts[index].likes += 1;
    localStorage.setItem("posts", JSON.stringify(posts));
    renderPosts();
}

function createComment(e) {
    e.preventDefault();
    let text = document.querySelector("#commentInput").value;
    let comment = {};
    comment.text = text;
    comment.user = currentUser;
    comment.timestamp = new Date().toISOString();
    posts[currentIndex].comments.push(comment);
    localStorage.setItem("posts", JSON.stringify(posts));
    document.querySelector("#commentInput").value = "";
    displayComments(currentIndex);
    // renderPosts();
}

function renderComments(index) {
    openModal(index);
}

// Render posts on page load
renderPosts();

function openModal(index) {
    document.getElementById("commentModal").style.display = "block";
    displayComments(index);
}

function displayComments(index) {
    const commentsContainer = document.getElementById("commentsContainer");
    let comments = posts[index].comments;
    commentsContainer.innerHTML = "";

    if (comments.length === 0) {
        commentsContainer.innerHTML = "<p class='empty'>No comment found.</p>";
    } else {
        commentsContainer.innerHTML = "";
    }

    comments.forEach((comment) => {
        const commentContainer = document.createElement("div");
        commentContainer.classList.add("single-comment");
        commentContainer.innerHTML = `
                <p><strong>${
                    comment.user
                }</strong> - <span class="timestamp">${new Date(
            comment.timestamp
        ).toLocaleString()}</span></p>
                <p>${comment.text}</p>
            `;
        commentsContainer.appendChild(commentContainer);
    });
    // commentContainer.innerHTML = comments.map(
    //     (comment) =>
    // );

    // .join("");
}
// });

function closeModal() {
    document.getElementById("commentModal").style.display = "none";
    renderPosts();
}
