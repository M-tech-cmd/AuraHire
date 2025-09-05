<div align="center">
  <div>
    <img src="https://img.shields.io/badge/-Next.JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=black" alt="next.js" />
    <img src="https://img.shields.io/badge/-Vapi-white?style=for-the-badge&color=5dfeca" alt="vapi" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
    <img src="https://img.shields.io/badge/-Firebase-black?style=for-the-badge&logoColor=white&logo=firebase&color=DD2C00" alt="firebase" />
  </div>

  <h3 align="center">AuraHire: A job interview preparation platform powered by Vapi AI Voice agents</h3>
  
# AuraHire

**A job interview preparation platform powered by Vapi AI Voice agents**

AuraHire revolutionizes interview preparation by providing AI-powered mock interviews with real-time voice interaction and instant feedback. Practice your interview skills with intelligent voice agents that simulate real hiring scenarios.

## ⚙️ Tech Stack

- **Next.js** - React framework for production
- **Firebase** - Authentication and database
- **Tailwind CSS** - Utility-first CSS framework
- **Vapi AI** - Voice AI technology for natural conversations
- **shadcn/ui** - Modern UI component library
- **Google Gemini** - Advanced AI for feedback generation
- **Zod** - TypeScript-first schema validation

## 🔋 Features

👉 **Authentication**: Sign Up and Sign In using password/email authentication handled by Firebase.

👉 **Create Interviews**: Easily generate job interviews with help of Vapi voice assistants and Google Gemini.

👉 **Get feedback from AI**: Take the interview with AI voice agent, and receive instant feedback based on your conversation.

👉 **Modern UI/UX**: A sleek and user-friendly interface designed for a great experience.

👉 **Interview Page**: Conduct AI-driven interviews with real-time feedback and detailed transcripts.

👉 **Dashboard**: Manage and track all your interviews with easy navigation.

👉 **Responsiveness**: Fully responsive design that works seamlessly across devices.

And many more features including:
- Clean code architecture and reusability
- Real-time voice interaction
- Interview performance analytics
- Custom interview scenarios
- Progress tracking
- Cross-device synchronization

## 🤸 Quick Start

Follow these steps to set up the project locally on your machine.

### Prerequisites

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

### Cloning the Repository

```bash
git clone https://github.com/your-username/aurahire.git
cd aurahire
```

### Installation

Install the project dependencies using npm:

```bash
npm install
```

### Set Up Environment Variables

Create a new file named `.env.local` in the root of your project and add the following content:

```env
# Vapi AI Configuration
NEXT_PUBLIC_VAPI_WEB_TOKEN=your_vapi_web_token_here
NEXT_PUBLIC_VAPI_WORKFLOW_ID=your_vapi_workflow_id_here

# Google Gemini API
GOOGLE_GENERATIVE_AI_API_KEY=your_google_ai_api_key_here

# Application URL
NEXT_PUBLIC_BASE_URL=http://localhost:3000

# Firebase Client Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_firebase_app_id

# Firebase Admin Configuration
FIREBASE_PROJECT_ID=your_project_id
FIREBASE_CLIENT_EMAIL=your_service_account_email
FIREBASE_PRIVATE_KEY="your_private_key_here"
```

### Getting API Keys

#### Firebase Setup
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project or select existing one
3. Enable Authentication with Email/Password
4. Create Firestore database
5. Generate service account key for admin SDK
6. Copy configuration values to `.env.local`

#### Vapi AI Setup
1. Sign up at [Vapi AI](https://vapi.ai/)
2. Create a new voice agent workflow
3. Copy your web token and workflow ID

#### Google Gemini Setup
1. Go to [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Create an API key for Gemini
3. Add the key to your environment variables

### Running the Project

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## 📁 Project Structure

```
aurahire/
├── app/                    # Next.js app directory
│   ├── (auth)/            # Authentication pages
│   ├── (root)/            # Protected pages
│   └── globals.css        # Global styles
├── components/            # Reusable components
│   ├── ui/               # shadcn/ui components
│   └── forms/            # Form components
├── lib/                   # Utility functions
│   ├── actions/          # Server actions
│   └── utils/            # Helper functions
├── firebase/             # Firebase configuration
│   ├── client.ts         # Client-side config
│   └── admin.ts          # Admin SDK config
└── types/               # TypeScript type definitions
```

## 🚀 Deployment

### Deploy on Vercel

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy your application

### Environment Variables for Production

Make sure to update `NEXT_PUBLIC_BASE_URL` to your production URL:

```env
NEXT_PUBLIC_BASE_URL=https://your-domain.vercel.app
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙋‍♂️ Support

If you have any questions or need help, please open an issue or contact the maintainers.

---

**Built with ❤️ using Next.js and Vapi AI**
