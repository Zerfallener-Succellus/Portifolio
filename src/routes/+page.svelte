<script lang="ts">
  import Header from '$lib/components/Header.svelte';
  import Hero from '$lib/components/Hero.svelte';
  import About from '$lib/components/About.svelte';
  import Skills from '$lib/components/Skills.svelte';
  import Projects from '$lib/components/Projects.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import "../app.css";
  
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<svelte:head>
  <title>Lucas | Desenvolvedor Full-Stack</title>
  <meta name="description" content="Portfólio de Lucas, desenvolvedor especialista em Java, Rust, JavaScript e mais." />
</svelte:head>

<Header />

<main>
  <Hero />
  <About />
  <Skills />
  <Projects projects={data.projects} />
</main>

<Footer />