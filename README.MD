# Sergio Iván Chávez Hernández - Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean, professional layout with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Fast Performance**: Optimized with Next.js static export
- **SEO Optimized**: Proper meta tags and structured data
- **Accessible**: Built with accessibility best practices

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: GitHub Pages
- **CI/CD**: GitHub Actions

## 📦 Getting Started

### Prerequisites

- Node.js 18+ 
- Yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/chekoivan/chekoivan.github.io.git
cd chekoivan.github.io
```

2. Install dependencies:
```bash
yarn install
```

3. Run the development server:
```bash
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🚀 Deployment

This project is automatically deployed to GitHub Pages using GitHub Actions. Every push to the `main` branch triggers a deployment.

### Manual Deployment

1. Build the project:
```bash
yarn build
```

2. The static files will be generated in the `out/` directory.

## 📁 Project Structure

```
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── About.tsx          # About section
│   ├── Contact.tsx        # Contact form
│   ├── Footer.tsx         # Footer component
│   ├── Hero.tsx           # Hero section
│   ├── Navigation.tsx     # Navigation bar
│   ├── Projects.tsx       # Projects showcase
│   └── Skills.tsx         # Skills section
├── .github/
│   └── workflows/
│       └── deploy.yml     # GitHub Actions workflow
├── public/                # Static assets
├── next.config.js         # Next.js configuration
├── tailwind.config.js     # Tailwind CSS configuration
└── package.json           # Dependencies and scripts
```

## 🎨 Customization

### Colors
The color scheme can be customized in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Your custom color palette
      }
    }
  }
}
```

### Content
Update the content in the respective component files:
- Personal information: `components/About.tsx`
- Skills: `components/Skills.tsx`
- Projects: `components/Projects.tsx`
- Contact information: `components/Contact.tsx`

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/chekoivan/chekoivan.github.io/issues).

## 📞 Contact

Sergio Iván Chávez Hernández

- Email: sergio@chekoivan.dev
- GitHub: [@chekoivan](https://github.com/chekoivan)
- LinkedIn: [chekoivan](https://linkedin.com/in/chekoivan)
