<div align="center">
  <br />
    <a>
      <img src="https://github.com/user-attachments/assets/81333137-b895-498f-8dab-4aca7806deb0" alt="Project Banner">
    </a>
  <br />

  <div>
     <img src="https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="nextdotjs" />
    <img src="https://img.shields.io/badge/-TypeScript-black?style=for-the-badge&logoColor=white&logo=typescript&color=3178C6" alt="typescript" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
    <img src="https://img.shields.io/badge/-Appwrite-black?style=for-the-badge&logoColor=white&logo=appwrite&color=FD366E" alt="appwrite" />
  </div>

<h3 align="center">DriveX - Storage and File Sharing Platform</h3>

   <div align="center">
  <i>"Design is not just what it looks like and feels like. Design is how it works."</i><br>
  — <b>Steve Jobs</b>
</div>
</div>

## <a name="introduction">🤖 Introduction</a>

Welcome to a next-generation file storage and sharing platform designed for simplicity, speed, and security.  
This powerful application enables users to effortlessly upload, categorize, preview, and share their files—  
all through an intuitive, user-friendly interface.

Built on the latest version of **Next.js 15** and powered by the **Appwrite Node SDK**,  
the platform integrates cutting-edge technologies to deliver blazing-fast performance and rock-solid reliability.

Whether you're managing personal documents or collaborating on team projects,  
our solution ensures seamless access and control over your digital assets.

With features like **real-time updates**, **secure file permissions**, and **scalable architecture**,  
this platform sets a new standard for modern file management.

## <a name="tech-stack">⚙️ Tech Stack</a>

- **Frontend Framework**: Next.js 15 with React 19
- **Language**: TypeScript
- **Styling**: TailwindCSS + ShadCN UI Components
- **Backend Services**: Appwrite (Authentication, Storage, Database)
- **Type Safety**: TypeScript with strict mode

## 📁 Project Structure
```
DriveX/
├── app/                  # Next.js app directory (pages and routing)
├── components/          # Reusable UI components
├── constants/          # Application constants
├── hooks/             # Custom React hooks
├── lib/               # Utility functions and configurations
├── public/            # Static assets
├── types/             # TypeScript type definitions
└── ...configuration files
```

## <a name="features">🔋 Features</a>

DriveX is packed with robust, user-friendly features designed to streamline file storage, sharing, and management:

- **🔐 Secure User Authentication (Appwrite)**  
  Sign up, log in, and manage sessions securely using Appwrite’s authentication services.

- **📤 Versatile File Uploads**  
  Easily upload a wide range of file types — documents, images, videos, audio, and more — ensuring all your essential data is stored safely.

- **📂 File Management Dashboard**  
  Browse, preview, rename, or delete your uploaded files directly from an intuitive interface powered by Appwrite’s storage API.

- **📥 Seamless File Downloads**  
  Instantly download stored files, making content readily accessible when you need it.

- **🔗 Easy File Sharing**  
  Share files via secure links or permissions, enabling smooth collaboration across users.

- **📊 Interactive Dashboard**  
  Visualize usage data, including total storage, consumed space, recent uploads, and a summary of files by type — all in one place.

- **🔍 Global File Search**  
  Locate files quickly across the platform using an efficient and responsive global search feature.

- **🧮 Advanced Sorting Options**  
  Organize your files by date, name, or size to simplify navigation and improve productivity.

- **🖥️ Modern, Responsive UI**  
  Built with a minimalist, mobile-friendly design that adapts seamlessly to any screen size.

- **⚙️ Powered by Modern Tech**  
  Utilizes the latest in web technology — **React 19**, **Next.js 15**, and **Appwrite** — along with modular architecture for scalability and code reusability.

> ...and much more to empower efficient, secure, and scalable digital storage.

## Core Features

### File Management
- **Upload System**: Support for multiple file types (documents, images, videos, audio)
- **File Operations**: View, rename, delete, and download capabilities
- **Storage Dashboard**: Visual representation of storage usage and statistics
- **File Organization**: Sort by date, name, or size
- **Global Search**: Quick file lookup across the platform

### User Experience
- **Modern UI**: Clean, minimalist design with responsive layouts
- **Real-time Updates**: Instant feedback on file operations
- **File Preview**: Built-in preview for supported file types
- **Drag-and-Drop**: Intuitive file upload interface
- **Progress Tracking**: Visual feedback for upload/download operations

### Security & Sharing
- **User Authentication**: Secure signup/login via Appwrite
- **File Sharing**: Controlled sharing with customizable permissions
- **Access Control**: Granular control over shared resources
- **Secure Storage**: Enterprise-grade file storage with Appwrite

### Technical Features
- **Server-Side Rendering**: Optimized page loads with Next.js
- **Type Safety**: Full TypeScript implementation
- **Responsive Design**: Mobile-first approach
- **Modern Components**: Built with ShadCN UI library
- **Performance Optimized**: Efficient file handling and caching

## Setup Requirements
- Node.js (Latest LTS version)
- npm or yarn
- Appwrite instance (self-hosted or cloud)

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)


**Set Up Environment Variables**

Create a new file named `.env.local` in the root of your project and add the following content:

```env
NEXT_PUBLIC_APPWRITE_ENDPOINT="https://cloud.appwrite.io/v1"
NEXT_PUBLIC_APPWRITE_PROJECT=""
NEXT_PUBLIC_APPWRITE_DATABASE=""
NEXT_PUBLIC_APPWRITE_USERS_COLLECTION=""
NEXT_PUBLIC_APPWRITE_FILES_COLLECTION=""
NEXT_PUBLIC_APPWRITE_BUCKET=""
NEXT_APPWRITE_KEY=""
```

Replace the values with your actual Appwrite credentials. You can obtain these credentials by signing up &
creating a new project on the [Appwrite website](https://appwrite.io/).

**Running the Project**

## Development
1. Clone the repository:
   ```bash
   git clone https://github.com/sp201004/Drivex-Your-Personal-Storage.git
   cd Drivex-Your-Personal-Storage
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables:
   - Create `.env.local` file
   - Add required configuration

4. Start development server:
   ```bash
   npm run dev
   ```

## Production Deployment
1. Build the application:
   ```bash
   npm run build
   ```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.

2. Configure Appwrite:
   - Set up storage buckets
   - Configure authentication
   - Set appropriate security rules

3. Deploy using your preferred hosting service.

## Performance Optimizations
- Implemented lazy loading for images and components
- Optimized asset delivery with Next.js Image component
- Efficient file chunking for large uploads
- Caching strategies for frequently accessed content

## Best Practices
- Consistent code formatting with ESLint and Prettier
- Component-based architecture
- Type-safe development
- Responsive design principles
- Security-first approach

## 🌟 Show your support

Give a ⭐️ if this project helped you!

<div align="center">
Built with ❤️ by the Surya
</div>
