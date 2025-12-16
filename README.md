# Next.js Blog Page

A responsive, production-ready blog post page built with **Next.js (Pages Router)** based on the provided Figma design.  
The project demonstrates static generation, client-side data fetching, dynamic imports, strong CSS fundamentals, and clean architecture.

---

## 🔗 Figma Design

**Design URL:**  
https://www.figma.com/design/4mNg610JaxrMzCXY6MnGSB/New-Practical-Task

---

## 🎯 Objective

- Implement a **pixel-perfect, responsive blog page** from Figma
- Use **static generation** for blog posts
- Fetch **comments client-side**
- Dynamically load an **Edit (Rich Text) component**
- Follow **performance, accessibility, and clean code best practices**
- Avoid external UI frameworks and component libraries

---

## 🛠 Tech Stack

- **Next.js 16** (Pages Router)
- **JavaScript (ES6+)**
- **CSS Modules (Raw CSS)**
- **Next.js API Routes**
- **React Hook Form**
- **Yup** (Form Validation)
- **React Quill** (Rich Text Editor)

---

## 📁 Project Structure

src/
│
├── pages/
│ ├── index.js # Home page
│ ├── \_app.js # App wrapper
│ ├── \_document.js # Custom document
│ ├── api/
│ │ └── comments.js # Mock comments API
│ │
│ └── blog/
│ └── [slug]/
│ └── index.jsx # Dynamic blog page (SSG)
│
├── components/
│ ├── atoms/ # Reusable UI components
│ ├── molecules/ # Blog feature components
│ └── templates/
│ └── blogLayout/ # Blog layout
│
├── data/
│ ├── blogPosts.js # Static blog data
│ └── comments.js # Static comments
│
├── styles/
│ └── globals.css # Global styles
│
└── utils/
└── utils.js # Helper functions

---

## 🚀 Features Implemented

### ✅ Static Blog Pages

- Blog posts are generated using:
  - `getStaticPaths()`
  - `getStaticProps()`
- Each post includes:
  - Title
  - Publish date
  - Blog content
- Accessible via dynamic routes:

---

### Comments Section (Client-Side)

- Comments are fetched **client-side** using `useEffect`
- Data served via **Next.js API routes**
- Includes:
- Loading state
- Error handling (optional bonus)
- Comments displayed below blog content

---

### ✏️ Dynamic Edit Component

- “Edit” button dynamically loads the editor using `next/dynamic`
- **React Quill** used for rich text editing
- Editor is **not included in initial bundle** (performance optimized)

```js
const EditPost = dynamic(() => import("@/components/Editor/EditPost"), {
  ssr: false,
});
```

### 📝 Form Handling & Validation

- **Add Comment form** with real-time validation, clear feedback on submit, and accessible UX
- **React Hook Form** for efficient form state management
- **Yup** for schema-based validation
- **Accessible form inputs** with proper labels and inline error messages

### Installation & Setup

# Clone the repository

```
git clone https://github.com/ChandDB/blog-app.git
```

# Navigate to the project

```
cd blog-app
```

# Install dependencies

```
npm install
```

# Run the development server

```
npm run dev
```

Open http://localhost:3000 to view the project.

# Build for Production

```
npm run build
npm start
```
