# Meage Sionosa - Personal Portfolio

Welcome to my personal portfolio website! This is a modern, responsive React application showcasing my skills, projects, and journey as a BSCS student at West Visayas State University.

## 🚀 Live Demo

Visit the live portfolio: meage-portfolio.vercel.app

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Components](#components)
- [Customization](#customization)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [Contact](#contact)

## 🎯 Overview

This portfolio website serves as a digital representation of my skills, experiences, and projects. It features a modern design with smooth animations, responsive layout, and an engaging user experience. The site showcases my journey as a Computer Science student with interests in web development, photography, and video editing.

## ✨ Features

### 🎨 Design & User Experience
- **Responsive Design**: Optimized for all devices (desktop, tablet, mobile)
- **Modern UI/UX**: Clean, professional design with premium aesthetics
- **Smooth Animations**: Scroll-triggered animations and micro-interactions
- **Dark Theme**: Elegant dark color scheme with green accents
- **Glassmorphism Effects**: Modern translucent design elements

### 🔧 Functionality
- **Interactive Hero Section**: Animated role switching and pulsating profile image
- **Dynamic Project Showcase**: Card-based project display with hover effects
- **Skills Visualization**: Organized skill categories with icons
- **Contact Integration**: Direct contact form and social links
- **Scroll Animations**: Elements fade in/out based on viewport visibility

### 📱 Performance
- **Optimized Loading**: Fast loading times with React optimization
- **Smooth Scrolling**: Buttery smooth navigation between sections
- **Mobile-First**: Designed with mobile users in mind
- **Cross-Browser**: Compatible with all modern browsers

## 🛠️ Tech Stack

### Frontend
- **React 19.1.1** - Modern JavaScript framework
- **React Icons 5.5.0** - Comprehensive icon library
- **CSS3** - Custom animations and responsive design
- **HTML5** - Semantic markup

### Development Tools
- **React Scripts 5.0.1** - Build and development tools
- **ESLint** - Code linting and quality assurance
- **Web Vitals** - Performance monitoring

### Design System
- **Inter & Poppins Fonts** - Modern, readable typography
- **Custom CSS Variables** - Consistent color scheme
- **Responsive Grid System** - Flexible layouts
- **CSS Animations** - Smooth transitions and effects

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/meagenotmage/Portfolio.git
   cd Portfolio
   ```

2. **Navigate to the project directory**
   ```bash
   cd portfolio
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Start the development server**
   ```bash
   npm start
   ```

5. **Open your browser**
   ```
   http://localhost:3000
   ```

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (irreversible)

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── favicon.ico
│   ├── index.html
│   ├── logo.png
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── About.js & About.css
│   │   ├── Contact.js & Contact.css
│   │   ├── Footer.js & Footer.css
│   │   ├── Hero.js & Hero.css
│   │   ├── Navbar.js & Navbar.css
│   │   ├── Projects.js & Projects.css
│   │   └── Skills.js & Skills.css
│   ├── hooks/
│   │   └── useScrollAnimation.js
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## 🧩 Components

### Hero Section
- **Dynamic Role Display**: Cycles through different roles/titles
- **Animated Profile Image**: Pulsating effect with fallback icon
- **Call-to-Action Buttons**: Direct navigation to projects and contact
- **Floating Background Elements**: Animated decorative shapes

### About Section
- **Personal Introduction**: Engaging biography and personality traits
- **Fun Facts**: Interactive statistics and personal details
- **Unique Traits**: What makes me stand out as a developer

### Skills Section
- **Categorized Skills**: Organized by Frontend, Backend, Tools, and Soft Skills
- **Icon Representation**: Visual icons for each technology
- **Responsive Grid**: Adaptive layout for all screen sizes

### Projects Section
- **Project Cards**: Detailed project showcases with images
- **Technology Tags**: Tech stack used in each project
- **Interactive Elements**: Hover effects and smooth transitions

### Contact Section
- **Multiple Contact Methods**: Email, phone, and social media
- **Status Indicator**: Real-time availability status
- **Social Links**: Direct links to professional profiles

## 🎨 Customization

### Colors
Update CSS variables in `src/App.css`:
```css
:root {
  --primary-green: #4CAF50;
  --light-green: #66BB6A;
  --dark-bg: #121212;
  --card-bg: #1e1e1e;
}
```

### Content
- **Personal Information**: Update in respective component files
- **Projects**: Modify `src/components/Projects.js`
- **Skills**: Update `src/components/Skills.js`
- **Images**: Replace in `public/` directory

### Animations
- **Scroll Animations**: Customize in `src/hooks/useScrollAnimation.js`
- **CSS Animations**: Modify keyframes in component CSS files

## 🚀 Deployment

### Netlify (Recommended)
1. Build the project: `npm run build`
2. Deploy the `build` folder to Netlify
3. Configure custom domain (optional)

### Vercel
1. Connect your GitHub repository
2. Configure build settings
3. Deploy automatically on push

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add deploy scripts to package.json
3. Run: `npm run deploy`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Contact

**Meage Sionosa**
- 📧 Email: [your.email@example.com]
- 🌐 LinkedIn: [your-linkedin-profile]
- 🐙 GitHub: [meagenotmage](https://github.com/meagenotmage)
- 📱 Portfolio: [your-portfolio-url]

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **React Team** - For the amazing framework
- **FontAwesome** - For the beautiful icons
- **Google Fonts** - For the typography
- **Open Source Community** - For inspiration and resources

---

⭐ **If you found this portfolio helpful, please consider giving it a star!**

*Built with ❤️ by Meage Sionosa*
