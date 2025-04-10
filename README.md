🚀 Counter App
This is a simple React Counter App that demonstrates the use of React hooks, dynamic styling, and Dockerized deployment. It's deployed and live on Render.

🌟 Features
Increase/Decrease Counter

Random background color on increment/decrement

Background turns white when counter reaches 0

Buttons disable when counter is 0

Responsive layout using Flexbox

🛠️ Tech Stack
React

JavaScript (ES6+)

CSS

Docker

Nginx

Render (for deployment)

📦 Setup & Run Locally
1. Clone the repo
bash
Copy
Edit
git clone https://github.com/your-username/counter-app.git
cd counter-app
2. Install dependencies
bash
Copy
Edit
npm install
3. Start the dev server
bash
Copy
Edit
npm start
🐳 Docker Setup
1. Build the Docker image
bash
Copy
Edit
docker build -t counter-app .
2. Run the container
bash
Copy
Edit
docker run -p 8080:80 counter-app
Then visit: http://localhost:8080

🌍 Deployment
The app is live at:

🔗 https://counter-app-xkbf.onrender.com

Deployment Steps
Dockerized the app with a multistage build

Used Nginx to serve the React production build

Deployed to Render using GitHub integration

📁 Project Structure
cpp
Copy
Edit
counter-app/
│
├── public/
├── src/
│   ├── App.js
│   └── ...
├── Dockerfile
├── nginx.conf
└── README.md
🙌 Learnings
React Hooks (useState)

Dynamic styling with style prop

Docker multistage builds

Nginx setup for React SPA

Deployment with Render
