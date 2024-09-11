
# Academic Archive Portal - Frontend

A responsive web application for students to search through previous year notes and question papers, contribute resources, and navigate a sleek student dashboard.

## Features

- **Student Dashboard**: Sleek design with search functionality for past notes and question papers.
- **Admin Dashboard**: Management interface for approving submitted resources.
- **For Admin**:Username:Admin,,Password:Admin123.
- **For Student**:Username:Student,Password:Student123.

- **Approval Limbo**: A section for resource approval.
- **Share Resources**: Allows students to contribute their notes, papers, and other academic resources.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Carousel for Resources**: Display resources in a sleek slider.

## Prerequisites

Make sure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://www.npmjs.com/) (version 6 or higher)
- [Vite](https://vitejs.dev/) for local development server and bundling
- [Git](https://git-scm.com/) (optional, for cloning the repo)

## Installation

### 1. Clone the repository:

```bash
git clone <your-repo-url>
cd your-project-directory
```

### 2. Install Vite

If you don't have Vite installed globally, you can install it using the following command:

```bash
npm create vite@latest
```

### 3. Install dependencies

Run the following commands to install all necessary packages:

```bash
npm install
npm install tailwindcss
npm install react-dom
npm install react-slick slick-carousel
npm install react-icons
```

### 4. Setup Tailwind CSS

Make sure your `tailwind.config.js` is set up. You can follow the [Tailwind CSS Docs](https://tailwindcss.com/docs/installation) to set up Tailwind.

### 5. Run the development server

To start the development server, run:

```bash
npm run dev
```

This will launch the application on your local server. You can access it by navigating to:

```
http://localhost:3000
```

## Usage

1. Visit the **Student Dashboard** to explore past resources.
2. Use the **Search Bar** to find specific notes or question papers.
3. Use the **Share Resources** option to contribute academic materials.
4. Admins can manage resource approvals via the **Admin Dashboard**.

## Project Structure

- `src/components`: Contains React components for the application (e.g., `StudentDashboard`, `AdminDashboard`).
- `src/styles`: Contains Tailwind CSS and other styles for the project.

## License

This project is licensed under the MIT License.
