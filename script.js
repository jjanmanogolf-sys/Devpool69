document.addEventListener("DOMContentLoaded", () => {
    // 1. เพิ่ม Effect Fade-in ให้กับเนื้อหาฝั่งขวาตอนโหลดหน้าเว็บ
    const mainContent = document.querySelector('.main-content');
    mainContent.style.opacity = '0';
    mainContent.style.transition = 'opacity 1s ease-in-out';
    
    setTimeout(() => {
        mainContent.style.opacity = '1';
    }, 200);

    // 2. เอฟเฟกต์เปลี่ยนสีข้อความชื่อหัวข้อเมื่อเอาเมาส์ไปชี้ (Hover)
    const sections = document.querySelectorAll('.content-section h2, .sidebar-section h2');
    
    sections.forEach(section => {
        section.addEventListener('mouseenter', () => {
            section.style.transform = 'translateX(5px)';
            section.style.transition = 'all 0.3s ease';
        });
        section.addEventListener('mouseleave', () => {
            section.style.transform = 'translateX(0)';
        });
    });
});