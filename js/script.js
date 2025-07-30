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
  const btn = document.getElementById('btn');
  const nav = document.getElementById('nav-menu');

  if (nav.classList.contains('showing')) {
    // 閉じる処理
    nav.classList.remove('showing');
    nav.classList.add('hiding');
    btn.classList.remove('active');

    // アニメーション終了後に display: none 相当
    nav.addEventListener('animationend', function handleAnimationEnd() {
      nav.classList.remove('hiding');
      nav.style.display = 'none';
      nav.removeEventListener('animationend', handleAnimationEnd);
    });

  } else {
    // 開く処理
    nav.style.display = 'flex';
    nav.classList.add('showing');
    btn.classList.add('active');
  }
}


