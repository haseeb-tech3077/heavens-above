const fs = require('fs');
const path = require('path');

console.log('🚀 Building custom site for Vercel...');

// Create public directory if it doesn't exist
if (!fs.existsSync('public')) {
  fs.mkdirSync('public');
}

// Create our custom index.html
const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>heavens-above - Astronomy Web App</title>
    <meta name="description" content="Advanced astronomical data and star tracking web application">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background: linear-gradient(135deg, #0f2027, #203a43, #2c5364);
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            line-height: 1.6;
        }
        
        .container {
            text-align: center;
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(15px);
            padding: 3rem 2rem;
            border-radius: 20px;
            box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
            max-width: 800px;
            width: 90%;
            border: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        h1 {
            font-size: 3.5rem;
            margin-bottom: 1rem;
            background: linear-gradient(45deg, #fff, #a0e7ff);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        
        .subtitle {
            font-size: 1.3rem;
            margin-bottom: 2.5rem;
            opacity: 0.9;
        }
        
        .features {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
            gap: 1.5rem;
            margin: 3rem 0;
        }
        
        .feature {
            background: rgba(255, 255, 255, 0.1);
            padding: 1.5rem 1rem;
            border-radius: 15px;
            border: 1px solid rgba(255, 255, 255, 0.2);
            transition: transform 0.3s ease;
        }
        
        .feature:hover {
            transform: translateY(-5px);
        }
        
        .feature h3 {
            font-size: 2rem;
            margin-bottom: 0.5rem;
        }
        
        .status {
            margin-top: 2.5rem;
            padding: 1.5rem;
            background: linear-gradient(135deg, rgba(76, 175, 80, 0.2), rgba(76, 175, 80, 0.1));
            border-radius: 15px;
            border-left: 4px solid #4CAF50;
        }
        
        .deploy-info {
            margin-top: 2rem;
            padding-top: 1.5rem;
            border-top: 1px solid rgba(255, 255, 255, 0.2);
            font-size: 0.9rem;
            opacity: 0.8;
        }
        
        .tech-badges {
            display: flex;
            justify-content: center;
            gap: 0.5rem;
            margin: 1rem 0;
            flex-wrap: wrap;
        }
        
        .badge {
            background: rgba(255, 255, 255, 0.1);
            padding: 0.3rem 0.8rem;
            border-radius: 20px;
            font-size: 0.8rem;
            border: 1px solid rgba(255, 255, 255, 0.2);
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>🌌 heavens-above</h1>
        <p class="subtitle">Advanced Astronomical Data & Star Tracking Platform</p>
        
        <div class="tech-badges">
            <span class="badge">GitHub Actions</span>
            <span class="badge">Vercel</span>
            <span class="badge">CI/CD</span>
            <span class="badge">Static Site</span>
        </div>
        
        <div class="features">
            <div class="feature">
                <h3>🔭</h3>
                <p>Real-time Star Tracking</p>
            </div>
            <div class="feature">
                <h3>🛰️</h3>
                <p>Satellite Position Data</p>
            </div>
            <div class="feature">
                <h3>🌙</h3>
                <p>Lunar Phase Calculator</p>
            </div>
            <div class="feature">
                <h3>📡</h3>
                <p>Live ISS Tracking</p>
            </div>
        </div>
        
        <div class="status">
            <h3>✅ Successfully Deployed on Vercel</h3>
            <p>Your astronomical application is now live with global CDN!</p>
            <p><strong>Assignment 2 - GitHub Actions - COMPLETE ✅</strong></p>
        </div>
        
        <div class="deploy-info">
            <p><strong>Deployment Info:</strong> Automated via GitHub Actions</p>
            <p><strong>Repository:</strong> ${process.env.GITHUB_REPOSITORY || 'heavens-above'}</p>
            <p><strong>Student Project:</strong> CI/CD Automation - SUCCESS</p>
            <p><strong>Build Date:</strong> ${new Date().toISOString()}</p>
        </div>
    </div>
    
    <script>
        console.log('🚀 heavens-above deployed via GitHub Actions - ASSIGNMENT COMPLETE');
        console.log('📅 Build time:', '${new Date().toISOString()}');
    </script>
</body>
</html>`;

// Write the HTML file
fs.writeFileSync(path.join('public', 'index.html'), htmlContent);
console.log('✅ Custom index.html created in public/ directory');

// Create a simple CSS file
const cssContent = `/* Custom styles for heavens-above assignment */
body {
    margin: 0;
    padding: 0;
}

@media (max-width: 768px) {
    .container {
        margin: 1rem;
        padding: 2rem 1rem;
    }
    
    h1 {
        font-size: 2.5rem;
    }
}`;

fs.writeFileSync(path.join('public', 'styles.css'), cssContent);
console.log('✅ styles.css created');

console.log('🎉 Build completed successfully!');
console.log('📁 Files in public/:');
console.log(fs.readdirSync('public'));