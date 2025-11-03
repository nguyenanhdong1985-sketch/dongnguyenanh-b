// Alert khi nhấn vào nút "Discover More"
const discoverBtn = document.getElementById('discoverBtn');
discoverBtn.addEventListener('click', function(e) {
  e.preventDefault(); // tránh mở link mặc định
  alert('Cảm ơn bạn đã khám phá thêm 🌿');
});
