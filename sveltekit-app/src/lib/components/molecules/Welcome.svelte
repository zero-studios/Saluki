<div class="welcome__container">
	<div class="logos">
		<div class="logos__blur"></div>
		<img class="logos__entry" src="/svelte.svg" alt="Svelte Logo" />
		<span class="logos__plus">+</span>
		<img class="logos__entry" src="/sanity.svg" alt="Sanity Logo" />
	</div>
	<div class="steps">
		<h2 class="steps__title">Next steps</h2>
		<ul class="steps__list">
			<li class="steps__entry">
				<h3 class="steps__subtitle">Publish a post in your Studio</h3>
				<p class="steps__text">Visit the Sanity Studio and publish a new document of type post.</p>
			</li>
			<li class="steps__entry">
				<h3 class="step__title bg-slate-400">Dive into the documentation</h3>
				<p class="steps__text">
					Check out{' '}
					<a target="_blank" rel="noopener noreferrer nofollow" href="https://www.sanity.io/docs">
						the documentation
					</a>{' '}
					to learn more about Sanity.
				</p>
			</li>
			<li class="steps__entry">
				<h3 class="steps__subtitle">Join the Sanity Community</h3>
				<p class="steps__text">
					Leverage{' '}
					<a
						target="_blank"
						rel="noopener noreferrer nofollow"
						href="https://www.sanity.io/exchange/community"
					>
						our awesome community
					</a>
					, and share tips and discuss!
				</p>
			</li>
		</ul>
	</div>
</div>

<style>
	.welcome__container {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: var(--space-2) var(--space-2);
	}

	.logos {
		display: none;
	}

	.steps {
		flex-direction: column;
		width: 100%;
	}

	.steps .steps__list {
		list-style-type: none;
		padding: 0;
	}

	.steps .steps__entry {
		margin-bottom: var(--space-4);
	}

	.steps .steps__title {
		font-size: var(--font-size-5);
		line-height: var(--line-height-2);
	}

	.steps .steps__subtitle {
		font-size: var(--font-size-3);
		line-height: var(--line-height-2);
	}

	.steps .steps__text {
		font-family: var(--font-family-serif);
		line-height: var(--line-height-2);
	}

	.steps .steps__text a {
		color: var(--blue-600);
		text-decoration: none;
	}

	@media (min-width: 575px) {
		.welcome__container {
			width: 100%;
		}

		.logos {
			display: flex;
			align-items: center;
			margin: var(--space-6) 0 var(--space-5) 0;
		}

		.logos .logos__blur {
			display: flex;
			position: absolute;
			width: 375px;
			height: 115px;
			background: var(--magenta-100);
			filter: blur(82px);
			transform: rotate(-19deg);
			z-index: -1;
		}

		.logos .logos__plus {
			display: flex;
			font-family: var(--font-family-sans);
			font-weight: 800;
			font-size: var(--font-size-7);
			line-height: var(--line-height-6);
			margin: 0 var(--space-4);
		}

		.logos .logos__entry {
			display: flex;
		}

		.steps {
			max-width: var(--max-width-0);
			display: flex;
			padding: 0;
		}

		.steps .steps__subtitle {
			margin-top: var(--space-4);
		}

		.steps .steps__list {
			margin-top: 0;
		}
	}
</style>
