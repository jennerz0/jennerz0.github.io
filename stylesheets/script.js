document.addEventListener('DOMContentLoaded', function() {
    // 1. 获取所有内容块和导航链接
    const contentBlocks = document.querySelectorAll('.content-block');
    const navLinks = document.querySelectorAll('#main-navbar a');

    // 2. 切换内容的函数
    function showContent(targetId) {
        // 隐藏所有内容块
        contentBlocks.forEach(block => {
            block.style.display = 'none';
        });
        
        // 显示目标内容块
        const targetBlock = document.getElementById(targetId);
        if (targetBlock) {
            targetBlock.style.display = 'block';
        }

        // 切换导航链接的激活状态
        navLinks.forEach(link => {
            link.classList.remove('nav-active');
            if (link.getAttribute('data-target') === targetId) {
                 link.classList.add('nav-active');
            }
        });
    }

    // 3. 绑定点击事件
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // 阻止默认的链接跳转行为
            const targetId = link.getAttribute('data-target');
            showContent(targetId);
        });
    });

    // 4. 页面加载时默认显示 'About Me'
    showContent('about-me-content'); 
});