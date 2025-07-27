document.addEventListener('DOMContentLoaded', function() {
    const element = document.querySelector('.title');
    // 少し遅延させてからクラスを追加
    setTimeout(() => {
    element.classList.add('show');
    }, 100);
});