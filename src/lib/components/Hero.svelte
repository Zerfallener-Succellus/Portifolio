<script lang="ts">
  import { fly } from 'svelte/transition';
</script>

<section class="hero">
  <div class="content">
    <h1 in:fly={{ y: -20, duration: 800, delay: 200 }}>Lucas Ferreira</h1>
    <p class="title" in:fly={{ y: -20, duration: 800, delay: 400 }}>Desenvolvedor Full-Stack & Arquiteto de Software</p>
    <p class="subtitle" in:fly={{ y: -20, duration: 800, delay: 600 }}>
      Especialista em criar soluções robustas com Java, Rust, e ecossistemas JavaScript.
    </p>
  </div>
</section>

<style>
  .hero {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 0 2rem;
    background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
  }
  h1 {
    font-size: clamp(3rem, 10vw, 5rem);
    margin-bottom: 0.5rem;
    color: #ffffff;
    font-weight: 900;
  }
  .title {
    font-size: 1.5rem;
    color: var(--primary-color);
    margin-bottom: 1rem;
    font-weight: bold;
  }
  .subtitle {
    max-width: 600px;
    margin: 0 auto 2rem auto;
    font-size: 1.1rem;
    line-height: 1.6;
    color: #cccccc;
  }
</style>