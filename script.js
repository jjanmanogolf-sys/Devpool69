document.addEventListener("DOMContentLoaded", () => {
    
    // ==========================================
    // 1. Effect Fade-in ตอนโหลดหน้าเว็บ (ของเดิม)
    // ==========================================
    const mainContent = document.querySelector('.main-content');
    if (mainContent) {
        mainContent.style.opacity = '0';
        mainContent.style.transition = 'opacity 1s ease-in-out';
        setTimeout(() => { mainContent.style.opacity = '1'; }, 200);
    }

    // ==========================================
    // 2. เอฟเฟกต์เลื่อนหัวข้อเมื่อเอาเมาส์ไปชี้
    // ==========================================
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

    // ==========================================
    // 3. เปลี่ยนรูปโปรไฟล์เมื่อเมาส์ชี้ (ของเดิมที่แก้ไขตามไฟล์ของคุณ)
    // ==========================================
    const profileImg = document.getElementById('profile-img');
    if (profileImg) {
        profileImg.style.transition = 'all 0.3s ease';
        profileImg.addEventListener('mouseenter', () => {
            profileImg.src = 'pea.jpg';
            profileImg.style.transform = 'scale(1.03)'; // เพิ่มการขยายเล็กน้อยให้ดูมีมิติ
        });
        profileImg.addEventListener('mouseleave', () => {
            profileImg.src = 'jitphanu.png'; 
            profileImg.style.transform = 'scale(1)';
        });
    }

   // ==========================================
    // 4. Click to Copy Contact + แสดงไอคอนเมื่อ Hover
    // ==========================================
    const copyItems = document.querySelectorAll('.contact-section p');
    copyItems.forEach(item => {
        item.classList.add('copyable'); // เพิ่ม Class เพื่อให้ CSS ใส่ไอคอนตอน Hover
        item.title = 'Click to copy';   // ขึ้นคำแนะนำ Tooltip ของเบราว์เซอร์
        
        item.addEventListener('click', () => {
            // ดึงข้อความข้างในออกมา (ตัดไอคอนออก)
            const textToCopy = item.textContent.trim();
            
            // ใช้คัดลอกลง Clipboard
            navigator.clipboard.writeText(textToCopy).then(() => {
                // สร้างกล่องแจ้งเตือนสั้นๆ (Toast)
                showToast(`Copied: ${textToCopy}`);
            });
        });
    });

    // ฟังก์ชันสร้างกล่องแจ้งเตือนเด้งขึ้นมา
    function showToast(message) {
        const toast = document.createElement('div');
        toast.textContent = message;
        toast.style.position = 'fixed';
        toast.style.bottom = '20px';
        toast.style.right = '20px';
        toast.style.backgroundColor = '#3b1e7b';
        toast.style.color = '#fff';
        toast.style.padding = '10px 20px';
        toast.style.borderRadius = '5px';
        toast.style.boxShadow = '0 4px 10px rgba(0,0,0,0.2)';
        toast.style.zIndex = '1000';
        toast.style.fontSize = '0.9rem';
        
        document.body.appendChild(toast);
        
        // หายไปเองใน 2.5 วินาที
        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transition = 'opacity 0.5s ease';
            setTimeout(() => toast.remove(), 500);
        }, 2000);
    }

    // ==========================================
    // 5. [ฟังก์ชันแนะนำ 2] Interactive Timeline Highlight
    // ==========================================
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach(item => {
        item.style.transition = 'all 0.3s ease';
        
        // เมื่อเมาส์ชี้ไปที่งานนั้นๆ กล่องจะเด่นขึ้นมา และจุด Timeline จะขยาย
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'translateX(10px)';
            const dot = item.querySelector('.timeline-dot');
            if(dot) {
                dot.style.backgroundColor = '#ffb300'; // เปลี่ยนจุดเป็นสีทอง/ส้ม
                dot.style.transform = 'scale(1.4)';
                dot.style.transition = 'all 0.3s ease';
            }
        });

        item.addEventListener('mouseleave', () => {
            item.style.transform = 'translateX(0)';
            const dot = item.querySelector('.timeline-dot');
            if(dot) {
                dot.style.backgroundColor = '#3b1e7b'; // กลับเป็นสีม่วงเดิม
                dot.style.transform = 'scale(1)';
            }
        });
    });
});