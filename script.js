// --- JavaScript cho các tương tác cơ bản ---

document.addEventListener("DOMContentLoaded", function() {

    // --- Cuộn mượt khi nhấn vào liên kết navigation ---
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Ngăn hành vi cuộn mặc định

            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // --- Đánh dấu link 'active' khi cuộn ---
    window.addEventListener('scroll', function() {
        const fromTop = window.scrollY + 100; // Thêm offset để chính xác hơn

        navLinks.forEach(link => {
            const section = document.querySelector(link.hash);
            if (
                section &&
                section.offsetTop <= fromTop &&
                section.offsetTop + section.offsetHeight > fromTop
            ) {
                // Xóa 'active' khỏi các liên kết khác
                navLinks.forEach(l => l.classList.remove('active'));
                // Thêm 'active' cho liên kết hiện tại
                link.classList.add('active');
            } else if (section) {
                link.classList.remove('active');
            }
        });
    });

    // --- (Tùy chọn) Hiệu ứng hover kính tinh tế cho thẻ dự án ---
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            // Thêm một lớp nền mờ tạm thời để tạo "ánh sáng bóng"
            this.style.background = `
                linear-gradient(135deg, rgba(255,255,255,0.05), transparent 70%),
                radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.1), rgba(255,255,255,0.05) 50%)
            `;
        });

        card.addEventListener('mouseleave', function() {
            // Khôi phục nền mặc định
            this.style.background = 'rgba(255, 255, 255, 0.05)';
        });
    });

});
