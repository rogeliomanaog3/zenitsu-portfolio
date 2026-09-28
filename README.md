# Modern Developer Portfolio • Zenitsu Thunder Aesthetic ⚡

A high-performance, minimalist personal portfolio for developers and computer science students, inspired by the layout and motion dynamics of the reference video, elevated with a subtle **Demon Slayer Zenitsu (Thunder Breathing 壱ノ型)** design language.

---

## ✨ Features

- **Floating Glassmorphic Island Navbar**: Pinned to top viewport, with active ScrollSpy tracking, light/dark mode switch, mobile menu drawer, and direct links to GitHub and LinkedIn.
- **Hero Section**: Dynamic typewriter cycling through your specializations, greeting, prominent call-to-actions, and an elegant backlit silhouette vector with soft golden aura and katana diagonal slice.
- **Marquee Section Divider**: Infinite kinetic typography ticker bridging the personal narrative to your career journey.
- **About Me Section**: Modular bento-style layout with glowing portrait placeholder, biography, academic credentials, and career aspirations.
- **Interactive Experience Timeline**: Modern timeline with a central golden lightning axis, interactive scrubber node, and technology tags for every milestone.
- **Skills & Technologies Grid**: Categorized into Frontend, Backend, Database, and Tools, featuring animated squircle tiles with golden hover glow.
- **Featured Project Showcase**: High-impact card with browser chrome header, screenshot placeholder, problem-solution breakdown, capabilities, and an interactive **Case Study Deep-Dive Modal**.
- **Selected Works Grid**: 3-column project cards with live demo links, repository buttons, and lightning hover micro-interactions.
- **Direct Contact Channel**: Contact cards for email, phone, location, social media links, and a functional contact form with an electric hover animation on the submit button.
- **Signature Feature — Floating AI Assistant Drawer**: Fixed in the bottom-right corner, allowing recruiters and visitors to interact with a responsive AI assistant pre-configured with answers about your skills, projects, and availability.
- **Ambient Lightning Particles**: Lightweight, performance-optimized golden embers and cursor spark effects.

---

## 🛠️ How to Customize Your Personal Information

All your personal details, credentials, and projects are centralized in a single file:

```
src/data/portfolioData.js
```

Simply open [portfolioData.js](src/data/portfolioData.js) and replace the placeholders:

| Placeholder | Where it appears |
| :--- | :--- |
| `[YOUR NAME]` | Hero, Navbar, Footer, About, Metadata |
| `[YOUR ROLE / COURSE / SPECIALIZATION]` | Hero subtitle & typewriter cycling |
| `[YOUR BIO]` | About narrative |
| `[YOUR COURSE]` | Education badges |
| `[YOUR SCHOOL]` | University / Institution |
| `[YOUR LOCATION]` | Location info card & contact |
| `[YOUR CAREER GOAL]` | Career aspiration banner |
| `[YOUR EMAIL]` | Direct email buttons & form |
| `[YOUR PHONE]` | Phone / WhatsApp channel |
| `[YOUR GITHUB]` / `[YOUR LINKEDIN]` | Social links & icons |
| `[PROJECT NAME]` & `[DESCRIPTION]` | Project showcase cards |

---

## 🚀 Running the Project

From the project root:

```bash
# 1. Install dependencies (already installed)
npm install

# 2. Start local development server
npm run dev

# 3. Build for production deployment (Vercel, Netlify, GitHub Pages)
npm run build
```

Development server runs at: `http://localhost:5173/`
