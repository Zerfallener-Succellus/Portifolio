<script lang="ts">
  import { fly } from 'svelte/transition';
  
  const skills = [
    'Java', 'Spring', 'JavaScript', 'TypeScript', 'Node.js', 'React', 'Next.js', 'Svelte', 'Rust', 'Rocket.rs', 'C', 'Git', 'Docker', 'SQL', 'Cloud', 'Kafka'
  ];
</script>

<section id="skills">
	<h2>Habilidades Técnicas</h2>
	<div class="skills-container">
		{#each skills as skill, i}
			<div class="skill-card" in:fly={{ y: 20, duration: 300, delay: i * 50 }}>
				{skill}
			</div>
		{/each}
	</div>
</section>

<style>
	section {
		padding: 6rem 5%;
		text-align: center;
		background-color: #050505;
	}
	h2 {
		font-size: 2.5rem;
		margin-bottom: 2rem;
	}
	.skills-container {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 1rem;
		max-width: 900px;
		margin: 0 auto;
	}
	.skill-card {
		background: var(--card-background);
		color: var(--text-color);
		padding: 0.8rem 1.5rem;
		border-radius: 8px;
		font-size: 1rem;
		font-weight: 500;
		border: 1px solid #222;
		transition: transform 0.2s, color 0.2s;
	}
	.skill-card:hover {
		transform: translateY(-5px);
		color: var(--primary-color);
	}
</style>