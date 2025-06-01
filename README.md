<<<<<<< HEAD
# Abhi Dankhara - SiteQuick Personal Website

This repository contains the source code for the SiteQuick Personal website, created by Abhi Dankhara.
SiteQuick Personal helps users create professional websites and mobile apps quickly and affordably.

## Project Overview

This is a Next.js application built with:
- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS
- ShadCN UI Components
- Genkit (for AI Chatbot functionality)

## Features
- Responsive design for web and mobile.
- Sections for Hero, Services, Pricing, and Contact Information.
- AI-powered chatbot assistant.
- Contact information display (previously a contact form with email notification capabilities).

## Getting Started

### Prerequisites
- Node.js (version 20 or later recommended)
- npm

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/abhi1234059/abhi.dankhara_website.git
   cd abhi.dankhara_website
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

### Running the Development Server
To start the development server:
```bash
npm run dev
```
Open [http://localhost:9002](http://localhost:9002) (or the port specified in your `package.json`) with your browser to see the result.

### Building for Production
To build the application for production:
```bash
npm run build
```

### Starting the Production Server
To start the production server:
```bash
npm run start
```

## AI Functionality (Genkit)
The AI chatbot assistant uses Genkit. To run the Genkit development server (optional, for debugging AI flows):
```bash
npm run genkit:dev
```

## Environment Variables
If you re-enable features like email notifications for a contact form in the future, create a `.env` file in the root of the project and add the necessary variables:
```env
GMAIL_EMAIL=your_gmail_address@gmail.com
GMAIL_APP_PASSWORD=your_gmail_app_password
# Add other Genkit/Google AI related API keys if needed, e.g., GOOGLE_API_KEY
```
Refer to `src/app/actions.ts` for details on email configuration (if re-enabled) and how to generate Google Account App Passwords for `GMAIL_APP_PASSWORD`.

## Learn More
- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://reactjs.org/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [ShadCN UI](https://ui.shadcn.com/)
- [Genkit Documentation](https://firebase.google.com/docs/genkit)

## Deployment
This app can be deployed to various platforms that support Next.js, such as Firebase App Hosting, Vercel, Netlify, etc. Refer to `apphosting.yaml` for Firebase App Hosting configuration examples.
=======
# abhi_master
>>>>>>> ba4a975b61df7e3cf95c6756ad74d7bdc1085297
