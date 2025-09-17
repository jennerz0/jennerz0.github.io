document.addEventListener('DOMContentLoaded', function() {
    const contentBlocks = document.querySelectorAll('.content-block');
    const navLinks = document.querySelectorAll('#main-navbar a');

    function showContent(targetId) {
        contentBlocks.forEach(block => {
            block.style.display = 'none';
        });
        
        const targetBlock = document.getElementById(targetId);
        if (targetBlock) {
            targetBlock.style.display = 'block';
        }

        navLinks.forEach(link => {
            link.classList.remove('nav-active');
            if (link.getAttribute('data-target') === targetId) {
                 link.classList.add('nav-active');
            }
        });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); 
            const targetId = link.getAttribute('data-target');
            showContent(targetId);
        });
    });

    showContent('about-me-content'); 
});