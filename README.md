# Rivah Somerville — Portfolio

This repository contains the source for my personal portfolio website. It is a responsive, multi-page React site that displays information about me and my work as a digital portfolio.

## Tech

- Built with React
- Routing with `react-router-dom`
- Contact form built with `react-hook-form`
- Material UI icons for visual elements

## Quick demo / run locally

Live demo: [rivahsomerville.com](https://rivahsomerville.com)

To run quickly on your machine:

1. Clone the repo and install dependencies

```bash
git clone https://github.com/rivahps/portfolio.git
cd portfolio
npm install
```

1. Start the development server and open [http://localhost:3000](http://localhost:3000)

```bash
npm start
```

The site will open in your browser.

### Set EmailJS environment variables (local/testing)

Create a `.env` file at the project root (this file is ignored by git). Add:

```env
REACT_APP_EMAILJS_SERVICE_ID=your_service_id_here
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id_here
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key_here
```

Restart the dev server after adding env vars. The contact form will not send if these variables are not set.

## Copyright / License

Code: MIT — see `LICENSE` file.

Content (text & images): All rights reserved — content and images in this repository are owned by Rivah Somerville.
