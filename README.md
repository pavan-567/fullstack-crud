# Simple Student CRUD Application

A modern, responsive student management system built with React, Spring Boot, and MongoDB. Features smooth animations, mobile responsiveness, and real-time notifications.

## 🚀 Features

- **Full CRUD Operations**: Create, Read, Update, Delete students
- **Search Functionality**: Search students by name, email, or course
- **Mobile Responsive**: Works perfectly on all device sizes
- **Smooth Animations**: Powered by Framer Motion
- **Toast Notifications**: Real-time feedback with React Hot Toast
- **Modern UI**: Clean design with Bootstrap 5
- **Type Safety**: Full TypeScript support
- **State Management**: TanStack Query for efficient data fetching

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI framework
- **TypeScript** - Type safety
- **Bootstrap 5** - CSS framework
- **TanStack Query** - Data fetching and caching
- **React Hook Form** - Form handling
- **Zod** - Schema validation
- **Framer Motion** - Animations
- **React Hot Toast** - Notifications
- **Vite** - Build tool

### Backend
- **Spring Boot 3.2** - Java framework
- **Spring Data MongoDB** - Database operations
- **MongoDB** - NoSQL database
- **Maven** - Dependency management
- **Bean Validation** - Input validation

## 📁 Project Structure

```
simple-fullstack/
├── backend/                 # Spring Boot application
│   ├── src/main/java/
│   │   └── com/simple/studentcrud/
│   │       ├── controller/  # REST controllers
│   │       ├── service/     # Business logic
│   │       ├── repository/  # Data access
│   │       └── model/       # Data models
│   └── src/main/resources/
│       └── application.properties
├── frontend/                # React application
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── hooks/          # Custom hooks
│   │   ├── services/       # API services
│   │   ├── types/          # TypeScript types
│   │   └── App.tsx         # Main app component
│   └── package.json
├── start.sh                # Linux/Mac startup script
├── start.bat               # Windows startup script
└── README.md
```

## 🚀 Quick Start

### Prerequisites
- Java 17 or higher
- Node.js 18 or higher
- MongoDB 4.4 or higher
- Maven 3.6 or higher

### Option 1: Automated Setup (Recommended)

**Linux/Mac:**
```bash
cd simple-fullstack
chmod +x start.sh
./start.sh
```

**Windows:**
```cmd
cd simple-fullstack
start.bat
```

### Option 2: Manual Setup

1. **Start MongoDB:**
   ```bash
   # Linux/Mac
   sudo systemctl start mongod
   
   # Windows
   net start MongoDB
   ```

2. **Start Backend:**
   ```bash
   cd backend
   mvn spring-boot:run
   ```

3. **Start Frontend:**
   ```bash
   cd frontend
   npm install
   npm run dev
   ```

## 🌐 Access Points

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:8085
- **MongoDB**: localhost:27017

## 📱 Mobile Responsive

The application is fully responsive and works seamlessly on:
- 📱 Mobile phones (320px+)
- 📱 Tablets (768px+)
- 💻 Desktops (1024px+)
- 🖥️ Large screens (1200px+)

## 🎨 UI Features

- **Modern Design**: Clean, professional interface
- **Smooth Animations**: Framer Motion powered transitions
- **Interactive Elements**: Hover effects and micro-interactions
- **Loading States**: Visual feedback during operations
- **Toast Notifications**: Real-time success/error messages
- **Form Validation**: Client-side validation with Zod
- **Search Functionality**: Real-time search with debouncing

## 🔧 API Endpoints

### Students
- `GET /api/students` - Get all students
- `GET /api/students/{id}` - Get student by ID
- `POST /api/students` - Create new student
- `PUT /api/students/{id}` - Update student
- `DELETE /api/students/{id}` - Delete student
- `GET /api/students/search?q={query}` - Search students

## 📊 Data Model

### Student
```typescript
interface Student {
  id?: string;        // MongoDB ObjectId
  name: string;       // Student name (2-50 chars)
  email: string;      // Valid email address
  course: string;     // Course name (max 100 chars)
  age: number;        // Age (16-100)
}
```

## 🎯 Key Features Explained

### 1. CRUD Operations
- **Create**: Add new students with form validation
- **Read**: View all students in a responsive table
- **Update**: Edit existing student information
- **Delete**: Remove students with confirmation

### 2. Search Functionality
- Real-time search across name, email, and course
- Case-insensitive matching
- Instant results as you type

### 3. Animations
- Page load animations
- Card hover effects
- Modal transitions
- List item animations
- Loading spinners

### 4. Form Validation
- Client-side validation with Zod
- Real-time error feedback
- Required field indicators
- Email format validation
- Age range validation

### 5. State Management
- TanStack Query for server state
- Optimistic updates
- Automatic refetching
- Error handling
- Loading states

## 🛡️ Error Handling

- **Network Errors**: Graceful handling of API failures
- **Validation Errors**: Clear error messages for form inputs
- **Not Found**: Proper 404 handling for missing resources
- **Server Errors**: User-friendly error messages

## 📱 Mobile Features

- **Touch-Friendly**: Large buttons and touch targets
- **Responsive Tables**: Horizontal scrolling on small screens
- **Mobile Navigation**: Optimized for touch interaction
- **Fast Loading**: Optimized for mobile networks

## 🔧 Development

### Backend Development
```bash
cd backend
mvn clean compile
mvn spring-boot:run
```

### Frontend Development
```bash
cd frontend
npm install
npm run dev
```

### Building for Production
```bash
# Backend
cd backend
mvn clean package

# Frontend
cd frontend
npm run build
```

## 🧪 Testing

The application includes:
- Form validation testing
- API endpoint testing
- Responsive design testing
- Cross-browser compatibility

## 📈 Performance

- **Lazy Loading**: Components load as needed
- **Optimized Queries**: Efficient database queries
- **Caching**: TanStack Query caching
- **Bundle Optimization**: Vite build optimization

## 🎨 Customization

### Styling
- Modify `src/index.css` for global styles
- Update Bootstrap variables for theme changes
- Customize animations in component files

### Functionality
- Add new fields to the Student model
- Extend search functionality
- Add new CRUD operations

## 🚀 Deployment

### Backend Deployment
1. Build the JAR file: `mvn clean package`
2. Deploy to your preferred platform (AWS, Heroku, etc.)
3. Configure MongoDB connection

### Frontend Deployment
1. Build the app: `npm run build`
2. Deploy the `dist` folder to any static hosting service
3. Update API base URL in production

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support or questions:
1. Check the documentation
2. Review the code comments
3. Open an issue on GitHub

---

**Built with ❤️ using React, Spring Boot, and MongoDB**
