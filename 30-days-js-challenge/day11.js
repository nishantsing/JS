// Day 11: Promises and Async/ Await

// Activity 1: Understanding Promises

// Create a promise that reolves with a message after a 2s timeout and log the message to console.

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("This is the resolved message after 2 seconds");
    }, 2000);
});

myPromise.then((message) => {
    console.log(message);
});

// Create a promise that rejects with an error message after a 2s timeout and handle the error using .catch()

const myPromiseCatch = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("This is the error message after 2 seconds");
    }, 2000);
});

myPromiseCatch
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.error("Caught an error:", error);
    });

// M2.
// function createPromise(shouldResolve) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (shouldResolve) {
//                 resolve("The promise was resolved after 2 seconds");
//             } else {
//                 reject("The promise was rejected after 2 seconds");
//             }
//         }, 2000);
//     });
// }

// createPromise(false)
//     .then((message) => {
//         console.log(message);
//     })
//     .catch((error) => {
//         console.error(error);
//     });

// Activity 2. Chaining Promises

// Create a sequence of promises that simulate fetching data from a server. Chain the promises to log messages in a specific order.

// Function to simulate fetching user data
function fetchUserData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Fetched user data");
            resolve({ userId: 1, username: "JohnDoe" });
        }, 3000);
    });
}

// Function to simulate fetching user's posts
function fetchUserPosts(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Fetched posts for user ${userId}`);
            resolve([
                { postId: 1, title: "Post 1" },
                { postId: 2, title: "Post 2" },
            ]);
        }, 2000);
    });
}

// Function to simulate fetching comments for a post
function fetchPostComments(postId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Fetched comments for post ${postId}`);
            resolve(["Comment 1", "Comment 2"]);
        }, 2000);
    });
}

// Chain the promises
fetchUserData()
    .then((userData) => {
        return fetchUserPosts(userData.userId);
    })
    .then((posts) => {
        return fetchPostComments(posts[0].postId);
    })
    .then((comments) => {
        console.log("Fetched all data");
    })
    .catch((error) => {
        console.error("Error:", error);
    });

// Activity 3. Using Async/Await

// write an async fn that waits for a promise to resolve then logs the resolved value.
const myPromise2 = (isResolve) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isResolve) {
                resolve("This is promise2 resolved");
            } else {
                reject("This is promise2 error");
            }
        }, 2000);
    });
};
const res = async (isResolve) => {
    try {
        const response = await myPromise2(isResolve);
        console.log(response);
    } catch (e) {
        console.log(e);
    }
};
res(true);
res(false);

// Activity 4. Fething Data from an API

// Use the fetch API to get data from a public API and log the response data to console using promises.
fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((json) => console.log(json));

// Use the fetch API to get data from a public API and log the response data to console using async/await.

const fetchData = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
};

fetchData("https://jsonplaceholder.typicode.com/posts/1");

// Activity 5. Concurrent Promises

// Use Promise.all to wait for multiple promises to resolve and then log all their values.

function fetchData1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data 1");
        }, 500);
    });
}
function fetchData2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data 2");
        }, 1000);
    });
}
function fetchData3() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data 3");
        }, 1500);
    });
}

Promise.all([fetchData1(), fetchData2(), fetchData3()])
    .then((values) => {
        console.log("All promises resolved:", values);
    })
    .catch((error) => {
        console.error("Error:", error);
    });

// Use Promise.race to log the value of the first promise that resolves among multiple promises.
Promise.race([fetchData1(), fetchData2(), fetchData3()])
    .then((values) => {
        console.log("First promise resolved: ", values);
    })
    .catch((error) => {
        console.error("Error:", error);
    });

// Feature 1. Write a script that demonstrates creating and handling promises, including both resolved and rejected states.

// see Activity 1

// Feature 2. Create a script that chains multiple promises and logs message in a specific sequence.

// see Activity 2

// Feature 3. Write a script that uses async/ await to handle promises and includes error handling with try-catch.

// see Activity 3

// Feature 4. Create a script that fetches data from a public API using both promises and async/await, and logs the response data.

// see Activity 4

// Feature 5. Write a script that uses Promise.all and Promise.race to handle multiple promises concurrently and logs the results.

// see Activity 5
