## Tailwind Setup with vite
- npm create vite@latest <projectname>
- select which framework(vanilla js,ts/ react/ next) you want to use in the project.
- To install tailwind - npm install -D tailwindcss postcss autoprefixer
- To create tailwind.config file - npx tailwindcss init

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html','./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
}

```

- In your main css file
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```
- also add tailwind css extension in vscode
npm run dev

- create postcss.config.js
```js
export default {
    plugins: {
        tailwindcss: {},
        autoprefixer: {},
    },
};

```

- Do cleaning accordingly and check if tailwind is working.
- for vanilla js projects its better to use tailwind CDN link.

- best way to learn is documentation - Ctrl + K(search)
- for advance tailwind - go through core concepts in documentation.
