# Elearner Learning Management System (LMS)

## Overview

Welcome to the Elearner Learning Management System (LMS) project! This repository contains the source code for a full-stack LMS platform designed to provide a comprehensive learning experience. The project is built with a focus on scalability, security, and performance optimization, making it suitable for industrial-level applications.

## Features

- Responsive Design: The application is fully mobile responsive, ensuring a seamless experience across devices.
- User Authentication: Supports both manual and social authentication methods, including OTP verification for account activation.
- Admin Dashboard: A powerful admin interface that includes:
- Real-time analytics for users, orders, and courses.
- Ability to update banners, FAQs, and course categories.
- Management of user accounts and course content.
- Course Management: Admins can create, edit, and manage courses, including adding video content with advanced protection.
- Dynamic Content: The application supports dynamic FAQs and user reviews.
- Payment Integration: Multiple payment gateways are implemented, including Stripe for secure transactions.
- Notification System: Real-time notifications for new orders and user interactions.
- Data Protection: Utilizes DRM encryption for video content to prevent unauthorized access and downloads.

## Technologies Used

- Frontend: Next.js for building the user interface.
- Backend: Node.js for server-side logic.
- Database: MongoDB for data storage.
- State Management: RTK Query for efficient data fetching and caching.
- Styling: Tailwind CSS for modern and responsive design.
- Email Templates: EJS for dynamic email content.

## Getting Started

To get started with the Elearner LMS project, follow these steps:

1. Clone the Repository:

bash
  ```git clone https://github.com/yourusername/elearner-lms.git```
  ```cd elearner-lms```
   


2. Install Dependencies:
  ``` npm install```
   


3. Set Up Environment Variables:
Create a
.env
file in the root directory and add your environment variables (e.g., database connection string, API keys).

4. Run the Application:

bash
   npm run dev
   


5. Access the Application:
Open your browser and navigate to
http://localhost:3000` to view the application.

## Contribution

Contributions are welcome! If you would like to contribute to the Elearner LMS project, please fork the repository and submit a pull request. 

## Acknowledgments

Special thanks to the community for their support and feedback. This project aims to provide valuable learning resources and enhance the skills of aspiring developers.

Feel free to reach out if you have any questions or need further assistance! Happy coding!
