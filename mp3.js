document.addEventListener('DOMContentLoaded', () => {
    const audio = document.querySelector('audio');
    const currentTimeEl = document.querySelector('.current-time');
    const durationEl = document.querySelector('.duration');

    // อัปเดตเวลาปัจจุบัน
    audio.addEventListener('timeupdate', () => {
        const currentTime = formatTime(audio.currentTime);
        currentTimeEl.textContent = currentTime;
    });

    // ตั้งค่าเวลาทั้งหมดเมื่อโหลดไฟล์เสียง
    audio.addEventListener('loadedmetadata', () => {
        const duration = formatTime(audio.duration);
        durationEl.textContent = duration;
    });

    // ฟังก์ชันแปลงวินาทีเป็นรูปแบบ mm:ss
    function formatTime(seconds) {
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    }
});

