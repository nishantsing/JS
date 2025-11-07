const promisifySetTimeout = (delay) => {
    return new Promise((res, rej) => {
        console.log("Inside the promise") // runs instantly
        setTimeout(() => {
            console.log("Inside setTimeout") // runs after the delay
            res(console.log("Inside setTimeout res")) // runs after the delay
        }, delay)
    })
}


async function main() {
    await promisifySetTimeout(5000)
    console.log("prints after the setTimeout is over.") // runs after the delay
}

main()