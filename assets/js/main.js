// Toggle menu mobile
const navbarToggler = document.querySelector('.navbar-toggler');
const navbarCollapse = document.querySelector('#navbarNav');
navbarToggler.addEventListener('click', () => {
    navbarCollapse.classList.toggle('show');
});

// Ambil data kursus dari JSON
fetch('assets/data/courses.json')
    .then(response => response.json())
    .then(data => {
        const popularCourses = document.getElementById('popular-courses');
        data.slice(0, 3).forEach(course => {
            popularCourses.innerHTML += `
                <div class="col-md-4 mb-4">
                    <div class="card">
                        <img src="assets/images/${course.image}" class="card-img-top" alt="${course.title}">
                        <div class="card-body">
                            <h5 class="card-title">${course.title}</h5>
                            <p class="card-text">${course.description}</p>
                            <a href="course-detail.html?id=${course.id}" class="btn btn-outline-primary">Lihat Kursus</a>
                        </div>
                    </div>
                </div>
            `;
        });
    });

// Validasi formulir register
document.getElementById('register-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (password !== confirmPassword) {
        alert('Password tidak cocok!');
        return;
    }
    if (!email.includes('@')) {
        alert('Email tidak valid!');
        return;
    }

    // Sanitasi input (contoh sederhana)
    const sanitizedName = name.replace(/<[^>]*>/g, '');
    localStorage.setItem('user', JSON.stringify({ name: sanitizedName, email }));
    alert('Registrasi berhasil!');
    window.location.href = 'login.html';
});