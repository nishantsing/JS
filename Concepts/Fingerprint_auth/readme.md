## Fingerprint Auth in JS

- [How To Setup Fingerprint Auth In JavaScript - WDS](https://youtu.be/viZs1iVsLpA)

#### Pass key

- fingerprint sensor will create pass key
- creating pass key for client side without any external library 

```js
// In signup
const rawId
const publicKey = {
  challenge: challengeFromServer,
  rp: { id: "acme.com", name: "ACME Corporation" }, // url of website
  user: { // user for whom pass key is getting created
    id: new Uint8Array([79, 252, 83, 72, 214, 7, 89, 26]),
    name: "jamiedoe",
    displayName: "Jamie Doe",
  },
  pubKeyCredParams: [{ type: "public-key", alg: -7 }],
};


const publicKeyCredential = await navigator.credentials.create({ publicKey });
rawId= publicKeyCredential.rawId

// In login
const publicKey = {
  challenge: new Uint8Array([139, 66, 181, 87, 7, 203, ...]),
  rpId: "acme.com", // comment it
  allowCredentials: [{
    type: {"public-key", id: rawId},
    id: new Uint8Array([64, 66, 25, 78, 168, 226, 174, ...])
  }],
  userVerification: "required",
}

navigator.credentials.get({ publicKey })
```

- creating pass key for client side with an external library 
- using npm i @simplewebauthn/browser

```js
//signup
// 1. get challenge from server
// 2. Create passkey 
// 3. Save passkey in DB


//login

```

- creating registration and storing the pass key to db in server
- using npm i @simplewebauthn/server

```js


```
