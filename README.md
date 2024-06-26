Photo Gallery

Overview
A Photo Gallery application that allows users to add, view, search, and delete photos in a masonry layout. The app is built using React for the front end and a custom API for the back end. It mimics the functionality of Unsplash while allowing users to manage their own photo collection.

User Stories
View Photos: Users can see a list of photos in a masonry layout that they have added.
Add Photo: Users can add a new photo to the list; the new photo appears at the top.
Search Photos: Users can search for photos by label.
Hover Effect: When users hover over a photo, they can see a label and a delete button.
Delete Photo: Users can delete images from the list.
Optional Delete Confirmation: Users can enter their password to confirm image deletion (optional feature).
Technologies Used
Front-end: React.js
Back-end: Node.js with Express
Database: MongoDB or any other preferred database
Styling: CSS (with libraries such as Material-UI for components)
Setup Instructions
Prerequisites
Node.js installed
MongoDB installed and running
Front-end Setup
Clone the repository:
git clone https://github.com/your-username/my-unsplash.git
cd my-unsplash/client
npm install
npm start
cd my-unsplash/server
npm install

Set up environment variables: Create a .env file and add the necessary configuration:
