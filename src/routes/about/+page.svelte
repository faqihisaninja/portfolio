<script>
	import { fade, fly } from 'svelte/transition';

	import { hover } from '$comp/Cursor/stores';
	import Button from '$comp/Button/Button.svelte';

	const downloadResume = () => {
		window.open('/resume.pdf', '_blank');
	};
</script>

<div transition:fade class="container">
	<section
		in:fly={{ delay: 500, duration: 500, x: '-5%' }}
		out:fade={{ duration: 500 }}
		class="details"
	>
		<div class="left">
			<p class="sectionTitle">// Biography</p>
			<p class="text">
				Hi my name is Abdurrahman Faqih. I have over 3 years of experience working as a
				software engineer. I am currently pursuing a Master's in Information Technology at
				the Swinburne University of Technology. My skills lie in both Frontend and Backend
				Development with a heavier interest on frontend development. Recently, I have taken
				an interest in Artificial Technology (AI) and Machine Learning (ML).
			</p>
			<Button title="Download CV" onClick={downloadResume} />
		</div>
		<div class="right">
			<p class="sectionTitle">// Personal Details</p>
			<ul class="text">
				<li>
					<span class="title">Name</span>
					<span class="value">Abdurrahman Faqih Bin Iskandar</span>
				</li>
				<li>
					<span class="title">Nationality</span>
					<span class="value">Singaporean</span>
				</li>
				<li>
					<span class="title">Degree</span>
					<span class="value">Masters of Information Technology</span>
				</li>
				<li>
					<span class="title">Email</span>
					<span class="value">abdurrahman.faqihbi@gmail.com</span>
				</li>
				<li>
					<span class="title">Mobile (SG)</span>
					<span class="value">+65 98557363</span>
				</li>
				<li>
					<span class="title">Mobile (AUS)</span>
					<span class="value">+61 412305291</span>
				</li>
				<li>
					<span class="title">Github</span>
					<a
						class="value"
						href="https://github.com/faqihisaninja"
						on:mouseenter={() => hover.set(true)}
						on:mouseleave={() => hover.set(false)}>faqihisaninja</a
					>
				</li>
				<li>
					<span class="title">LinkedIn</span>
					<a
						class="value"
						href="https://linkedin.com/in/abdurrahman-faqih-iskandar"
						on:mouseenter={() => hover.set(true)}
						on:mouseleave={() => hover.set(false)}
						>linkedin.com/in/abdurrahman-faqih-iskandar</a
					>
				</li>
			</ul>
		</div>
	</section>
	<section
		in:fly={{ delay: 800, duration: 500, x: '-5%' }}
		out:fade={{ duration: 500 }}
		class="skills"
	>
		<div class="left">
			<p class="sectionTitle">// Programming Skills</p>
			<ul class="text">
				<li class="flex">
					<span class="title">Languages</span>
					<span class="value">JavaScript, TypeScript, Java, Python, C++</span>
				</li>
				<li class="flex">
					<span class="title">Frameworks</span>
					<span class="value"
						>Svelte, SvelteKit, VueJS, Angular, React, ExpressJS, FastAPI</span
					>
				</li>
				<li class="flex">
					<span class="title">Databases</span>
					<span class="value">MariaDB, MySQL, MongoDB, ElasticSearch, Firebase</span>
				</li>
				<li class="flex">
					<span class="title">Others</span>
					<span class="value"
						>GSAP, Figma, D3.js, Chart.js, Linux, Jupyter, Grafana, AWS, OracleCI</span
					>
				</li>
			</ul>
		</div>
		<div class="right">
			<p class="sectionTitle">// Language Skills</p>
			<ul class="text">
				<li>
					<span class="title">English</span>
					<span class="value">Fluent</span>
				</li>
				<li>
					<span class="title">Malay</span>
					<span class="value">Native</span>
				</li>
				<li>
					<span class="title">Korean</span>
					<span class="value">Basic</span>
				</li>
				<li>
					<span class="title">German</span>
					<span class="value">Basic</span>
				</li>
			</ul>
		</div>
	</section>
	<section
		in:fly={{ delay: 1200, duration: 500, x: '-5%' }}
		out:fade={{ duration: 500 }}
		class="past"
	>
		<div class="left">
			<p class="sectionTitle">// Education</p>
			<ul class="text">
				<li class="flex spaceBetween borderBottom past">
					<div class="info">
						<h3 class="institution">Swinburne University</h3>
						<span class="position">Masters of Information Technology</span>
					</div>
					<div class="year">
						<span>Jul 23 - now</span>
					</div>
				</li>
				<li class="flex spaceBetween borderBottom past">
					<div class="info">
						<h3 class="institution">National University of Singapore</h3>
						<span class="position">Bachelors of Mechanical Engineering (Honours)</span>
					</div>
					<div class="year">
						<span>Aug 16 - Dec 20</span>
					</div>
				</li>
			</ul>
		</div>
		<div class="right">
			<p class="sectionTitle">// Work Experiences</p>
			<ul class="text">
				<li class="flex spaceBetween borderBottom past">
					<div class="info">
						<h3 class="institution">Ractivi</h3>
						<span class="position">Software Engineer</span>
					</div>
					<div class="year">
						<span>Aug 23 - Aug 24</span>
					</div>
				</li>
				<li class="flex spaceBetween borderBottom past">
					<div class="info">
						<h3 class="institution">DBS Bank Ltd.</h3>
						<span class="position">Software Engineer</span>
					</div>
					<div class="year">
						<span>Jan 21 - Jun 23</span>
					</div>
				</li>
				<li class="flex spaceBetween borderBottom past">
					<div class="info">
						<h3 class="institution">Project Kampong</h3>
						<span class="position">Backend Developer (Volunteer)</span>
					</div>
					<div class="year">
						<span>Aug 20 - Apr 21</span>
					</div>
				</li>
				<li class="flex spaceBetween borderBottom past">
					<div class="info">
						<h3 class="institution">Makan Rescue</h3>
						<span class="position">Technology Intern</span>
					</div>
					<div class="year">
						<span>Aug 19 - Nov 19</span>
					</div>
				</li>
				<li class="flex spaceBetween borderBottom past">
					<div class="info">
						<h3 class="institution">Red Dot Robotics</h3>
						<span class="position">Assistant Mechatronics Engineer</span>
					</div>
					<div class="year">
						<span>Jul 18 - Dec 18</span>
					</div>
				</li>
			</ul>
		</div>
	</section>
</div>

<style>
	.container {
		width: calc(100% - 350px);
		box-sizing: border-box;
		position: absolute;
		top: 0;
		right: 0;
		padding: 0 120px;
		min-height: 100vh;
		background-color: #f9f9f9;
	}
	section {
		display: flex;
		padding: 80px 0;
		border-bottom: 1px solid rgba(0, 0, 0, 0.1);
	}
	div.right,
	div.left {
		width: 50%;
	}
	div.left {
		padding-right: 50px;
	}
	div.right {
		padding-left: 50px;
	}
	.sectionTitle {
		font-weight: 700;
		text-transform: uppercase;
	}
	.text {
		font-size: 15px;
		line-height: 1.8;
		word-wrap: break-word;
		letter-spacing: 0px;
		color: #767676;
		margin-top: 50px;
	}
	p.text {
		margin-bottom: 50px;
	}
	ul.text {
		padding: 0;
	}
	ul.text li {
		list-style: none;
	}
	ul.text li.flex,
	ul.text li.flex {
		display: flex;
	}
	.spaceBetween {
		justify-content: space-between;
	}
	li span.title {
		display: inline-block;
		min-width: 130px;
		font-weight: 500;
		color: #000;
	}

	.past {
		border-bottom: 1px solid rgba(0, 0, 0, 0.1);
		margin-bottom: 25px;
		padding-bottom: 25px;
	}
	.past:last-child {
		border-bottom: none;
	}
	.info .institution {
		margin: 0;
		color: #000;
	}
	.year span {
		display: inline-block;
		padding: 5px 20px;
		border: 1px solid rgba(0, 0, 0, 0.1);
	}

	@media only screen and (max-width: 1420px) {
		.container {
			padding: 0 40px;
		}
	}

	@media only screen and (max-width: 1024px) {
		.container {
			width: 100%;
			padding: 0 40px 0 40px;
		}
		section {
			display: block;
			padding: 0;
			border: none;
		}
		div.left,
		div.right {
			width: 100%;
			padding: 40px 0;
			border-bottom: 1px solid rgba(0, 0, 0, 0.1);
		}
		.past .right {
			border: none;
		}
	}
</style>
