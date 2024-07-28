<script>
	import { fade, fly } from 'svelte/transition';

	import Card from '../../components/Card/Card.svelte';
</script>

<div
	class="container"
	in:fly={{ delay: 500, duration: 1500, x: '-5%' }}
	out:fade={{ duration: 500 }}
>
	<div class="containerWrapper">
		<h1 class="pageTitle">// Portfolio</h1>
		<div class="projects">
			<Card
				imgUrl="portfolio/bright-boost.jpeg"
				title="Bright Boost"
				description="After school scheduling system using VueJS, Fastify and MongoDB"
				link="https://tipg54.netlify.app"
				githubLink="https://github.com/Swin-TIP"
			/>
			<Card
				imgUrl="portfolio/carpark-system.png"
				title="Carpark System"
				description="Carpark system created using Java GUI"
				link="https://github.com/abdurrahmanfaqihiskandar/CarparkSystem"
				githubLink="https://github.com/abdurrahmanfaqihiskandar/CarparkSystem"
			/>
			<Card
				imgUrl="portfolio/cloudielocks.png"
				title="HTML CSS JS PHP"
				description="Plain HTML CSS JS PHP project"
				link="https://abdurrahmanfaqihiskandar.github.io/html-css/"
				githubLink="https://github.com/abdurrahmanfaqihiskandar/html-css"
			/>
			<Card
				imgUrl="portfolio/huggingface.png"
				title="Swinburne FAQ bot"
				description="Finetuning of pre-trained AI model on Huggingface for an FAQ chatbot"
				link="https://colab.research.google.com/drive/1ktTpKcBx4oQMTbe8IGtxQCC4q_AC7gov"
				githubLink="https://colab.research.google.com/drive/1ktTpKcBx4oQMTbe8IGtxQCC4q_AC7gov"
			/>
			<Card
				imgUrl="portfolio/clustering.png"
				title="Clustering Research Articles"
				description="Clustering research articles based on abstracts"
				link="https://colab.research.google.com/drive/1p0IbrNCVhiZ5BhpGMt-19L_i47C5ajmS"
				githubLink="https://colab.research.google.com/drive/1p0IbrNCVhiZ5BhpGMt-19L_i47C5ajmS"
			/>
			<Card
				imgUrl="portfolio/flappy-bird.png"
				title="Flappy bird clone"
				description="Messing around with the Canvas API"
				link="https://flappy-floppy.netlify.app/"
				githubLink="https://github.com/abdurrahmanfaqihiskandar/flappy-bird"
			/>
		</div>
	</div>
</div>

<style>
	.container {
		display: flex;
		justify-content: center;
		width: calc(100% - 350px);
		box-sizing: border-box;
		position: absolute;
		top: 0;
		right: 0;
		padding: 0 40px;
		min-height: 100vh;
		background-color: #f9f9f9;
	}

	.containerWrapper {
		max-width: 1240px;
		padding: 80px 0;
	}

	.pageTitle {
		font-size: 18px;
		font-weight: 700;
		letter-spacing: 5px;
		text-transform: uppercase;
		margin-bottom: 70px;
	}

	.projects {
		display: flex;
		gap: 25px;
		flex-wrap: wrap;
		box-sizing: border-box;
	}

	@media only screen and (max-width: 1600px) {
		.containerWrapper {
			max-width: 968px;
		}
	}
	@media only screen and (max-width: 1024px) {
		.container {
			display: block;
			width: 100%;
			padding: 0 40px 0 40px;
		}
		.containerWrapper {
			width: 100%;
			padding: 40px 0;
		}
		.pageTitle {
			margin-bottom: 50px;
		}
		.projects {
			display: flex;
			flex-direction: column;
		}
	}
</style>
