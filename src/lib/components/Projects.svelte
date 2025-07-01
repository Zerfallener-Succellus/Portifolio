<script lang="ts">
  import { fly } from 'svelte/transition';
  export let projects: {
    name: string;
    url: string;
    description: string;
    stars: number;
    language: string;
  }[] = [];
</script>

<section id="projects">
  <h2>Projetos em Destaque</h2>
  <div class="grid">
    {#each projects as project, i}
      <a 
        href={project.url} 
        target="_blank" 
        rel="noopener noreferrer" 
        class="card"
        in:fly={{ y: 20, duration: 400, delay: i * 100 }}
      >
        <div class="language">{project.language}</div>
        <h3>{project.name}</h3>
        <p>{project.description || 'Um projeto incrível. Clique para ver no GitHub.'}</p>
        <div class="stars">⭐ {project.stars}</div>
      </a>
    {/each}
  </div>
</section>

<style>
  section {
    padding: 6rem 5%;
    text-align: center;
  }
  h2 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 1.5rem;
    max-width: 1200px;
    margin: 0 auto;
  }
  .card {
    background: var(--card-background);
    padding: 1.5rem;
    border-radius: 8px;
    text-align: left;
    text-decoration: none;
    color: var(--text-color);
    border: 1px solid #222;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    display: flex;
    flex-direction: column;
  }
  .card:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 20px rgba(255, 255, 0, 0.1);
  }
  .card h3 {
    margin-bottom: 0.5rem;
    color: var(--primary-color);
    text-transform: capitalize;
  }
  .card p {
    flex-grow: 1;
    color: #ccc;
    font-size: 0.9rem;
    line-height: 1.5;
  }
  .language {
    align-self: flex-end;
    background: var(--primary-color);
    color: var(--background-color);
    font-weight: bold;
    padding: 0.2rem 0.6rem;
    border-radius: 12px;
    font-size: 0.8rem;
    margin-bottom: 1rem;
  }
  .stars {
    margin-top: 1rem;
    font-weight: bold;
    color: #ccc;
  }
</style>