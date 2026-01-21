// Mock Data for Hospital Management System

const mockData = {
  users: {
    admin: {
      id: 'admin1',
      username: 'admin',
      password: 'admin123',
      role: 'admin',
      name: 'Dr. Sarah Johnson',
      email: 'admin@hospital.com'
    },
    doctor: {
      id: 'doc1',
      username: 'doctor',
      password: 'doctor123',
      role: 'doctor',
      name: 'Dr. Michael Chen',
      email: 'michael.chen@hospital.com',
      department: 'Cardiology',
      specialization: 'Cardiologist',
      phone: '+91 98765 43210',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=200'
    },
    patient: {
      id: 'pat1',
      username: 'patient',
      password: 'patient123',
      role: 'patient',
      name: 'John Doe',
      email: 'john.doe@email.com',
      phone: '+91 98765 43211',
      dob: '1985-05-15',
      bloodGroup: 'O+',
      address: '123 MG Road, Mumbai, Maharashtra 400001'
    }
  },

  departments: [
    { id: 'dept1', name: 'Cardiology', head: 'Dr. Michael Chen', rooms: 15, occupied: 12 },
    { id: 'dept2', name: 'Neurology', head: 'Dr. Emily Watson', rooms: 12, occupied: 8 },
    { id: 'dept3', name: 'Pediatrics', head: 'Dr. James Wilson', rooms: 20, occupied: 16 },
    { id: 'dept4', name: 'Orthopedics', head: 'Dr. Lisa Anderson', rooms: 10, occupied: 7 },
    { id: 'dept5', name: 'Emergency', head: 'Dr. Robert Taylor', rooms: 8, occupied: 5 }
  ],

  doctors: [
    {
      id: 'doc1',
      name: 'Dr. Michael Chen',
      department: 'Cardiology',
      specialization: 'Cardiologist',
      email: 'michael.chen@hospital.com',
      phone: '+91 98765 43210',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=200',
      experience: '15 years',
      status: 'active'
    },
    {
      id: 'doc2',
      name: 'Dr. Emily Watson',
      department: 'Neurology',
      specialization: 'Neurologist',
      email: 'emily.watson@hospital.com',
      phone: '+91 98765 43211',
      image: 'https://images.unsplash.com/photo-1559839734-2b71f153678e?auto=format&fit=crop&q=80&w=200',
      experience: '12 years',
      status: 'active'
    },
    {
      id: 'doc3',
      name: 'Dr. James Wilson',
      department: 'Pediatrics',
      specialization: 'Pediatrician',
      email: 'james.wilson@hospital.com',
      phone: '+91 98765 43212',
      image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=200',
      experience: '10 years',
      status: 'active'
    },
    {
      id: 'doc4',
      name: 'Dr. Lisa Anderson',
      department: 'Orthopedics',
      specialization: 'Orthopedic Surgeon',
      email: 'lisa.anderson@hospital.com',
      phone: '+91 98765 43213',
      image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=200',
      experience: '18 years',
      status: 'active'
    }
  ],

  appointments: [
    {
      id: 'apt1',
      patientId: 'pat1',
      patientName: 'John Doe',
      doctorId: 'doc1',
      doctorName: 'Dr. Michael Chen',
      department: 'Cardiology',
      date: '2026-01-21',
      time: '10:00 AM',
      status: 'scheduled',
      type: 'regular',
      reason: 'Regular checkup'
    },
    {
      id: 'apt2',
      patientId: 'pat2',
      patientName: 'Jane Smith',
      doctorId: 'doc1',
      doctorName: 'Dr. Michael Chen',
      department: 'Cardiology',
      date: '2026-01-21',
      time: '11:30 AM',
      status: 'scheduled',
      type: 'regular',
      reason: 'Follow-up consultation'
    },
    {
      id: 'apt3',
      patientId: 'pat3',
      patientName: 'Robert Johnson',
      doctorId: 'doc1',
      doctorName: 'Dr. Michael Chen',
      department: 'Cardiology',
      date: '2026-01-21',
      time: '02:00 PM',
      status: 'scheduled',
      type: 'emergency',
      reason: 'Chest pain'
    },
    {
      id: 'apt4',
      patientId: 'pat4',
      patientName: 'Mary Williams',
      doctorId: 'doc2',
      doctorName: 'Dr. Emily Watson',
      department: 'Neurology',
      date: '2026-01-22',
      time: '09:00 AM',
      status: 'scheduled',
      type: 'regular',
      reason: 'Headache consultation'
    }
  ],

  patients: [
    {
      id: 'pat1',
      name: 'John Doe',
      age: 38,
      gender: 'Male',
      phone: '+91 98765 43211',
      email: 'john.doe@email.com',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
      bloodGroup: 'O+',
      address: '123 MG Road, Mumbai, Maharashtra 400001',
      lastVisit: '2026-01-15',
      condition: 'Hypertension'
    },
    {
      id: 'pat2',
      name: 'Jane Smith',
      age: 45,
      gender: 'Female',
      phone: '+91 98765 43212',
      email: 'jane.smith@email.com',
      bloodGroup: 'A+',
      address: '456 Park Street, Kolkata, West Bengal 700016',
      lastVisit: '2026-01-10',
      condition: 'Diabetes Type 2'
    },
    {
      id: 'pat3',
      name: 'Robert Johnson',
      age: 62,
      gender: 'Male',
      phone: '+91 98765 43213',
      email: 'robert.j@email.com',
      bloodGroup: 'B+',
      address: '789 Residency Road, Bangalore, Karnataka 560025',
      lastVisit: '2026-01-20',
      condition: 'Cardiac Arrhythmia'
    }
  ],

  medicalRecords: [
    {
      id: 'rec1',
      patientId: 'pat1',
      patientName: 'John Doe',
      date: '2026-01-15',
      doctorName: 'Dr. Michael Chen',
      diagnosis: 'Hypertension Stage 1',
      prescription: 'Lisinopril 10mg - Once daily',
      notes: 'Patient advised to reduce sodium intake and exercise regularly.',
      nextVisit: '2026-02-15'
    },
    {
      id: 'rec2',
      patientId: 'pat2',
      patientName: 'Jane Smith',
      date: '2026-01-10',
      doctorName: 'Dr. Michael Chen',
      diagnosis: 'Type 2 Diabetes',
      prescription: 'Metformin 500mg - Twice daily',
      notes: 'Blood sugar levels stable. Continue current medication.',
      nextVisit: '2026-02-10'
    }
  ],

  prescriptions: [
    {
      id: 'presc1',
      patientId: 'pat1',
      patientName: 'John Doe',
      doctorName: 'Dr. Michael Chen',
      date: '2026-01-15',
      medication: 'Lisinopril 10mg',
      dosage: 'Once daily, morning',
      duration: '30 days',
      refills: 2
    },
    {
      id: 'presc2',
      patientId: 'pat2',
      patientName: 'Jane Smith',
      doctorName: 'Dr. Michael Chen',
      date: '2026-01-10',
      medication: 'Metformin 500mg',
      dosage: 'Twice daily, with meals',
      duration: '30 days',
      refills: 3
    }
  ],

  billing: [
    {
      id: 'bill1',
      patientId: 'pat1',
      patientName: 'John Doe',
      date: '2026-01-15',
      service: 'Consultation & Tests',
      amount: 250,
      paid: 250,
      status: 'paid',
      paymentMethod: 'Credit Card'
    },
    {
      id: 'bill2',
      patientId: 'pat2',
      patientName: 'Jane Smith',
      date: '2026-01-10',
      service: 'Follow-up Consultation',
      amount: 150,
      paid: 0,
      status: 'pending',
      paymentMethod: null
    },
    {
      id: 'bill3',
      patientId: 'pat3',
      patientName: 'Robert Johnson',
      date: '2026-01-20',
      service: 'Emergency Care',
      amount: 1200,
      paid: 500,
      status: 'partial',
      paymentMethod: 'Cash'
    }
  ],

  analytics: {
    totalPatients: 1234,
    todayAppointments: 24,
    occupancyRate: 78,
    monthlyRevenue: 145000,
    patientsPerDay: [
      { day: 'Mon', count: 32 },
      { day: 'Tue', count: 28 },
      { day: 'Wed', count: 35 },
      { day: 'Thu', count: 30 },
      { day: 'Fri', count: 25 },
      { day: 'Sat', count: 15 },
      { day: 'Sun', count: 10 }
    ],
    departmentStats: [
      { department: 'Cardiology', patients: 45 },
      { department: 'Neurology', patients: 32 },
      { department: 'Pediatrics', patients: 56 },
      { department: 'Orthopedics', patients: 28 },
      { department: 'Emergency', patients: 18 }
    ]
  }
};

// Authentication State Management
class AuthManager {
  constructor() {
    this.currentUser = this.loadUser();
  }

  login(username, password) {
    for (const role in mockData.users) {
      const user = mockData.users[role];
      if (user.username === username && user.password === password) {
        this.currentUser = user;
        localStorage.setItem('currentUser', JSON.stringify(user));
        return { success: true, user };
      }
    }
    return { success: false, message: 'Invalid credentials' };
  }

  logout() {
    this.currentUser = null;
    localStorage.removeItem('currentUser');
    window.location.href = 'index.html';
  }

  loadUser() {
    const stored = localStorage.getItem('currentUser');
    return stored ? JSON.parse(stored) : null;
  }

  isAuthenticated() {
    return this.currentUser !== null;
  }

  hasRole(role) {
    return this.currentUser && this.currentUser.role === role;
  }

  getUser() {
    return this.currentUser;
  }
}

// Initialize auth manager
const auth = new AuthManager();

// Utility Functions
const utils = {
  formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  },

  formatCurrency(amount) {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR'
    }).format(amount);
  },

  getStatusBadgeClass(status) {
    const statusMap = {
      'active': 'badge-success',
      'scheduled': 'badge-info',
      'completed': 'badge-success',
      'cancelled': 'badge-error',
      'pending': 'badge-warning',
      'paid': 'badge-success',
      'partial': 'badge-warning',
      'emergency': 'badge-error',
      'regular': 'badge-info'
    };
    return statusMap[status.toLowerCase()] || 'badge-info';
  },

  searchArray(array, query, fields) {
    const lowerQuery = query.toLowerCase();
    return array.filter(item =>
      fields.some(field =>
        String(item[field]).toLowerCase().includes(lowerQuery)
      )
    );
  },

  filterByStatus(array, status) {
    if (!status || status === 'all') return array;
    return array.filter(item => item.status === status);
  },

  sortBy(array, field, order = 'asc') {
    return [...array].sort((a, b) => {
      if (order === 'asc') {
        return a[field] > b[field] ? 1 : -1;
      } else {
        return a[field] < b[field] ? 1 : -1;
      }
    });
  }
};

// Modal Manager
class ModalManager {
  static show(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    }
  }

  static hide(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.add('hidden');
      document.body.style.overflow = 'auto';
    }
  }

  static create(title, content, actions) {
    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay';
    overlay.innerHTML = `
      <div class="modal">
        <div class="modal-header">
          <h3 class="modal-title">${title}</h3>
          <button class="modal-close" onclick="this.closest('.modal-overlay').remove()">&times;</button>
        </div>
        <div class="modal-body">
          ${content}
        </div>
        <div class="modal-footer">
          ${actions}
        </div>
      </div>
    `;
    document.body.appendChild(overlay);
    return overlay;
  }
}

// Notification System
class NotificationManager {
  static show(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `alert alert-${type}`;
    notification.style.position = 'fixed';
    notification.style.top = '20px';
    notification.style.right = '20px';
    notification.style.zIndex = '2000';
    notification.style.minWidth = '300px';
    notification.innerHTML = `
      <div>
        <strong>${type.charAt(0).toUpperCase() + type.slice(1)}!</strong>
        <p style="margin: 0; margin-top: 4px;">${message}</p>
      </div>
    `;

    document.body.appendChild(notification);

    setTimeout(() => {
      notification.remove();
    }, 5000);
  }
}

// Chart Rendering (Simple Bar Chart)
class ChartRenderer {
  static renderBarChart(canvasId, labels, data, color) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    const maxValue = Math.max(...data);
    const barWidth = width / labels.length - 10;
    const padding = 40;

    // Clear canvas
    ctx.clearRect(0, 0, width, height);

    // Draw bars
    data.forEach((value, index) => {
      const barHeight = ((value / maxValue) * (height - padding - 20));
      const x = index * (width / labels.length) + 5;
      const y = height - barHeight - padding;

      // Draw bar
      ctx.fillStyle = color || '#0066CC';
      ctx.fillRect(x, y, barWidth, barHeight);

      // Draw value
      ctx.fillStyle = '#374151';
      ctx.font = '12px Inter';
      ctx.textAlign = 'center';
      ctx.fillText(value, x + barWidth / 2, y - 5);

      // Draw label
      ctx.fillText(labels[index], x + barWidth / 2, height - 10);
    });
  }
}

// Page Protection
function requireAuth(requiredRole = null) {
  if (!auth.isAuthenticated()) {
    window.location.href = 'login.html';
    return false;
  }

  if (requiredRole && !auth.hasRole(requiredRole)) {
    window.location.href = 'index.html';
    return false;
  }

  return true;
}

// Initialize common elements
function initCommonElements() {
  // Update user info in navbar
  const userNameElement = document.getElementById('userName');
  const userRoleElement = document.getElementById('userRole');

  if (auth.isAuthenticated()) {
    const user = auth.getUser();
    if (userNameElement) userNameElement.textContent = user.name;
    if (userRoleElement) userRoleElement.textContent = user.role.charAt(0).toUpperCase() + user.role.slice(1);
  }

  // Logout handler
  const logoutBtn = document.getElementById('logoutBtn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => auth.logout());
  }
}
