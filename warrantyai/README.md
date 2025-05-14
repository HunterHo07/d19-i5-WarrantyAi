# WarrantyAI - Smart Warranty Management

WarrantyAI is a modern web application that helps users track, manage, and get reminders for product warranties. It uses advanced AI to extract warranty information from receipts and documents, providing a centralized dashboard for all your warranty needs.

## Features

- **AI-Powered Extraction**: Automatically extract warranty information from receipts, invoices, and warranty documents
- **Unified Dashboard**: View all your warranties in one place with a visual timeline
- **Smart Notifications**: Receive timely alerts before warranties expire
- **Claim Assistant**: Step-by-step guidance through the warranty claim process
- **Secure Storage**: All your warranty documents securely stored in the cloud

## Tech Stack

- **Frontend**: React 18, React Router, Framer Motion, GSAP, Three.js
- **Styling**: Tailwind CSS
- **Animation**: Lottie for complex animations
- **Build Tool**: Vite

## Pages

1. **Home**: Landing page with key features and benefits
2. **Demo**: Interactive demonstration of the application
3. **Pitch Deck**: Presentation of the business model and vision
4. **Why Us**: Comparison with competitors and unique selling points
5. **Landing**: Marketing page with pricing and call-to-action
6. **Showcase**: Detailed feature showcase with interactive examples
7. **Roadmap**: Future development plans and milestones

## Getting Started

### Prerequisites

- Node.js 16+ and npm

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/HunterHo07/warrantyai.git
   cd warrantyai
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start the development server
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Build for Production

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

To preview the production build:

```bash
npm run preview
```

## Project Structure

```
warrantyai/
├── public/                 # Static assets
│   ├── assets/
│   │   ├── images/         # Images and icons
│   │   └── animations/     # Lottie animation files
│   └── favicon.svg         # Site favicon
├── src/
│   ├── components/         # Reusable components
│   │   ├── animations/     # Animation components
│   │   ├── common/         # Common UI components
│   │   └── layout/         # Layout components
│   ├── data/               # Mock data for demo
│   ├── pages/              # Page components
│   │   ├── HomePage/
│   │   ├── DemoPage/
│   │   ├── PitchDeckPage/
│   │   ├── WhyUsPage/
│   │   ├── LandingPage/
│   │   ├── ShowcasePage/
│   │   └── RoadmapPage/
│   ├── styles/             # Global styles
│   ├── App.jsx             # Main app component
│   └── main.jsx            # Entry point
├── .gitignore
├── index.html
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
└── vite.config.js
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Icons and illustrations from various sources
- Dummy data generated for demonstration purposes

---

Created by [HunterHo07](https://github.com/HunterHo07)
