<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Body Evolution

A modern, responsive website for Body Evolution fitness center built with Next.js 15, React 19, and Tailwind CSS.

View your app in AI Studio: https://ai.studio/apps/ab5adece-ef9c-403a-94e3-f1d43eca02a4

## Features

- 🏋️ Modern, responsive design for all devices
- 💪 Services showcase
- 👥 Trainers section
- 📋 Membership plans
- 📧 Contact form with EmailJS integration
- 🤖 AI-powered features with Gemini API

## Tech Stack

- **Framework:** Next.js 15.1.7
- **Library:** React 19.0.0
- **Styling:** Tailwind CSS 4.1.14
- **Icons:** Lucide React
- **Animations:** Motion
- **AI:** Google Generative AI (Gemini)
- **Email:** EmailJS

## Run Locally

**Prerequisites:** Node.js

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables:**
   
   Create a `.env.local` file in the root directory:
   ```bash
   cp .env.example .env.local
   ```
   
   Add your API keys:
   ```env
   # Gemini API Key (required for AI features)
   GEMINI_API_KEY="your_gemini_api_key"
   
   # EmailJS Configuration (required for contact form)
   NEXT_PUBLIC_EMAILJS_SERVICE_ID="your_service_id"
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID="your_template_id"
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY="your_public_key"
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:3000`

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server on port 3000 |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint for code quality |

## Project Structure

```
Body Evolution/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── contact/           # Contact page with EmailJS form
│   ├── membership/        # Membership plans
│   ├── services/          # Services showcase
│   ├── trainers/          # Trainers section
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable React components
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Logo.tsx
│   ├── Membership.tsx
│   ├── Navbar.tsx
│   ├── Services.tsx
│   └── Trainers.tsx
├── public/                # Static assets
├── .env.example           # Environment variables template
└── package.json           # Dependencies and scripts
```

## Contact Form Setup

The contact form uses EmailJS to send emails without a backend. To set it up:

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Add an email service (Gmail, Outlook, or SMTP)
3. Create an email template (see `data.md` for HTML template)
4. Get your Service ID, Template ID, and Public Key from EmailJS dashboard
5. Add them to your `.env.local` file

## Pages

- **Home** - Hero section and overview
- **About** - Company information
- **Services** - Fitness programs and offerings
- **Trainers** - Meet the coaching team
- **Membership** - Pricing and plans
- **Contact** - Contact form and location details

## License

MIT
