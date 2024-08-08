document.addEventListener("DOMContentLoaded", function () {
    fetch("./posts/posts.json")
        .then((response) => response.json())
        .then((data) => {
            const main = document.querySelector("main");
            data.forEach((post) => {
                const article = document.createElement("article");
                article.innerHTML = `
                    <h2>${post.title}</h2>
                    <p>${post.summary}</p>
                    <p><a href="${post.link}">Read more...</a></p>
                `;
                main.appendChild(article);
            });
        })
        .catch((error) => console.error("Error loading posts:", error));
});
