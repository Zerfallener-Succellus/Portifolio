<script lang="ts">
	import { fade } from 'svelte/transition';
</script>

<section id="about" in:fade={{ duration: 600 }}>
	<h2>Sobre Mim</h2>
	<div class="content">
		<p>
			Olá! Sou Pedro Lucas Ferreira, um desenvolvedor apaixonado por tecnologia e focado em construir soluções de software eficientes. Minha experiência abrange o desenvolvimento backend com <strong>Java/Spring/Node</strong> e <strong>React/Next</strong>, garantindo sistemas robustos e performáticos.
		</p>
		<p>
			No frontend, trabalho com <strong>Svelte, React e Next.js</strong> para criar interfaces de usuário modernas e interativas. Tenho um forte apreço por código limpo, arquitetura sólida (como princípios SOLID) e a prática de testes para assegurar a qualidade e manutenibilidade dos projetos.
		</p>
        <p>
            Tenho conhecimento de <strong>GCP,Azure e AWS</strong> tendo atuado profissionalmente com as 3, tenho experiência em <strong>Docker, Kubernets e Kafka</strong>
        </p>
        <p>
            Sempre busco aprender noas técnologias e aprimorar meu conhecimento de engenharia e lógica para que possa ser um bom engenheiro de Software independente da linguagem, sempre que posso estou estudando <strong>Rust,Svelte e C</strong>, tenho um grande interesse por <strong>low level languages e Gamedev</strong> os quais tento me aprofundar no tempo livre.
        </p>
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
		color: var(--text-color);
	}
	h2::after {
		content: '';
		display: block;
		width: 60px;
		height: 4px;
		background: var(--primary-color);
		margin: 0.5rem auto 0;
	}
	.content {
		max-width: 800px;
		margin: 0 auto;
		text-align: left;
	}
	p {
		font-size: 1.1rem;
		line-height: 1.7;
		margin-bottom: 1rem;
		color: #ccc;
	}
    strong {
        color: var(--primary-color);
        font-weight: normal;
    }
</style>