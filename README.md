<div align="center">
  <div>
    <img src="https://img.shields.io/badge/-Next.JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=black" alt="next.js" />
    <img src="https://img.shields.io/badge/-Vapi-white?style=for-the-badge&color=5dfeca" alt="vapi" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
    <img src="https://img.shields.io/badge/-Firebase-black?style=for-the-badge&logoColor=white&logo=firebase&color=DD2C00" alt="firebase" />
  </div>

  # AuraHire: A Job Interview Preparation Platform 🎙️🤖

AuraHire revolutionizes interview preparation by providing **AI-powered mock interviews** with **real-time voice interaction** and **instant feedback**. Practice your interview skills with intelligent voice agents that simulate real hiring scenarios.

---

## ⚙️ Tech Stack

* **Next.js** – React framework for production
* **Firebase** – Authentication and database
* **Tailwind CSS** – Utility-first CSS framework
* **Vapi AI** – Voice AI technology for natural conversations
* **shadcn/ui** – Modern UI component library
* **Google Gemini** – Advanced AI for feedback generation
* **Zod** – TypeScript-first schema validation

---

## 🔋 Features

👉 **Authentication** – Sign Up and Sign In using password/email authentication handled by Firebase.
👉 **Create Interviews** – Generate job interviews with Vapi AI voice assistants and Google Gemini.
👉 **AI Feedback** – Take interviews with an AI voice agent and receive instant feedback.
👉 **Modern UI/UX** – Sleek and user-friendly interface.
👉 **Interview Page** – Conduct AI-driven interviews with transcripts and detailed feedback.
👉 **Dashboard** – Manage and track all your interviews.
👉 **Responsiveness** – Fully responsive design across devices.
👉 **Clean Code** – Reusable components and scalable architecture.
👉 **Analytics** – Track performance and progress.
👉 **Custom Scenarios** – Create tailored interview experiences.
👉 **Cross-Device Sync** – Access interviews from any device.

---

## 🤸 Quick Start

### Prerequisites

* Git
* Node.js
* npm (Node Package Manager)

### Clone Repository

```bash
git clone https://github.com/your-username/aurahire.git
cd aurahire
```

### Install Dependencies

```bash
npm install
```

### Environment Variables

Create `.env.local` in the project root:

```env
# Vapi AI
NEXT_PUBLIC_VAPI_WEB_TOKEN=your_vapi_web_token_here
NEXT_PUBLIC_VAPI_WORKFLOW_ID=your_vapi_workflow_id_here

# Google Gemini
GOOGLE_GENERATIVE_AI_API_KEY=your_google_ai_api_key_here

# Firebase Client
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_firebase_app_id

# Firebase Admin
FIREBASE_PROJECT_ID=your_project_id
FIREBASE_CLIENT_EMAIL=your_service_account_email
FIREBASE_PRIVATE_KEY="your_private_key_here"

# App URL
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

### Run the App

```bash
npm run dev
```

Visit: [http://localhost:3000](http://localhost:3000)

---

## 📁 Project Structure

```
aurahire/
├── app/             # Next.js app directory
│   ├── (auth)/      # Authentication pages
│   ├── (root)/      # Protected pages
│   └── globals.css  # Global styles
├── components/      # Reusable components
│   ├── ui/          # shadcn/ui components
│   └── forms/       # Form components
├── lib/             # Utility functions
│   ├── actions/     # Server actions
│   └── utils/       # Helper functions
├── firebase/        # Firebase configuration
│   ├── client.ts    # Client-side config
│   └── admin.ts     # Admin SDK config
└── types/           # TypeScript types
```

---

## 🚀 Deployment

* Deploy with **Vercel**
* Add environment variables in dashboard
* Update base URL in `.env.local`:

```env
NEXT_PUBLIC_BASE_URL=https://your-domain.vercel.app
```

---

## 🤝 Contributing

1. Fork the repo
2. Create a branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

MIT License – See LICENSE file for details.

---

## 🙋‍♂️ Support

If you have questions, please open an issue or contact the maintainers.

---

Built with ❤️ using **Next.js**, **Vapi AI**, and **Google Gemini**.

---

📌 **[Copy](#) | [Edit](#) | [Download](#)**
