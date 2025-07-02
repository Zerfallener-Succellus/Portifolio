<script lang="ts">
  import { base } from '$app/paths';

  const links = [
    { href: '#about', label: 'Sobre' },
    { href: '#skills', label: 'Habilidades' },
    { href: '#projects', label: 'Projetos' },
  ];
</script>

<header>
  <nav>
    <a href={base || '/'} class="logo">Lucas Ferreira</a>
    <ul>
      {#each links as link}
        <li><a href={link.href}>{link.label}</a></li>
      {/each}
      <li><a href="#contact" class="contact-button">Contato</a></li>
    </ul>
  </nav>
</header>

<style>
  header {
    background: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(10px);
    padding: 1rem 5%;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 10;
  }
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .logo {
    font-weight: bold;
    font-size: 1.5rem;
    color: var(--text-color);
    text-decoration: none; 
  }
  ul {
    display: flex;
    gap: 1.5rem;
    list-style: none;
    align-items: center;
  }
  a {
    color: var(--text-color);
    text-decoration: none;
    transition: color 0.2s;
  }
  a:hover {
    color: var(--primary-color);
  }
  .contact-button {
    background-color: var(--primary-color);
    color: var(--background-color);
    padding: 0.5rem 1rem;
    border-radius: 6px;
    font-weight: bold;
    transition: transform 0.2s;
  }
  .contact-button:hover {
    color: var(--background-color);
    transform: scale(1.05);
  }
</style>