/**
 * PulseOS - Enterprise SaaS Application Controller & 3D WebGL Engine (5/5 Optimized)
 */

document.addEventListener('DOMContentLoaded', () => {
  PulseOS.init();
});

const PulseOS = {
  throughputChart: null,
  departmentChart: null,

  initialData: {
    patients: [
      { id: '1', mrn: '#MRN-90214', name: 'Marcus Sterling', age: 42, gender: 'Male', dept: 'Cardiology', doctor: 'Dr. Robert Chen', status: 'Critical', diagnosis: 'Acute Myocardial Infarction', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100' },
      { id: '2', mrn: '#MRN-90222', name: 'Elena Rostova', age: 29, gender: 'Female', dept: 'Neurology', doctor: 'Dr. Sarah Jenkins', status: 'Stable', diagnosis: 'Migraine Aura Protocol', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100' },
      { id: '3', mrn: '#MRN-90235', name: 'Arthur Pendelton', age: 64, gender: 'Male', dept: 'Orthopedics', doctor: 'Dr. Marcus Vance', status: 'Under Observation', diagnosis: 'Femur Fracture Repair', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100' },
      { id: '4', mrn: '#MRN-90248', name: 'Sophia Tanaka', age: 35, gender: 'Female', dept: 'Oncology', doctor: 'Dr. Emily Watson', status: 'Stable', diagnosis: 'Chemotherapy Cycle 3', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=100' },
      { id: '5', mrn: '#MRN-90259', name: 'David Miller', age: 51, gender: 'Male', dept: 'Gastroenterology', doctor: 'Dr. Robert Chen', status: 'Stable', diagnosis: 'Acute Gastritis Evaluation', img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=100' },
      { id: '6', mrn: '#MRN-90263', name: 'Isabelle Dubois', age: 38, gender: 'Female', dept: 'Endocrinology', doctor: 'Dr. Sarah Jenkins', status: 'Discharged', diagnosis: 'Thyroidectomy Follow-up', img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100' },
      { id: '7', mrn: '#MRN-90271', name: 'James Wilson', age: 72, gender: 'Male', dept: 'Pulmonology', doctor: 'Dr. Marcus Vance', status: 'Under Observation', diagnosis: 'COPD Exacerbation', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100' }
    ],
    doctors: [
      { id: '1', name: 'Dr. Robert Chen', spec: 'Cardiologist', dept: 'Cardiology', phone: '+1 555-0192', status: 'On Duty', img: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=100' },
      { id: '2', name: 'Dr. Sarah Jenkins', spec: 'Neurologist', dept: 'Neurology', phone: '+1 555-0144', status: 'On Duty', img: 'https://images.unsplash.com/photo-1594824813566-78a933f2b602?auto=format&fit=crop&q=80&w=100' },
      { id: '3', name: 'Dr. Marcus Vance', spec: 'Orthopedic Surgeon', dept: 'Orthopedics', phone: '+1 555-0188', status: 'On Duty', img: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=100' },
      { id: '4', name: 'Dr. Emily Watson', spec: 'Oncology Specialist', dept: 'Oncology', phone: '+1 555-0211', status: 'In Surgery', img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=100' }
    ],
    appointments: [
      { id: '1', patient: 'Marcus Sterling', doctor: 'Dr. Robert Chen', dept: 'Cardiology', date: '2026-10-28 10:00 AM', type: 'Consultation', status: 'Confirmed' },
      { id: '2', patient: 'Elena Rostova', doctor: 'Dr. Sarah Jenkins', dept: 'Neurology', date: '2026-10-28 02:30 PM', type: 'Follow-up', status: 'Pending' },
      { id: '3', patient: 'Sophia Tanaka', doctor: 'Dr. Emily Watson', dept: 'Oncology', date: '2026-10-29 11:15 AM', type: 'Routine Checkup', status: 'Confirmed' }
    ],
    departments: [
      { id: '1', name: 'Cardiology', head: 'Dr. Robert Chen', beds: 50, occupancy: '88%' },
      { id: '2', name: 'Neurology', head: 'Dr. Sarah Jenkins', beds: 40, occupancy: '64%' },
      { id: '3', name: 'Orthopedics', head: 'Dr. Marcus Vance', beds: 35, occupancy: '72%' },
      { id: '4', name: 'Oncology Ward', head: 'Dr. Emily Watson', beds: 30, occupancy: '90%' }
    ],
    pharmacy: [
      { id: '1', name: 'Amoxicillin 500mg', category: 'Antibiotics', stock: 450, price: 15.00, status: 'In Stock' },
      { id: '2', name: 'Lipitor 20mg', category: 'Statins', stock: 24, price: 42.50, status: 'Low Stock' },
      { id: '3', name: 'Metformin 850mg', category: 'Antidiabetic', stock: 600, price: 18.20, status: 'In Stock' },
      { id: '4', name: 'Ibuprofen 400mg', category: 'Analgesic', stock: 1200, price: 8.50, status: 'In Stock' }
    ],
    laboratory: [
      { id: '1', testName: 'Comprehensive Blood Panel', patient: 'Marcus Sterling', doctor: 'Dr. Robert Chen', cost: 120.00, status: 'Completed' },
      { id: '2', testName: 'Brain MRI Scan', patient: 'Elena Rostova', doctor: 'Dr. Sarah Jenkins', cost: 450.00, status: 'In Progress' },
      { id: '3', testName: 'Abdominal CT Scan', patient: 'David Miller', doctor: 'Dr. Robert Chen', cost: 380.00, status: 'Pending' }
    ],
    billing: [
      { id: '1', invId: '#INV-8801', patient: 'Marcus Sterling', date: '2026-10-26', amount: 1450.00, status: 'Paid' },
      { id: '2', invId: '#INV-8802', patient: 'Elena Rostova', date: '2026-10-26', amount: 620.00, status: 'Unpaid' },
      { id: '3', invId: '#INV-8803', patient: 'Sophia Tanaka', date: '2026-10-27', amount: 2100.00, status: 'Paid' }
    ]
  },

  getState(key) {
    const data = localStorage.getItem(`pulseos_${key}`);
    return data ? JSON.parse(data) : this.initialData[key];
  },

  setState(key, data) {
    localStorage.setItem(`pulseos_${key}`, JSON.stringify(data));
    this.renderAll();
  },

  init() {
    this.seedLocalStorage();
    this.init3DAnimation();
    this.initNavigation();
    this.initTheme();
    this.initSidebarMobile();
    this.initDropdowns();
    this.initGlobalSearch();
    this.initCharts();
    this.bindEvents();
    this.renderAll();

    setTimeout(() => {
      document.getElementById('loadingScreen')?.classList.add('hidden');
    }, 400);
  },

  seedLocalStorage() {
    Object.keys(this.initialData).forEach(key => {
      if (!localStorage.getItem(`pulseos_${key}`)) {
        localStorage.setItem(`pulseos_${key}`, JSON.stringify(this.initialData[key]));
      }
    });
  },

  init3DAnimation() {
    const canvas = document.getElementById('threeCanvas');
    if (!canvas || typeof THREE === 'undefined') return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    const particlesCount = 700;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 15;
      positions[i + 1] = (Math.random() - 0.5) * 15;
      positions[i + 2] = (Math.random() - 0.5) * 15;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const material = new THREE.PointsMaterial({ size: 0.035, color: 0x2563eb, transparent: true, opacity: 0.5 });
    const particleSystem = new THREE.Points(geometry, material);
    scene.add(particleSystem);
    camera.position.z = 5;

    let clock = new THREE.Clock();
    function animate() {
      requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();
      particleSystem.rotation.y = elapsedTime * 0.04;
      renderer.render(scene, camera);
    }
    animate();

    window.addEventListener('resize', () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });
  },

  initCharts() {
    if (typeof Chart === 'undefined') return;

    const ctxThroughput = document.getElementById('throughputChart')?.getContext('2d');
    if (ctxThroughput) {
      this.throughputChart = new Chart(ctxThroughput, {
        type: 'line',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
          datasets: [
            { label: 'Admissions', data: [65, 78, 90, 81, 95, 110], borderColor: '#2563eb', tension: 0.4 },
            { label: 'Discharges', data: [50, 62, 75, 70, 82, 98], borderColor: '#22c55e', tension: 0.4 }
          ]
        },
        options: { responsive: true, maintainAspectRatio: false }
      });
    }

    const ctxDepartment = document.getElementById('departmentChart')?.getContext('2d');
    if (ctxDepartment) {
      this.departmentChart = new Chart(ctxDepartment, {
        type: 'doughnut',
        data: {
          labels: ['Cardiology', 'Neurology', 'Orthopedics', 'Oncology'],
          datasets: [{ data: [50, 40, 35, 30], backgroundColor: ['#2563eb', '#3b82f6', '#22c55e', '#f59e0b'] }]
        },
        options: { responsive: true, maintainAspectRatio: false }
      });
    }
  },

  toast(message) {
    const container = document.getElementById('toastContainer');
    if (!container) return;
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<i class="ri-checkbox-circle-fill" style="color:var(--success)"></i> <span>${message}</span>`;
    container.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
  },

  showModal(title, htmlContent, onSave) {
    const modal = document.getElementById('appModal');
    if (!modal) return;
    document.getElementById('modalTitle').innerText = title;
    const body = document.getElementById('modalBody');
    body.innerHTML = htmlContent;
    modal.classList.add('show');

    const closeBtn = document.getElementById('modalClose');
    const closeModal = () => modal.classList.remove('show');
    if (closeBtn) closeBtn.onclick = closeModal;

    const form = body.querySelector('form');
    if (form) {
      form.onsubmit = (e) => {
        e.preventDefault();
        if (!form.checkValidity()) {
          form.reportValidity();
          return;
        }
        onSave(new FormData(form));
        closeModal();
      };
    }
  },

  initNavigation() {
    const navItems = document.querySelectorAll('.sidebar-nav .nav-item');
    const sections = document.querySelectorAll('.dashboard-section');

    const activate = (targetId) => {
      sections.forEach(s => s.classList.remove('active'));
      const active = document.getElementById(`view-${targetId}`);
      if (active) active.classList.add('active');

      navItems.forEach(item => {
        item.classList.toggle('active', item.getAttribute('data-section') === targetId);
      });
    };

    navItems.forEach(item => {
      item.addEventListener('click', (e) => {
        e.preventDefault();
        const sec = item.getAttribute('data-section');
        activate(sec);
        window.location.hash = sec;
      });
    });

    const hash = window.location.hash.replace('#', '');
    if (hash) activate(hash);
  },

  initTheme() {
    const themeBtn = document.getElementById('themeToggle');
    const themeIcon = document.getElementById('themeIcon');
    const html = document.documentElement;
    const saved = localStorage.getItem('pulseos_theme') || 'dark';
    html.setAttribute('data-theme', saved);
    if (themeIcon) themeIcon.className = saved === 'dark' ? 'ri-sun-line' : 'ri-moon-line';

    themeBtn?.addEventListener('click', () => {
      const cur = html.getAttribute('data-theme');
      const next = cur === 'light' ? 'dark' : 'light';
      html.setAttribute('data-theme', next);
      localStorage.setItem('pulseos_theme', next);
      if (themeIcon) themeIcon.className = next === 'dark' ? 'ri-sun-line' : 'ri-moon-line';
    });
  },

  initSidebarMobile() {
    const sidebar = document.getElementById('sidebar');
    const toggle = document.getElementById('sidebarToggle');
    const close = document.getElementById('sidebarClose');
    const overlay = document.getElementById('sidebarOverlay');

    toggle?.addEventListener('click', () => { sidebar?.classList.add('open'); overlay?.classList.add('show'); });
    close?.addEventListener('click', () => { sidebar?.classList.remove('open'); overlay?.classList.remove('show'); });
    overlay?.addEventListener('click', () => { sidebar?.classList.remove('open'); overlay?.classList.remove('show'); });
  },

  initDropdowns() {
    const notifBtn = document.getElementById('notifBtn');
    const notifDropdown = document.getElementById('notifDropdown');
    const userBtn = document.getElementById('userProfileBtn');
    const profileDropdown = document.getElementById('profileDropdown');

    notifBtn?.addEventListener('click', (e) => {
      e.stopPropagation();
      profileDropdown?.classList.remove('show');
      notifDropdown?.classList.toggle('show');
    });

    userBtn?.addEventListener('click', (e) => {
      e.stopPropagation();
      notifDropdown?.classList.remove('show');
      profileDropdown?.classList.toggle('show');
    });

    document.addEventListener('click', () => {
      notifDropdown?.classList.remove('show');
      profileDropdown?.classList.remove('show');
    });
  },

  initGlobalSearch() {
    const searchInput = document.getElementById('globalSearch');
    window.addEventListener('keydown', (e) => {
      if (e.key === '/' && document.activeElement !== searchInput) {
        e.preventDefault();
        searchInput?.focus();
      }
    });
    searchInput?.addEventListener('input', (e) => {
      const q = e.target.value.toLowerCase();
      this.renderPatients(q);
      this.renderDoctors(q);
    });
  },

  bindEvents() {
    document.getElementById('btnRefreshDash')?.addEventListener('click', () => {
      this.renderAll();
      this.toast('Telemetry & Dynamic Metrics Refreshed');
    });

    document.getElementById('btnResetAllData')?.addEventListener('click', () => {
      localStorage.clear();
      this.seedLocalStorage();
      this.renderAll();
      this.toast('Local State Reset to Default');
    });

    document.getElementById('btnAddPatient')?.addEventListener('click', () => this.addPatientModal());
    document.getElementById('btnQuickAdmit')?.addEventListener('click', () => this.addPatientModal());
    document.getElementById('searchPatients')?.addEventListener('input', (e) => this.renderPatients(e.target.value));
    document.getElementById('filterPatientStatus')?.addEventListener('change', () => this.renderPatients());

    document.getElementById('btnAddDoctor')?.addEventListener('click', () => this.addDoctorModal());
    document.getElementById('searchDoctors')?.addEventListener('input', (e) => this.renderDoctors(e.target.value));
    document.getElementById('btnAddAppointment')?.addEventListener('click', () => this.addAppointmentModal());
    document.getElementById('btnAddDepartment')?.addEventListener('click', () => this.addDepartmentModal());
    document.getElementById('btnAddPharmacy')?.addEventListener('click', () => this.addMedicineModal());
    document.getElementById('btnAddLabTest')?.addEventListener('click', () => this.addLabModal());
    document.getElementById('btnAddBilling')?.addEventListener('click', () => this.addInvoiceModal());

    document.getElementById('btnSaveSettings')?.addEventListener('click', () => {
      const name = document.getElementById('settingFullName').value;
      document.getElementById('headerUserName').innerText = name;
      this.toast('Profile Settings Saved');
    });
  },

  renderAll() {
    this.renderDashboard();
    this.renderPatients();
    this.renderDoctors();
    this.renderAppointments();
    this.renderDepartments();
    this.renderPharmacy();
    this.renderLaboratory();
    this.renderBilling();
    this.renderReports();
  },

  renderDashboard() {
    const patients = this.getState('patients');
    const doctors = this.getState('doctors');
    const appointments = this.getState('appointments');
    const billing = this.getState('billing');

    document.getElementById('dashTotalPatients').innerText = patients.length;
    document.getElementById('dashTotalDoctors').innerText = doctors.length;
    document.getElementById('dashTotalAppointments').innerText = appointments.length;
    document.getElementById('navBadgePatients').innerText = patients.length;

    const totalRev = billing.reduce((acc, curr) => acc + Number(curr.amount || 0), 0);
    document.getElementById('dashTotalRevenue').innerText = totalRev.toLocaleString();

    const criticalTbody = document.getElementById('dashCriticalTable');
    if (criticalTbody) {
      const criticals = patients.filter(p => p.status === 'Critical' || p.status === 'Under Observation').slice(0, 4);
      criticalTbody.innerHTML = criticals.length ? criticals.map(p => `
        <tr>
          <td><div class="patient-cell"><img src="${p.img}" class="table-avatar"><span>${p.name}</span></div></td>
          <td><code>${p.mrn}</code></td>
          <td>${p.dept}</td>
          <td><span class="badge-status badge-${p.status === 'Critical' ? 'critical' : 'observation'}">${p.status}</span></td>
        </tr>
      `).join('') : `<tr><td colspan="4" class="text-center text-muted">No critical patients right now.</td></tr>`;
    }

    const apptTbody = document.getElementById('dashApptTable');
    if (apptTbody) {
      apptTbody.innerHTML = appointments.slice(0, 4).map(a => `
        <tr>
          <td><strong>${a.patient}</strong><br><small class="text-muted">${a.doctor}</small></td>
          <td>${a.type}</td>
          <td>${a.date}</td>
        </tr>
      `).join('') || `<tr><td colspan="3" class="text-center text-muted">No upcoming appointments.</td></tr>`;
    }
  },

  renderPatients(filterQuery = '') {
    const patients = this.getState('patients');
    const statusFilter = document.getElementById('filterPatientStatus')?.value || '';
    const tbody = document.getElementById('patientTableBody');
    if (!tbody) return;

    let filtered = patients.filter(p => {
      const matchQuery = p.name.toLowerCase().includes(filterQuery.toLowerCase()) || 
                         p.mrn.toLowerCase().includes(filterQuery.toLowerCase()) ||
                         p.diagnosis.toLowerCase().includes(filterQuery.toLowerCase());
      const matchStatus = statusFilter ? p.status === statusFilter : true;
      return matchQuery && matchStatus;
    });

    if (filtered.length === 0) {
      tbody.innerHTML = `<tr><td colspan="7" class="text-center text-muted" style="padding: 2rem;"><i class="ri-folder-open-line" style="font-size: 2rem; display: block; margin-bottom: 0.5rem;"></i>No matching patient records found.</td></tr>`;
      return;
    }

    tbody.innerHTML = filtered.map(p => `
      <tr>
        <td><div class="patient-cell"><img src="${p.img}" class="table-avatar"><div><strong>${p.name}</strong><br><small class="text-muted">${p.gender}, ${p.age} yrs</small></div></div></td>
        <td><code>${p.mrn}</code></td>
        <td>${p.dept}</td>
        <td>${p.doctor}</td>
        <td>${p.diagnosis}</td>
        <td><span class="badge-status badge-${p.status === 'Critical' ? 'critical' : p.status === 'Stable' ? 'stable' : p.status === 'Discharged' ? 'discharged' : 'observation'}">${p.status}</span></td>
        <td><button class="icon-btn-sm btn-danger" onclick="PulseOS.deletePatient('${p.id}')" title="Discharge / Remove"><i class="ri-delete-bin-line"></i></button></td>
      </tr>
    `).join('');
  },

  addPatientModal() {
    const html = `
      <form>
        <div class="form-grid">
          <div class="form-group"><label>Full Name</label><input type="text" name="name" class="form-input" required></div>
          <div class="form-group"><label>Age</label><input type="number" name="age" class="form-input" required></div>
        </div>
        <div class="form-grid">
          <div class="form-group"><label>Gender</label><select name="gender" class="form-select"><option>Male</option><option>Female</option></select></div>
          <div class="form-group"><label>Department</label><input type="text" name="dept" class="form-input" value="Cardiology" required></div>
        </div>
        <div class="form-group"><label>Attending Physician</label><input type="text" name="doctor" class="form-input" value="Dr. Robert Chen" required></div>
        <div class="form-group"><label>Diagnosis</label><input type="text" name="diagnosis" class="form-input" required></div>
        <div class="form-group"><label>Triage Status</label>
          <select name="status" class="form-select">
            <option>Stable</option><option>Critical</option><option>Under Observation</option><option>Discharged</option>
          </select>
        </div>
        <button type="submit" class="btn btn-primary w-full mt-1">Admit Patient</button>
      </form>
    `;
    this.showModal('Register New Patient', html, (formData) => {
      const list = this.getState('patients');
      list.unshift({
        id: Date.now().toString(),
        mrn: `#MRN-${Math.floor(90000 + Math.random() * 1000)}`,
        name: formData.get('name'),
        age: formData.get('age'),
        gender: formData.get('gender'),
        dept: formData.get('dept'),
        doctor: formData.get('doctor'),
        diagnosis: formData.get('diagnosis'),
        status: formData.get('status'),
        img: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=100'
      });
      this.setState('patients', list);
      this.toast('✔ Patient Admitted Successfully');
    });
  },

  deletePatient(id) {
    this.setState('patients', this.getState('patients').filter(p => p.id !== id));
    this.toast('Patient Record Updated');
  },

  renderDoctors(filterQuery = '') {
    const doctors = this.getState('doctors');
    const tbody = document.getElementById('doctorTableBody');
    if (!tbody) return;

    let filtered = doctors.filter(d => d.name.toLowerCase().includes(filterQuery.toLowerCase()) || d.spec.toLowerCase().includes(filterQuery.toLowerCase()));

    tbody.innerHTML = filtered.length ? filtered.map(d => `
      <tr>
        <td><div class="patient-cell"><img src="${d.img}" class="table-avatar"><span>${d.name}</span></div></td>
        <td>${d.spec}</td>
        <td>${d.dept}</td>
        <td><code>${d.phone}</code></td>
        <td><span class="badge-status badge-stable">${d.status}</span></td>
        <td><button class="icon-btn-sm btn-danger" onclick="PulseOS.deleteDoctor('${d.id}')"><i class="ri-delete-bin-line"></i></button></td>
      </tr>
    `).join('') : `<tr><td colspan="6" class="text-center text-muted">No physicians found.</td></tr>`;
  },

  addDoctorModal() {
    const html = `
      <form>
        <div class="form-group"><label>Physician Full Name</label><input type="text" name="name" class="form-input" required></div>
        <div class="form-grid">
          <div class="form-group"><label>Specialty</label><input type="text" name="spec" class="form-input" required></div>
          <div class="form-group"><label>Department</label><input type="text" name="dept" class="form-input" required></div>
        </div>
        <div class="form-group"><label>Phone Extension</label><input type="text" name="phone" class="form-input" value="+1 555-0" required></div>
        <button type="submit" class="btn btn-primary w-full mt-1">Add Physician to Roster</button>
      </form>
    `;
    this.showModal('Add Medical Faculty', html, (formData) => {
      const list = this.getState('doctors');
      list.push({
        id: Date.now().toString(),
        name: formData.get('name'),
        spec: formData.get('spec'),
        dept: formData.get('dept'),
        phone: formData.get('phone'),
        status: 'On Duty',
        img: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=100'
      });
      this.setState('doctors', list);
      this.toast('✔ Physician Added');
    });
  },

  deleteDoctor(id) {
    this.setState('doctors', this.getState('doctors').filter(d => d.id !== id));
    this.toast('Physician Removed');
  },

  renderAppointments() {
    const appts = this.getState('appointments');
    const tbody = document.getElementById('appointmentTableBody');
    if (!tbody) return;

    tbody.innerHTML = appts.length ? appts.map(a => `
      <tr>
        <td><strong>${a.patient}</strong></td>
        <td>${a.doctor}</td>
        <td>${a.dept}</td>
        <td>${a.date}</td>
        <td>${a.type}</td>
        <td><span class="badge-status badge-observation">${a.status}</span></td>
        <td><button class="icon-btn-sm btn-danger" onclick="PulseOS.deleteAppointment('${a.id}')"><i class="ri-delete-bin-line"></i></button></td>
      </tr>
    `).join('') : `<tr><td colspan="7" class="text-center text-muted">No appointments scheduled.</td></tr>`;
  },

  addAppointmentModal() {
    const html = `
      <form>
        <div class="form-group"><label>Patient Name</label><input type="text" name="patient" class="form-input" required></div>
        <div class="form-grid">
          <div class="form-group"><label>Doctor</label><input type="text" name="doctor" class="form-input" value="Dr. Robert Chen" required></div>
          <div class="form-group"><label>Department</label><input type="text" name="dept" class="form-input" value="Cardiology" required></div>
        </div>
        <div class="form-grid">
          <div class="form-group"><label>Date & Time</label><input type="text" name="date" class="form-input" value="2026-10-30 09:00 AM" required></div>
          <div class="form-group"><label>Type</label><select name="type" class="form-select"><option>Consultation</option><option>Follow-up</option><option>Surgery</option></select></div>
        </div>
        <button type="submit" class="btn btn-primary w-full mt-1">Schedule Appointment</button>
      </form>
    `;
    this.showModal('Schedule Consultation', html, (formData) => {
      const list = this.getState('appointments');
      list.push({
        id: Date.now().toString(),
        patient: formData.get('patient'),
        doctor: formData.get('doctor'),
        dept: formData.get('dept'),
        date: formData.get('date'),
        type: formData.get('type'),
        status: 'Confirmed'
      });
      this.setState('appointments', list);
      this.toast('✔ Appointment Booked');
    });
  },

  deleteAppointment(id) {
    this.setState('appointments', this.getState('appointments').filter(a => a.id !== id));
    this.toast('Appointment Cancelled');
  },

  renderDepartments() {
    const depts = this.getState('departments');
    const tbody = document.getElementById('departmentTableBody');
    if (!tbody) return;

    tbody.innerHTML = depts.map(d => `
      <tr>
        <td><strong>${d.name}</strong></td>
        <td>${d.head}</td>
        <td>${d.beds} Beds</td>
        <td>${d.occupancy}</td>
        <td><button class="icon-btn-sm btn-danger" onclick="PulseOS.deleteDepartment('${d.id}')"><i class="ri-delete-bin-line"></i></button></td>
      </tr>
    `).join('');
  },

  addDepartmentModal() {
    const html = `
      <form>
        <div class="form-group"><label>Department Name</label><input type="text" name="name" class="form-input" required></div>
        <div class="form-grid">
          <div class="form-group"><label>Department Head</label><input type="text" name="head" class="form-input" required></div>
          <div class="form-group"><label>Total Beds</label><input type="number" name="beds" class="form-input" value="30" required></div>
        </div>
        <button type="submit" class="btn btn-primary w-full mt-1">Create Ward Unit</button>
      </form>
    `;
    this.showModal('Add Ward Unit', html, (formData) => {
      const list = this.getState('departments');
      list.push({
        id: Date.now().toString(),
        name: formData.get('name'),
        head: formData.get('head'),
        beds: formData.get('beds'),
        occupancy: '50%'
      });
      this.setState('departments', list);
      this.toast('✔ Ward Added');
    });
  },

  deleteDepartment(id) {
    this.setState('departments', this.getState('departments').filter(d => d.id !== id));
    this.toast('Ward Unit Removed');
  },

  renderPharmacy() {
    const stock = this.getState('pharmacy');
    const tbody = document.getElementById('pharmacyTableBody');
    if (!tbody) return;

    tbody.innerHTML = stock.map(s => `
      <tr>
        <td><strong>${s.name}</strong></td>
        <td>${s.category}</td>
        <td>${s.stock} units</td>
        <td>$${Number(s.price).toFixed(2)}</td>
        <td><span class="badge-status badge-${s.status === 'In Stock' ? 'stable' : 'critical'}">${s.status}</span></td>
        <td><button class="icon-btn-sm btn-danger" onclick="PulseOS.deleteMedicine('${s.id}')"><i class="ri-delete-bin-line"></i></button></td>
      </tr>
    `).join('');
  },

  addMedicineModal() {
    const html = `
      <form>
        <div class="form-group"><label>Medication Name</label><input type="text" name="name" class="form-input" required></div>
        <div class="form-grid">
          <div class="form-group"><label>Category</label><input type="text" name="category" class="form-input" value="Antibiotics" required></div>
          <div class="form-group"><label>Stock Units</label><input type="number" name="stock" class="form-input" value="100" required></div>
        </div>
        <div class="form-group"><label>Unit Price ($)</label><input type="number" step="0.01" name="price" class="form-input" value="10.00" required></div>
        <button type="submit" class="btn btn-primary w-full mt-1">Add Medication</button>
      </form>
    `;
    this.showModal('Add Pharmacy Stock', html, (formData) => {
      const list = this.getState('pharmacy');
      list.push({
        id: Date.now().toString(),
        name: formData.get('name'),
        category: formData.get('category'),
        stock: formData.get('stock'),
        price: formData.get('price'),
        status: 'In Stock'
      });
      this.setState('pharmacy', list);
      this.toast('✔ Medication Added');
    });
  },

  deleteMedicine(id) {
    this.setState('pharmacy', this.getState('pharmacy').filter(s => s.id !== id));
    this.toast('Medication Stock Removed');
  },

  renderLaboratory() {
    const labs = this.getState('laboratory');
    const tbody = document.getElementById('labTableBody');
    if (!tbody) return;

    tbody.innerHTML = labs.map(l => `
      <tr>
        <td><strong>${l.testName}</strong></td>
        <td>${l.patient}</td>
        <td>${l.doctor}</td>
        <td>$${Number(l.cost).toFixed(2)}</td>
        <td><span class="badge-status badge-observation">${l.status}</span></td>
        <td><button class="icon-btn-sm btn-danger" onclick="PulseOS.deleteLab('${l.id}')"><i class="ri-delete-bin-line"></i></button></td>
      </tr>
    `).join('');
  },

  addLabModal() {
    const html = `
      <form>
        <div class="form-group"><label>Diagnostic Test Name</label><input type="text" name="testName" class="form-input" required></div>
        <div class="form-grid">
          <div class="form-group"><label>Patient Name</label><input type="text" name="patient" class="form-input" required></div>
          <div class="form-group"><label>Ordering Doctor</label><input type="text" name="doctor" class="form-input" value="Dr. Robert Chen" required></div>
        </div>
        <div class="form-group"><label>Cost ($)</label><input type="number" step="0.01" name="cost" class="form-input" value="150.00" required></div>
        <button type="submit" class="btn btn-primary w-full mt-1">Order Lab Test</button>
      </form>
    `;
    this.showModal('Order Diagnostic Test', html, (formData) => {
      const list = this.getState('laboratory');
      list.push({
        id: Date.now().toString(),
        testName: formData.get('testName'),
        patient: formData.get('patient'),
        doctor: formData.get('doctor'),
        cost: formData.get('cost'),
        status: 'Pending'
      });
      this.setState('laboratory', list);
      this.toast('✔ Lab Test Ordered');
    });
  },

  deleteLab(id) {
    this.setState('laboratory', this.getState('laboratory').filter(l => l.id !== id));
    this.toast('Lab Test Record Removed');
  },

  renderBilling() {
    const billing = this.getState('billing');
    const tbody = document.getElementById('billingTableBody');
    if (!tbody) return;

    tbody.innerHTML = billing.map(b => `
      <tr>
        <td><code>${b.invId}</code></td>
        <td><strong>${b.patient}</strong></td>
        <td>${b.date}</td>
        <td>$${Number(b.amount).toFixed(2)}</td>
        <td><span class="badge-status badge-${b.status === 'Paid' ? 'stable' : 'critical'}">${b.status}</span></td>
        <td><button class="icon-btn-sm btn-danger" onclick="PulseOS.deleteBilling('${b.id}')"><i class="ri-delete-bin-line"></i></button></td>
      </tr>
    `).join('');
  },

  addInvoiceModal() {
    const html = `
      <form>
        <div class="form-group"><label>Patient Name</label><input type="text" name="patient" class="form-input" required></div>
        <div class="form-grid">
          <div class="form-group"><label>Amount ($)</label><input type="number" step="0.01" name="amount" class="form-input" required></div>
          <div class="form-group"><label>Payment Status</label>
            <select name="status" class="form-select">
              <option>Paid</option><option>Unpaid</option>
            </select>
          </div>
        </div>
        <button type="submit" class="btn btn-primary w-full mt-1">Issue Invoice</button>
      </form>
    `;
    this.showModal('Issue Invoice', html, (formData) => {
      const list = this.getState('billing');
      list.push({
        id: Date.now().toString(),
        invId: `#INV-${Math.floor(8000 + Math.random() * 1000)}`,
        patient: formData.get('patient'),
        date: new Date().toISOString().split('T')[0],
        amount: parseFloat(formData.get('amount')),
        status: formData.get('status')
      });
      this.setState('billing', list);
      this.toast('✔ Invoice Issued');
    });
  },

  deleteBilling(id) {
    this.setState('billing', this.getState('billing').filter(b => b.id !== id));
    this.toast('Invoice Record Removed');
  },

  renderReports() {
    const billing = this.getState('billing');
    const patients = this.getState('patients');
    const appts = this.getState('appointments');

    const totalRev = billing.reduce((acc, curr) => acc + Number(curr.amount || 0), 0);
    const revEl = document.getElementById('repTotalRev');
    const patEl = document.getElementById('repTotalPats');
    const apptEl = document.getElementById('repTotalAppts');

    if (revEl) revEl.innerText = totalRev.toLocaleString();
    if (patEl) patEl.innerText = patients.length;
    if (apptEl) apptEl.innerText = appts.length;
  }
};