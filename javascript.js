document.addEventListener('DOMContentLoaded', function() {
    const element = document.querySelector('title');
    // 少し遅延させてからクラスを追加
    setTimeout(() => {
    element.classList.add('show');
    }, 100);
});

// スクロール時に h2 にアンダーラインアニメーションを追加
document.addEventListener("DOMContentLoaded", () => {
  const headers = document.querySelectorAll("h2");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-underline");
        // observer.unobserve(entry.target); // 一度だけ発火
      }
    });
  }, {
    threshold: 0.3
  });

  headers.forEach(h => observer.observe(h));
});


// ハンバーガーメニューの表示切替
function toggleMenu() {
  document.getElementById('nav-menu').classList.toggle('show');
}

// ボタンのトグルアクション
document.addEventListener('DOMContentLoaded', function() {
  const menuToggles = document.querySelectorAll('.menu-toggle');
  menuToggles.forEach(function(toggle) {
    toggle.addEventListener('click', function(e) {
      this.classList.toggle('active');
      e.preventDefault();
    });
  });
});
