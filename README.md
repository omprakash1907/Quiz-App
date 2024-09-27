## **Quiz Application 🌟**

This **Quiz Application** is an interactive platform where users can explore and participate in quizzes across various categories. It is designed to provide a clean and responsive interface for users to test their knowledge on a variety of topics without the need for authentication (login or logout). Whether you're into general knowledge, science, history, or technology, this quiz app offers something for everyone.

## **🌟 Features**

- 📰 **Browse All Quizzes**: View a wide range of quizzes across different categories.
- 🔍 **Answer Questions**: Easily search for blog posts by title or keywords.
- 📊 **Answer Questions**: Select answers and submit responses to see how well you did.
- 📅 **Score and Feedback**: et instant feedback with detailed score summaries after completing each quiz.
- 📱 **Responsive Design**: Optimized for mobile, tablet, and desktop viewing.

## **💻 Tech Stack**

### **Frontend**
- **⚛️ React.js**: JavaScript library for building dynamic user interfaces.
- **🎨 Tailwind CSS**: A utility-first CSS framework to style the components with ease.
- **📡 Axios**: For fetching data from the backend API.
- **⚡ React Router**: For seamless navigation between pages.

### **Backend**
- **⚙️ Node.js**: JavaScript runtime for building server-side applications.
- **🛠 Express.js**: Lightweight framework for building APIs.
- **🗄 MongoDB**: NoSQL database for storing blog data.
- **🌱 Mongoose**: Object Data Modeling (ODM) library for MongoDB.

## **🚀 Getting Started**

### **Prerequisites**
Before you begin, ensure you have met the following requirements:
- **Node.js** (v14 or higher)
- **NPM** (Node Package Manager)
- **MongoDB** (Local instance or MongoDB Atlas)

### **Installation**

1. **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/blog-post-website.git
    cd blog-post-website
    ```

2. **Install dependencies for the frontend**:
    ```bash
    cd client
    npm install
    ```

3. **Install dependencies for the backend**:
    ```bash
    cd server
    npm install
    ```

4. **Set up environment variables**:
    Create a `.env` file in the **server** directory with the following content:
    ```bash
    MONGO_URI=your_mongodb_connection_string
    ```

## **🏃‍♂️ Running the Project**

### **Frontend**:
1. Navigate to the **client** directory:
    ```bash
    cd client
    ```

2. Start the React development server:
    ```bash
    npm start
    ```

   The frontend will be available at: [http://localhost:3000](http://localhost:3000)

### **Backend**:
1. Navigate to the **server** directory:
    ```bash
    cd server
    ```

2. Start the Node.js server:
    ```bash
    npm run dev
    ```

   The backend will be available at: [http://localhost:5000](http://localhost:5000)

## **📄 API Endpoints**

Here are the key API endpoints used to manage the blog posts:

- **GET /api/posts**: Fetch all blog posts.
- **GET /api/posts/:id**: Fetch a specific blog post by ID.
- **POST /api/posts**: Create a new blog post.
- **PUT /api/posts/:id**: Edit an existing blog post.
- **DELETE /api/posts/:id**: Delete a blog post.


## **✨ Features to Explore**

- **Create New Blog Posts**: Authors can add new content quickly with the provided form.
- **Search Functionality**: Search for posts by title or keywords to find relevant blogs faster.
- **Category-Based Browsing**: Filter posts by categories to find content that matches your interests.
- **Responsive Design**: The layout adjusts beautifully for mobile and desktop devices.
- **Pagination**: Easily navigate through posts with pagination, ensuring smooth user experience.

## **🛠 Future Enhancements**

- **⭐ User Comments**: Add a comment section where users can leave feedback on posts.
- **🔗 Social Sharing**: Enable sharing of blog posts via social media platforms.
- **📈 Blog Statistics**: Provide analytics for post views and reader engagement.
- **📧 Newsletter Subscription**: Allow users to subscribe to the blog for updates.

## **📝 License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

> Crafted with ❤️ by Omprakash. Feel free to contribute, report issues, or suggest new features to make this project even better!


