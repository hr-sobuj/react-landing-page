# React Landing Page

![Project Version](https://img.shields.io/badge/version-1.0.0-blue.svg)

A stunning and responsive landing page built using React.js.

![Screenshot](/screenshots/screenshot.jpeg)

## Table of Contents

- [About](#about)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Styling](#styling)
- [Usage](#usage)
- [Testing](#testing)
- [Deployment](#deployment)

## About

This project is a simple yet attractive landing page created using React. It includes various sections such as a hero section, about us, services, testimonials, portfolio and a blog. Smooth scrolling between sections is achieved using the `react-scroll` library.

## Getting Started

To get started with this project, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/hr-sobuj/react-landing-page
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

The app will run in development mode at [http://localhost:3000](http://localhost:3000).

## Project Structure

The project structure is organized as follows:

- `src/` contains the main source code.
  - `assets/` holds static assets such as images.
  - `components/` includes reusable React components.
  - `container/` contains container components for various sections.
  - `pages/` holds the pages or main sections of the landing page.
  - `styles/` houses styling files for components and pages.

## Styling

This project uses CSS Modules for styling. CSS Modules provide local scope for CSS, making it easier to manage and style React components without worrying about global style conflicts. You can find the CSS Modules in the `styles/` directory.

To apply styles to a React component, import the CSS module at the top of your component file and use the styles as you normally would. For example:

```jsx
import React from "react";
import styles from "./styles/MyComponent.module.css";

const MyComponent = () => {
  return (
    <div className={styles.container}>
      <p className={styles.text}>Styled with CSS Modules</p>
    </div>
  );
};

export default MyComponent;
```

## Usage

- `react-icons` is used to include icons throughout the landing page. You can easily add icons to your components. For example:

```jsx
import { FaHeart } from "react-icons/fa";

const MyComponent = () => {
  return (
    <div>
      <FaHeart /> I love React!
    </div>
  );
};
```

- `react-scroll` is used to enable smooth scrolling between sections. Check the components where you want to implement smooth scrolling and follow the documentation for `react-scroll`.

-`aos` Small library to animate elements on your page as you scroll.

## Testing

We've included tests for some components using `@testing-library/react`. You can run the tests with the following command:

```bash
npm test
```

Feel free to add more tests as your project grows.

## Deployment

To deploy your landing page, follow these steps:

1. Create a production build:

```bash
npm run build
```

2. You will find the optimized build files in the `build/` directory.

3. Deploy the contents of the `build/` directory to your hosting platform of choice. For example, using Netlify, Vercel, or GitHub Pages.
