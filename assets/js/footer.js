const footerHTML = [
    `
    <div class="footer_bg">
      <div class="footer_container container grid">
        <div>
          <h3 class="footer_title">Md Zahid Sarker</h3>
          <span class="footer_subtitle">Mechanical Engineering, RUET</span>
        </div>

        <ul class="footer_links">
          <li>
            <a href="#about" class="footer_link">About</a>
          </li>
          <li>
            <a href="#projects" class="footer_link">Projects</a>
          </li>
          <li>
            <a href="#contact" class="footer_link">Contact Me</a>
          </li>
        </ul>

        <div class="footer_socials">
          <a href="https://www.linkedin.com/in/md-zahid-sarker/" target="_blank" class="footer_social">
            <i class="uil uil-linkedin-alt"></i>
          </a>
          <a href="https://www.facebook.com/zahid1902163" target="_blank" class="footer_social">
            <i class="fab fa-facebook"></i>
          </a>
          <a href="https://www.instagram.com/mohammad.zahidsarker/" target="_blank" class="footer_social">
            <i class="uil uil-instagram"></i>
          </a>
        </div>
      </div>

      <p class="footer_copy">&#169; Md Zahid Sarker. All rights reserved</p>
    </div>
    `
];

document.getElementById("footer").innerHTML = footerHTML;