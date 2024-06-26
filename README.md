📸 Photo Gallery
Overview
A Photo Gallery application that allows users to add, view, search, and delete photos in a masonry layout. The app is built using React for the front end and a custom API for the back end. It mimics the functionality of Unsplash while allowing users to manage their own photo collection.

📚 User Stories
View Photos: Users can see a list of photos in a masonry layout that they have added.
Add Photo: Users can add a new photo to the list; the new photo appears at the top.
Search Photos: Users can search for photos by label.
Hover Effect: When users hover over a photo, they can see a label and a delete button.
Delete Photo: Users can delete images from the list.
Optional Delete Confirmation: Users can enter their password to confirm image deletion (optional feature).
🛠️ Technologies Used
Front-end: React.js
Back-end: Node.js with Express
Database: MongoDB or any other preferred database
Styling: CSS (with libraries such as Material-UI for components)
🚀 Setup Instructions
Prerequisites
Node.js installed
MongoDB installed and running
Front-end Setup
Clone the repository:

bash
Copy code
git clone https://github.com/Kanch-prog/Photo_Gallery.git
Navigate to the client directory:

bash
Copy code
cd my-unsplash/client
Install dependencies:

bash
Copy code
npm install
Start the development server:

bash
Copy code
npm start
Back-end Setup
Navigate to the server directory:

bash
Copy code
cd my-unsplash/server
Install dependencies:

bash
Copy code
npm install
Set up environment variables:
Create a .env file in the server directory and add the necessary configuration:

env
Copy code
MONGODB_URI=mongodb+srv://your-mongodb-uri
PORT=5000
FRONTEND_URL=http://localhost:3000
Start the server:

bash
Copy code
npm start
🎉 You're all set!
Open your browser and navigate to http://localhost:3000 to see the Photo Gallery application in action.

📝 License
This project is licensed under the MIT License. See the LICENSE file for details.

💬 Contributing
If you'd like to contribute, please fork the repository and use a feature branch. Pull requests are warmly welcome.
