const menuBtn = document.querySelector('.menu-btn');
    const closeBtn = document.getElementById('close');
    const menu = document.getElementById('menu');

    menuBtn.addEventListener('click', () => {
      menu.classList.add('open');
    });

    closeBtn.addEventListener('click', () => {
      menu.classList.remove('open');
    });