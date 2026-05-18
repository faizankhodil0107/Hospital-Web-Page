# Care Connect Hospital Management System

A modern, production-ready hospital management web application for final year college submission.

## 🚀 Features

### Landing Page
- Modern hero section with gradient overlay
- Quick action cards (Book Appointment, Find Doctor, Emergency)
- Services showcase
- Statistics counter
- Testimonials section
- Professional footer with hospital info

### Authentication
- Modern login page with hospital branding
- Role-based login (Admin, Doctor, Patient)
- Dark/Light mode toggle

### Appointments
- Multi-step booking form
- Doctor selection with availability
- Date and time slot picker
- Patient details form
- Appointment confirmation

### Doctors Page
- Doctor cards with images and details
- Filter by specialty
- Search functionality
- Availability indicators

### Admin Dashboard
- Collapsible sidebar navigation
- Stats cards with charts (Chart.js)
- Patient trends visualization
- Department distribution chart
- Quick actions panel
- Recent patients table

### Management Modules
- **Patient Management**: EMR system with registration, EMR viewing, discharge
- **Pharmacy**: Medicine inventory with expiry alerts, CRUD operations
- **Room & Bed Management**: Bed allocation, ward management

### Additional Features
- Dark/Light mode toggle
- Toast notifications
- Modal popups
- Smooth animations
- Fully responsive (mobile & tablet)
- Professional UI/UX

## 🛠️ Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript
- **UI Framework**: Bootstrap 5.3
- **Charts**: Chart.js
- **Icons**: Font Awesome 6.4
- **Fonts**: Poppins, Roboto
- **Storage**: LocalStorage (for demo)

## 📁 Project Structure

```
Project X - Copy/
├── css/
│   └── main.css          # Global styles & theme
├── js/
│   └── main.js           # Common JavaScript functions
├── doctors/
│   └── Dr.IK.appointment.html
├── Management/
│   ├── Dashboard.html    # Admin dashboard
│   ├── Patient Management.html
│   ├── Pharmacy.html
│   └── Room & bed Management.html
├── index.html            # Landing page
├── Login.html            # Login page
├── appointment.html      # Appointment booking
├── abt.Dr.html          # Doctors listing
├── contact.html         # Contact page
├── review.html          # Hospital reviews
└── README.md
```

## 🎨 Color Theme

- **Primary**: Teal (#0D9488)
- **Secondary**: Blue (#0EA5E9)
- **Success**: Green (#10B981)
- **Warning**: Orange (#F59E0B)
- **Danger**: Red (#EF4444)

## 📱 Responsive Breakpoints

- **Desktop**: > 1024px
- **Tablet**: 768px - 1024px
- **Mobile**: < 768px

## 🔧 How to Run

1. Simply open `index.html` in any modern web browser
2. No server required (uses LocalStorage for data persistence)
3. For full functionality, keep all files in the same directory

## 📝 Usage Notes

- Data is stored in browser's LocalStorage
- Login can access any role (Patient/Doctor/Admin)
- All CRUD operations work locally
- Charts display sample data
- Theme preference is saved

## 👨‍🎓 For College Project Demo

This project is designed to impress:
- ✅ Professional UI/UX
- ✅ Working functionality
- ✅ Responsive design
- ✅ Charts and dashboards
- ✅ Dark mode
- ✅ Smooth animations

## License

This project is for educational purposes.
