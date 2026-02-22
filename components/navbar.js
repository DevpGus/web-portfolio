class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Corinthia:wght@400;700&family=Macondo+Swash+Caps&display=swap" rel="stylesheet">
      </head>
      <style>
        nav {
          background: white;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          padding: 1.5rem 2rem;
          position: fixed;
          width: 100%;
          top: 0;
          z-index: 1000;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .logo {
          color: #4f46e5;
          font-weight: 700;
          font-size: 1.5rem;
          display: flex;
          align-items: center;
          font-family: 'Macondo Swash Caps', cursive;
        }
        .logo i {
          margin-right: 0.5rem;
        }
        ul {
          display: flex;
          gap: 2rem;
          list-style: none;
          margin-right: 4rem;
          padding: 0;
        }
        a {
          color: #4b5563;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.2s;
          position: relative;
        }
        a:hover {
          color: #4f46e5;
        }
        a.active {
          color: #4f46e5;
          font-weight: 600;
        }
        a.active::after {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 0;
          width: 100%;
          height: 3px;
          background: #4f46e5;
          border-radius: 3px;
        }
        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          color: #4f46e5;
          cursor: pointer;
        }
        @media (max-width: 768px) {
          ul {
            position: fixed;
            top: 80px;
            left: 0;
            width: 100%;
            background: white;
            flex-direction: column;
            align-items: center;
            padding: 2rem 0;
            gap: 1.5rem;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
            transform: translateY(-150%);
            transition: transform 0.3s ease-in-out;
          }
          ul.open {
            transform: translateY(0);
          }
          .mobile-menu-btn {
            display: block;
          }
          a.active::after {
            display: none;
          }
        }
      </style>
      <nav>
        <a href="#home" class="logo">
          <i data-feather="cpu"></i> GRP
        </a>
        <button class="mobile-menu-btn">
          <i data-feather="menu"></i>
        </button>
        <ul>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    `;

    // Mobile menu toggle
    const menuBtn = this.shadowRoot.querySelector('.mobile-menu-btn');
    const menu = this.shadowRoot.querySelector('ul');
    menuBtn.addEventListener('click', () => {
      menu.classList.toggle('open');
      const icon = menuBtn.querySelector('i');
      if (menu.classList.contains('open')) {
        icon.setAttribute('data-feather', 'x');
      } else {
        icon.setAttribute('data-feather', 'menu');
      }
      feather.replace();
    });
  }
}
customElements.define('custom-navbar', CustomNavbar);