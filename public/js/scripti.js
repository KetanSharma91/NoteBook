window.onload = function () {

  const mode = document.querySelector('#theme');
  let menuIcon = document.querySelector('.menu');
  let navbar = document.querySelector('nav');

  let isDarkMode = false;
  if (mode) { // Check if 'theme' element exists
    mode.addEventListener('click', () => {
      const root = document.documentElement;

      if (isDarkMode) {
        root.style.setProperty('--text-color', '#111');
        root.style.setProperty('--back-color', '#fff');
        root.style.setProperty('--box-shadow', '0px 3px 16px 0px rgba(0, 0, 0, 0.6)');
        menuIcon.style.filter = 'invert(1)';
        mode.textContent = 'Dark';
      } else {
        root.style.setProperty('--text-color', '#fff');
        root.style.setProperty('--back-color', '#111');
        root.style.setProperty('--box-shadow', '0px 3px 16px 0px rgba(255, 255, 255, 0.6)');
        menuIcon.style.filter = 'invert(0)';
        mode.textContent = 'Light';
      }

      // Flip the theme state
      isDarkMode = !isDarkMode;
    });
  }

  if (menuIcon) {
    menuIcon.onclick = () => {
      navbar.classList.toggle('show');
    };
  }


  // document.querySelectorAll('.navlist > .navlista').forEach(link => {
  //   link.addEventListener('click', function(event) {
  //       event.preventDefault(); // Prevent page reload

  //       // Toggle 'show' class on the next sibling element (the <ul> submenu)
  //       const dropdownMenu = link.nextElementSibling;
  //       dropdownMenu.classList.toggle('active');
  //   });
  // });

  // document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  //   anchor.addEventListener('click', function (e) {
  //     e.preventDefault();

  //     const targetElement = document.querySelector(this.getAttribute('href'));
  //     if (targetElement) {
  //       targetElement.scrollIntoView({
  //         behavior: 'smooth',
  //         block: 'start'
  //       });
  //     }
  //   });
  // });


  // Adding a note js
  const notewriter = document.getElementById('notewriter');
  const titleInput = document.getElementById('title');
  const descriptionInput = document.getElementById('description');
  const iconRow = document.getElementById('iconRow');
  const closeBtn = document.getElementById('closeBtn');

  if (notewriter) {
    notewriter.addEventListener('click', () => {
      console.log('clicked')
      notewriter.classList.add('hidden');
      titleInput.classList.remove('hidden');
      descriptionInput.classList.remove('hidden');
      iconRow.classList.remove('hidden');
      titleInput.focus();
    });

    // Event listener for Close button
    closeBtn.addEventListener('click', () => {
      notewriter.classList.remove('hidden');
      titleInput.classList.add('hidden');
      descriptionInput.classList.add('hidden');
      iconRow.classList.add('hidden');
      titleInput.value = '';
      descriptionInput.value = '';
    });
  }

  const searchInput = document.getElementById('search-input');
  const content = document.getElementById('content');
  
  if (searchInput) {
    searchInput.addEventListener('input', () => {
      const query = searchInput.value.trim();
      resetHighlights();
      if (query) {
        highlightMatches(query);
      }
    });

    function highlightMatches(query) {
      const regex = new RegExp(`(${query})`, 'gi');
      content.innerHTML = content.innerHTML.replace(regex, '<mark>$1</mark>');
    }

    function resetHighlights() {
      const originalText = content.textContent || content.innerText;
      content.innerHTML = originalText;
    }
  }

  // Model working js
  const modal = document.getElementById("modal");
  const openModalBtn = document.getElementById("openModalBtn");
  // const closeModalBtn = document.getElementById("closeModalBtn");
  const closeModalBtnFooter = document.getElementById("closeModalBtnFooter");

  if (modal) {

    openModalBtn.onclick = function () {
      modal.style.display = "block";
    }

    // closeModalBtn.onclick = function () {
    //   modal.style.display = "none";
    // }

    closeModalBtnFooter.onclick = function () {
      modal.style.display = "none";
    }

    window.onclick = function (event) {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    }
  }

}