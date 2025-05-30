# VideoVault Downloader

VideoVault Downloader is a professional, responsive website for downloading videos by pasting a URL. Built with HTML, CSS, and JavaScript, it features a modern dark theme, SEO-optimized content, lazy loading, animations, and a consistent design.

## Features
- **Responsive Design**: Optimized for desktops, tablets, and mobiles.
- **SEO-Optimized**: Meta tags, Open Graph tags, and keyword-rich content for search engine ranking.
- **Lazy Loading**: Images load only when visible to improve performance.
- **Animations**: Smooth fade-in and hover effects for enhanced UX.
- **Sections**: Header, Navbar, Hero, About Us, How to Use, Features, Services, Reviews, Plans, Subscription, Trusted Companies, Contact, Footer.
- **Simulated Download**: Client-side simulation with a progress bar for demo purposes.

## Project Structure
```
VideoVault-Downloader/
├── index.html          # Main HTML file
├── css/
│   └── styles.css      # CSS styles
├── js/
│   └── script.js       # JavaScript for interactivity
├── images/
│   ├── favicon.png     # Favicon (16x16px or 32x32px)
│   ├── logo.png        # Website logo (150x50px)
│   ├── hero-bg.jpg     # Hero background (1920x1080px)
│   ├── step1.png       # Step 1 icon (100x100px)
│   ├── step2.png       # Step 2 icon (100x100px)
│   ├── step3.png       # Step 3 icon (100x100px)
│   ├── feature1.png    # Feature 1 icon (100x100px)
│   ├── feature2.png    # Feature 2 icon (100x100px)
│   ├── feature3.png    # Feature 3 icon (100x100px)
│   ├── company1.png    # Company 1 logo (150x50px)
│   ├── company2.png    # Company 2 logo (150x50px)
│   ├── company3.png    # Company 3 logo (150x50px)
│   ├── company4.png    # Company 4 logo (150x50px)
│   ├── company5.png    # Company 5 logo (150x50px)
│   ├── company6.png    # Company 6 logo (150x50px)
└── README.md           # Project documentation
```

## Image Requirements
- **Favicon**: `favicon.png` (16x16px or 32x32px, 1:1 ratio). Source: [Favicon.io](https://favicon.io/) or [Flaticon](https://www.flaticon.com/).
- **Logo**: `logo.png` (150x50px, 3:1 ratio). Source: [Canva](https://www.canva.com/create/logos/) or [Hatchful](https://www.shopify.com/tools/logo-maker).
- **Hero Background**: `hero-bg.jpg` (1920x1080px, 16:9 ratio). Source: [Pexels](https://www.pexels.com/search/technology/) or [Unsplash](https://unsplash.com/s/photos/technology).
- **Step Images**: `step1.png`, `step2.png`, `step3.png` (100x100px, 1:1 ratio). Source: [Flaticon](https://www.flaticon.com/) (search "copy", "paste", "download").
- **Feature Icons**: `feature1.png`, `feature2.png`, `feature3.png` (100x100px, 1:1 ratio). Source: [Flaticon](https://www.flaticon.com/) (search "speed", "security", "user-friendly").
- **Company Logos**: `company1.png` to `company6.png` (150x50px, 3:1 ratio). Source: [Freepik](https://www.freepik.com/free-photos-vectors/logo).
- **Optimization**: Compress images using [TinyPNG](https://tinypng.com/) for faster loading.

## Setup Instructions
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/VideoVault-Downloader.git
   ```
2. **Add Images**:
   - Place images in the `images/` folder as specified above.
3. **Run Locally**:
   - Open `index.html` in a browser or use a local server:
     ```bash
     npx serve
     ```
4. **Deploy to GitHub Pages**:
   - Create a GitHub repository:
     ```bash
     git init
     git add .
     git commit -m "Initial commit"
     git remote add origin https://github.com/your-username/VideoVault-Downloader.git
     git push -u origin main
     ```
   - Enable GitHub Pages in `Settings > Pages > Source > main branch`.
5. **Live Hosting**:
   - **Netlify**:
     - Go to [Netlify](https://www.netlify.com/), select "New site from Git".
     - Connect your GitHub repository and deploy.
   - **Vercel**:
     - Go to [Vercel](https://vercel.com/), import your GitHub repository.
     - Deploy with default settings.
   - Update this README with the live URL after deployment.

## Server-Side Video Downloading
For actual video downloading (e.g., from YouTube), a backend is required:
- **Tech Stack**: Node.js with `ytdl-core` for YouTube or similar libraries.
- **Steps**:
  1. Set up a Node.js server:
     ```bash
     npm init -y
     npm install express ytdl-core
     ```
  2. Create an API endpoint:
     ```javascript
     const express = require('express');
     const ytdl = require('ytdl-core');
     const app = express();

     app.use(express.static('public')); // Serve frontend files

     app.get('/download', async (req, res) => {
         const url = req.query.url;
         if (!ytdl.validateURL(url)) {
             return res.status(400).json({ error: 'Invalid URL' });
         }
         res.header('Content-Disposition', 'attachment; filename="video.mp4"');
         ytdl(url, { filter: 'videoandaudio' }).pipe(res);
     });

     app.listen(3000, () => console.log('Server running on port 3000'));
     ```
  3. Host the backend on Heroku, AWS, or similar.
- **Note**: Ensure compliance with platform terms (e.g., YouTube’s) and implement CORS policies.

## Development Notes
- **Technologies**: HTML, CSS, JavaScript.
- **SEO**: Meta tags, Open Graph tags, and semantic HTML for better ranking.
- **Performance**: Lazy loading and image optimization for fast load times.
- **Accessibility**: ARIA labels for form inputs and navigation.
- **Testing**: Validated on Chrome, Firefox, Edge, and mobile devices for responsiveness.
- **Bugs**: Fixed logo size, company logo size, and restored missing navbar links.

## Contributing
1. Fork the repository.
2. Create a feature branch (`git checkout -b feature-name`).
3. Commit changes (`git commit -m "Add feature"`).
4. Push to the branch (`git push origin feature-name`).
5. Open a pull request.

## License
MIT License. See `LICENSE` file for details.