# Setup Tailwind CSS, DaisyUI, and FontAwesome with React



### Installation Steps

## Step 1: Install Tailwind CSS

Run the following commands to install Tailwind CSS and its dependencies:

    npm install -D tailwindcss postcss autoprefixer
    npx tailwindcss init -p

## Step 2: Configure Tailwind CSS

After running the above commands, a `tailwind.config.js` file will be generated. Modify it as follows:

    /** @type {import('tailwindcss').Config} */
    export default {
      content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
      ],
      theme: {
        extend: {},
      },
      plugins: [],
    }

## Step 3: Add Tailwind Directives

In your `index.css` file, add the following Tailwind CSS directives:

    @tailwind base;
    @tailwind components;
    @tailwind utilities;

## Step 4: Start the Development Server

Run the following command to start the development server:

    npm run dev

## Step 5: Test Your Setup

To verify the setup, apply the following JSX in your React component:

    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>

---

### DaisyUI Setup

## Step 6: Install DaisyUI

    npm i -D daisyui@latest

## Step 7: Add DaisyUI to `tailwind.config.js`

    module.exports = {
      //...
      plugins: [
        require('daisyui'),
      ],
    }

## Step 8: Install react-daisyUI

    npm i react-daisyui

## Step 9: Prevent Tailwind CSS Purging

To prevent Tailwind CSS from purging DaisyUI styles, modify the `content` section in `tailwind.config.js`:

    module.exports = {
      content: [
        'node_modules/daisyui/dist/**/*.js',
        'node_modules/react-daisyui/dist/**/*.js',
      ],
      plugins: [require('daisyui')],
    }

---

### FontAwesome Setup

## Step 10: Install FontAwesome

Install the FontAwesome core package and the icons you’ll use:

    npm i --save @fortawesome/fontawesome-svg-core
    npm install --save @fortawesome/free-solid-svg-icons
    npm install --save @fortawesome/react-fontawesome

## Step 11: Import and Use FontAwesome Icons

To use a FontAwesome icon, import the component and icon:

    import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
    import { faCoffee } from '@fortawesome/free-solid-svg-icons'

    const element = <FontAwesomeIcon icon={faCoffee} />

# ptsb-jul-2024_styling_reactdaisy_learner
# ptsb-jul-2024_styling_reactdaisy_learner
