document.addEventListener('DOMContentLoaded', () => {
	// Demo data
	const students = [
		{name: 'Alice Johnson', class: '7A', age: 12, status: 'Active'},
		{name: 'Basil Smith', class: '8B', age: 13, status: 'Active'},
		{name: 'Carla Ruiz', class: '7A', age: 12, status: 'Absent'},
		{name: 'Daniel Lee', class: '9C', age: 14, status: 'Active'},
		{name: 'Eva Patel', class: '8B', age: 13, status: 'Late'},
	];

	const elTable = document.querySelector('#students-table tbody');
	const elStatStudents = document.getElementById('stat-students');
	const elStatTeachers = document.getElementById('stat-teachers');
	const elStatClasses = document.getElementById('stat-classes');
	const elStatAttendance = document.getElementById('stat-attendance');

	function renderTable(list) {
		if (!elTable) return;
		elTable.innerHTML = '';
		list.forEach(s => {
			const tr = document.createElement('tr');
			tr.innerHTML = `<td>${s.name}</td><td>${s.class}</td><td>${s.age}</td><td>${s.status}</td>`;
			elTable.appendChild(tr);
		});
	}

	// stats (demo numbers)
	if (elStatStudents) elStatStudents.textContent = students.length;
	if (elStatTeachers) elStatTeachers.textContent = 12;
	if (elStatClasses) elStatClasses.textContent = 24;
	if (elStatAttendance) elStatAttendance.textContent = '92%';

	renderTable(students);

	// Search filter
	const searchInput = document.getElementById('search');
	if (searchInput) {
		searchInput.addEventListener('input', e => {
			const q = (e.target.value || '').toLowerCase().trim();
			const filtered = students.filter(s => s.name.toLowerCase().includes(q) || s.class.toLowerCase().includes(q));
			renderTable(filtered);
		});
	}

	// --- Landing page testimonials & analytics ---
	const testimonials = [
		{name: 'Dr. Amina Yusuf', role: 'Head of School', text: 'This platform clarified our decision-making with reliable data and strengthened our community through clearer communication.'},
		{name: 'Samuel Mensah', role: 'Parent', text: 'Accessing my child’s progress and teacher feedback has been straightforward — it changed how we support learning at home.'},
		{name: 'Prof. Elaine Carter', role: 'Curriculum Lead', text: 'The analytics help highlight where targeted interventions are most needed, improving outcomes across grades.'}
	];

	const testimonialsEl = document.getElementById('testimonials-list');
	if (testimonialsEl) {
		testimonials.forEach(t => {
			const d = document.createElement('div');
			d.className = 'testimonial';
			d.innerHTML = `<strong>${t.name}</strong> <span class="small">— ${t.role}</span><p>${t.text}</p>`;
			testimonialsEl.appendChild(d);
		});
	}

	// Simple analytics demo
	const avgScoreEl = document.getElementById('avg-score');
	const passRateEl = document.getElementById('pass-rate');
	const gradeChartEl = document.getElementById('grade-chart');
	if (avgScoreEl) avgScoreEl.textContent = '78';
	if (passRateEl) passRateEl.textContent = '84';

	if (gradeChartEl) {
		// demo data: grade -> avg percent
		const gradeData = { '6': 72, '7': 78, '8': 81, '9': 75, '10': 83 };
		Object.keys(gradeData).forEach(g => {
			const barWrap = document.createElement('div');
			barWrap.style.flex = '1';
			barWrap.style.display = 'flex';
			barWrap.style.flexDirection = 'column';
			barWrap.style.alignItems = 'center';
			const bar = document.createElement('div');
			bar.className = 'grade-bar';
			bar.style.height = `${Math.max(8, (gradeData[g] / 100) * 80)}px`;
			bar.title = `${g}th grade — ${gradeData[g]}%`;
			const label = document.createElement('small');
			label.textContent = `${g}`;
			barWrap.appendChild(bar);
			barWrap.appendChild(label);
			gradeChartEl.appendChild(barWrap);
		});
	}

	// --- Dashboard-specific renders: recent activity, notifications, quick links ---
	const activityEl = document.getElementById('activity-list');
	const notificationsEl = document.getElementById('notifications');
	const quickLinksEl = document.getElementById('quick-links');
	const gradeChartDash = document.getElementById('grade-chart-dash');

	const recentActivity = [
		{when: '5m', text: 'New enrolment: Marco Diaz', meta: '7B'},
		{when: '20m', text: 'Attendance recorded — 8B', meta: 'Teacher: Ms. Green'},
		{when: '2h', text: 'Grades uploaded — Math 9C', meta: 'Prof. Allen'},
		{when: '1d', text: 'Parent message — Alya Khan', meta: 'Message received'}
	];

	const notifications = [
		{level: 'info', text: 'System maintenance scheduled on Saturday.'},
		{level: 'warning', text: 'Low disk space on reports export.'}
	];

	const quickLinks = [
		{title: 'Create Class', href: '#'},
		{title: 'Upload Grades', href: '#'},
		{title: 'Run Attendance Report', href: '#'}
	];

	if (activityEl) {
		recentActivity.forEach(a => {
			const d = document.createElement('div');
			d.className = 'activity';
			d.innerHTML = `<div><strong>${a.text}</strong><div class=\"small\">${a.meta}</div></div><div class=\"small\">${a.when}</div>`;
			activityEl.appendChild(d);
		});
	}

	if (notificationsEl) {
		notifications.forEach(n => {
			const d = document.createElement('div');
			d.className = 'notification';
			d.innerHTML = `<strong>${n.level.toUpperCase()}</strong><div class=\"small\">${n.text}</div>`;
			notificationsEl.appendChild(d);
		});
	}

	if (quickLinksEl) {
		quickLinks.forEach(l => {
			const a = document.createElement('a');
			a.href = l.href; a.textContent = l.title; a.className = '';
			// style with quick-links class rules
			quickLinksEl.appendChild(a);
		});
	}

	if (gradeChartDash) {
		const gradeData = { '6': 72, '7': 78, '8': 81, '9': 75 };
		Object.keys(gradeData).forEach(g => {
			const barWrap = document.createElement('div');
			barWrap.style.flex = '1';
			barWrap.style.display = 'flex';
			barWrap.style.flexDirection = 'column';
			barWrap.style.alignItems = 'center';
			const bar = document.createElement('div');
			bar.style.width = '18px';
			bar.style.background = 'linear-gradient(180deg,var(--brand),var(--accent))';
			bar.style.borderRadius = '6px';
			bar.style.height = `${Math.max(8, (gradeData[g] / 100) * 100)}px`;
			bar.title = `${g}th grade — ${gradeData[g]}%`;
			const label = document.createElement('small');
			label.textContent = `${g}`;
			barWrap.appendChild(bar);
			barWrap.appendChild(label);
			gradeChartDash.appendChild(barWrap);
		});
	}
});

