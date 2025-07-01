<footer id="contact">
  <div class="footer-content">
      <h2>Vamos Conversar?</h2>
      <p>Estou sempre aberto a novas oportunidades e colaborações. Sinta-se à vontade para entrar em contato.</p>
      <a href="mailto:pedrolucf@gmail.com" class="email-button">pedrolucf@gmail.com</a>
      <div class="social-links">
          <a href="https://github.com/Zerfallener-Succellus" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/pedro-lucas-ferreira-godoy-2298a1218/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
  </div>
  <div class="copyright">
      &copy; {new Date().getFullYear()} Lucas Godoy. Site construido com SvelteKit.
  </div>
</footer>

<style>
  footer {
      padding: 5rem 5% 2rem;
      text-align: center;
      background-color: #050505;
  }
  .footer-content {
      max-width: 600px;
      margin: 0 auto 3rem auto;
  }
  h2 {
      font-size: 2.2rem;
      margin-bottom: 1rem;
      color: var(--text-color);
  }
  p {
      color: #ccc;
      line-height: 1.6;
      margin-bottom: 2rem;
  }
  .email-button {
      display: inline-block;
      background: var(--primary-color);
      color: var(--background-color);
      padding: 1rem 2rem;
      border-radius: 8px;
      text-decoration: none;
      font-weight: bold;
      transition: transform 0.2s;
      margin-bottom: 2rem;
  }
  .email-button:hover {
      transform: scale(1.05);
  }
  .social-links {
      display: flex;
      justify-content: center;
      gap: 2rem;
  }
  .social-links a {
      color: var(--text-color);
      text-decoration: none;
      font-weight: 500;
      transition: color 0.2s;
  }
  .social-links a:hover {
      color: var(--primary-color);
  }
  .copyright {
      border-top: 1px solid #222;
      padding-top: 2rem;
      font-size: 0.9rem;
      color: #777;
  }
</style>