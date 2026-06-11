# Professional Portfolio Website

A modern, responsive portfolio website built with React and Tailwind CSS. Perfect for showcasing your skills, projects, and experience to potential employers.

## 🚀 Features

- **Modern Design**: Clean, professional layout with smooth animations
- **Dark/Light Mode**: Toggle between dark and light themes
- **Responsive**: Fully responsive design that works on all devices
- **Smooth Animations**: Framer Motion animations for enhanced user experience
- **Contact Form**: Functional contact form with validation
- **Project Showcase**: Beautiful project cards with GitHub and live demo links
- **Skills Visualization**: Animated skill progress bars
- **SEO Optimized**: Meta tags and proper structure for search engines

## 📋 Sections

1. **Hero Section**: Introduction with call-to-action buttons
2. **About**: Personal background, education, and goals
3. **Skills**: Technical skills with progress indicators
4. **Projects**: Portfolio of projects with descriptions and links
5. **Experience**: Professional experience and achievements
6. **Contact**: Contact form and social media links

## 🛠️ Technologies Used

- **React 18**: Modern React with hooks
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **React Icons**: Icon library
- **React Intersection Observer**: Scroll animations

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 🎨 Customization

### Personal Information

Update the following files with your information:

1. **Hero Section** (`src/components/Hero.js`):
   - Replace "Your Name" with your actual name
   - Update the description
   - Add your actual GitHub and LinkedIn URLs

2. **About Section** (`src/components/About.js`):
   - Update education details
   - Modify interests and goals
   - Add your personal background

3. **Skills Section** (`src/components/Skills.js`):
   - Update skill levels (0-100)
   - Add/remove skills as needed
   - Modify skill categories

4. **Projects Section** (`src/components/Projects.js`):
   - Replace placeholder projects with your actual projects
   - Update project images, descriptions, and links
   - Add your GitHub repository URLs

5. **Experience Section** (`src/components/Experience.js`):
   - Update internship/experience details
   - Add your actual company names and dates
   - Modify responsibilities and achievements

6. **Contact Section** (`src/components/Contact.js`):
   - Update email, phone, and location
   - Add your actual social media links

### Styling

The website uses Tailwind CSS for styling. You can customize:

- **Colors**: Update the color scheme in `tailwind.config.js`
- **Fonts**: Modify font families in the CSS
- **Animations**: Adjust animation timings in component files

### Adding Your Resume

1. Add your resume PDF to the `public` folder
2. Update the resume link in `src/components/Hero.js`

## 🚀 Deployment

### GitHub Pages

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to GitHub Pages**
   - Push your code to GitHub
   - Go to repository Settings > Pages
   - Select source as GitHub Actions
   - Create a workflow file for automatic deployment

### Netlify

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   - Drag and drop the `build` folder to Netlify
   - Or connect your GitHub repository for automatic deployment

### Vercel

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

## 📝 Available Scripts

- `npm start`: Runs the app in development mode
- `npm run build`: Builds the app for production
- `npm test`: Launches the test runner
- `npm run eject`: Ejects from Create React App

## 🎯 Key Features Explained

### Dark Mode Toggle
The website includes a dark/light mode toggle that persists user preference and automatically detects system preference.

### Smooth Scrolling
Navigation links smoothly scroll to sections using CSS scroll-behavior and JavaScript.

### Responsive Design
The website is fully responsive with breakpoints for mobile, tablet, and desktop.

### Animation System
Uses Framer Motion for smooth, performant animations that enhance user experience.

### Contact Form
Includes a functional contact form with validation and submission handling.

## 🔧 Configuration Files

- `package.json`: Dependencies and scripts
- `tailwind.config.js`: Tailwind CSS configuration
- `postcss.config.js`: PostCSS configuration
- `public/index.html`: Main HTML template

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Icons from [React Icons](https://react-icons.github.io/react-icons/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)
- Styling with [Tailwind CSS](https://tailwindcss.com/)

---

**Note**: Remember to replace all placeholder content (names, links, descriptions) with your actual information before deploying your portfolio. 