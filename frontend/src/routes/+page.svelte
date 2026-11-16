<script lang="ts">
	import {
		videos,
		info,
		cast,
		photos,
		news,
		reviews,
		audience,
		elections,
		explore,
		ikeMoments
	} from '../lib/data';

	const freshCount = reviews.filter((r) => r.fresh).length;
	const tomatometer = Math.round((freshCount / reviews.length) * 100);
	const approval = 65; // Eisenhower's average Gallup approval rating across his presidency

	let synopsisOpen = $state(false);
	let watchlisted = $state(false);
	let activeVideo = $state<string | null>(null);
	let activePhoto = $state<number | null>(null);
	let sidebarTab = $state('Presidency');
	let reviewFilter = $state<'all' | 'fresh' | 'rotten'>('all');

	const shownReviews = $derived(
		reviews.filter((r) =>
			reviewFilter === 'all' ? true : reviewFilter === 'fresh' ? r.fresh : !r.fresh
		)
	);

	function onKey(e: KeyboardEvent) {
		if (e.key === 'Escape') {
			activeVideo = null;
			activePhoto = null;
		}
		if (activePhoto !== null) {
			if (e.key === 'ArrowRight') activePhoto = (activePhoto + 1) % photos.length;
			if (e.key === 'ArrowLeft') activePhoto = (activePhoto - 1 + photos.length) % photos.length;
		}
	}
</script>

<svelte:window onkeydown={onKey} />

<svelte:head>
	<title>Dwight D. Eisenhower (1953–1961) — Rotten Tomatoes: Presidential Edition</title>
	<meta
		name="description"
		content="A Rotten Tomatoes-style review of the presidency of Dwight D. Eisenhower, the 34th President of the United States."
	/>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@400;500;600;700;800;900&family=Oswald:wght@500;600&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

{#snippet tomato(size: number)}
	<svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true">
		<circle cx="32" cy="37" r="24" fill="#fa320a" />
		<ellipse cx="24" cy="30" rx="6" ry="4" fill="#ff7a5c" opacity=".6" />
		<path d="M32 15 l-9 -5 l4 7 l-10 1 l9 4 l-5 7 l11 -6 l11 6 l-5 -7 l9 -4 l-10 -1 l4 -7z" fill="#00912d" />
	</svg>
{/snippet}

{#snippet splat(size: number)}
	<svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true">
		<path
			d="M32 8 c4 8 10 2 12 10 c8 -2 12 6 8 12 c8 4 4 14 -4 14 c2 8 -8 12 -14 8 c-4 8 -14 4 -14 -2 c-8 2 -14 -6 -8 -12 c-8 -4 -4 -14 4 -14 c-2 -8 8 -12 12 -6 c0 -6 4 -10 4 -10z"
			fill="#0ac855"
		/>
	</svg>
{/snippet}

{#snippet popcorn(size: number)}
	<svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true">
		<circle cx="22" cy="16" r="8" fill="#ffd23f" />
		<circle cx="32" cy="11" r="9" fill="#ffe27a" />
		<circle cx="42" cy="16" r="8" fill="#ffd23f" />
		<path d="M12 20 h40 l-6 40 h-28z" fill="#fff" stroke="#fa320a" stroke-width="2" />
		<path d="M20 20 l3 40 M32 20 v40 M44 20 l-3 40" stroke="#fa320a" stroke-width="5" />
	</svg>
{/snippet}

<div class="page">
	<!-- ===== Header bar (matches the Rotten Tomatoes layout) ===== -->
	<header class="masthead">
		<a class="logo" href="#top" aria-label="Rotten Tomatoes Presidential Edition home">
			<span class="logo-word">R{@render tomato(30)}tten</span>
			<span class="logo-word">Tomat{@render tomato(30)}es</span>
			<span class="logo-ed">PRESIDENTIAL EDITION</span>
		</a>
	</header>

	<div class="trending">
		<span class="trend-label">TRENDING ON RT</span>
		<a href="#videos">Famous Speeches</a>
		<a href="#explore">What to Read</a>
		<a href="#elections">Seen on the Ballot</a>
		<a href="#critics">Presidential Rankings</a>
	</div>

	<!-- ===== Hero ===== -->
	<section class="hero" id="top">
		<div class="hero-img" style="background-image:url('img/ike-dday.jpg')"></div>
		<div class="hero-fade"></div>
		<div class="hero-text">
			<h1>Dwight D. Eisenhower</h1>
			<p class="meta">R (Republican), 1953–1961, 8 yrs, &nbsp;War Hero/Political Drama</p>
			<div class="hero-btns">
				<button class="btn-white" onclick={() => (activeVideo = videos[0].id)}>
					<svg width="14" height="14" viewBox="0 0 10 10"><path d="M1 0l9 5-9 5z" fill="currentColor" /></svg>
					TRAILER
				</button>
				<button class="btn-outline" onclick={() => (watchlisted = !watchlisted)} aria-pressed={watchlisted}>
					<span class="plus">{watchlisted ? '✓' : '+'}</span>
					{watchlisted ? 'ON WATCHLIST' : 'WATCHLIST'}
				</button>
			</div>
		</div>

		<div class="carousel" id="videos">
			{#each videos as v}
				<button class="vcard" onclick={() => (activeVideo = v.id)}>
					<img src={`https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`} alt="" loading="lazy" />
					<span class="vtitle">{v.title}</span>
					<span class="vplay"
						><svg width="22" height="22" viewBox="0 0 10 10"><path d="M1 0l9 5-9 5z" fill="#fff" /></svg></span
					>
					<span class="vlen">{v.length}</span>
				</button>
			{/each}
		</div>
	</section>

	<!-- ===== Main content ===== -->
	<div class="layout">
		<main>
			<div class="score-row">
				<img class="poster" src="img/ike-portrait.jpg" alt="Official portrait of Dwight D. Eisenhower" />

				<div class="score-panel">
					<div class="scores">
						<div class="score">
							{@render tomato(58)}
							<div>
								<div class="pct">{tomatometer}%</div>
								<div class="label">Tomatometer</div>
								<a href="#critics" class="sub">{reviews.length} Reviews</a>
							</div>
						</div>
						<div class="score">
							{@render popcorn(58)}
							<div>
								<div class="pct">{approval}%</div>
								<div class="label">Popcornmeter</div>
								<a href="#audience" class="sub">Avg. Gallup Approval</a>
							</div>
						</div>
					</div>

					<div class="synopsis" class:open={synopsisOpen}>
						<p>
							A small-town Kansas boy becomes the five-star general who led the D-Day invasion, then is
							drafted by a hopeful nation to run for president. As the Cold War heats up, "Ike" must end
							a bloody stalemate in Korea, outmaneuver Soviet leader Nikita Khrushchev, face down a
							defiant governor in Little Rock, answer the shock of Sputnik, and pave America from coast to
							coast — all while secret CIA operations and a downed spy plane threaten to unravel his
							reputation. In the final scene, the old soldier delivers a warning about the
							"military-industrial complex" that still echoes today.
						</p>
						<button class="chev" onclick={() => (synopsisOpen = !synopsisOpen)} aria-label="Toggle synopsis">
							<svg width="18" height="18" viewBox="0 0 24 24"
								><path d="M6 9l6 6 6-6" fill="none" stroke="#3976dc" stroke-width="2.5" /></svg
							>
						</button>
					</div>

					<div class="consensus">
						<h3>Critics Consensus</h3>
						<p>
							A steady, quietly brilliant performance: Eisenhower ends a war, builds the Interstates,
							launches America into space, and enforces desegregation at Little Rock — though covert
							coups, a reluctant stand against McCarthyism, and the U-2 cover-up keep this presidency just
							short of perfect.
						</p>
					</div>

					<div class="explore-cta">
						<div>
							<span class="cta-icon">★</span>
							<div>
								<strong>Explore at the Eisenhower Library</strong>
								<span class="muted">Official archive, documents & photos</span>
							</div>
						</div>
						<a class="btn-blue" href="https://www.eisenhowerlibrary.gov/" target="_blank" rel="noopener"
							>EXPLORE NOW</a
						>
					</div>
				</div>
			</div>

			<!-- Explore Now (replaces "Watch it Now") -->
			<section id="explore">
				<h2 class="sec-title">Explore Now</h2>
				<div class="explore-grid">
					{#each explore as e}
						<a class="explore-card" href={e.url} target="_blank" rel="noopener">
							<span class="tag">{e.tag}</span>
							<strong>{e.name}</strong>
							<span class="go">Explore →</span>
						</a>
					{/each}
				</div>
			</section>

			<!-- Elections (replaces "Tickets & Showtimes") -->
			<section id="elections">
				<h2 class="sec-title">Ballots &amp; Election Times</h2>
				<div class="elections">
					{#each elections as el}
						<div class="election">
							<div class="el-year">{el.year}</div>
							<div class="el-bars">
								<div class="el-row">
									<span class="el-name">Eisenhower (R)</span>
									<div class="bar"><div class="fill red" style="width:{(el.ike.ev / 531) * 100}%"></div></div>
									<span class="el-num">{el.ike.ev} EV · {el.ike.pv} · {el.ike.states} states</span>
								</div>
								<div class="el-row">
									<span class="el-name">{el.opp.name}</span>
									<div class="bar"><div class="fill blue" style="width:{(el.opp.ev / 531) * 100}%"></div></div>
									<span class="el-num">{el.opp.ev} EV · {el.opp.pv} · {el.opp.states} states</span>
								</div>
								<p class="muted">{el.note}</p>
							</div>
						</div>
					{/each}
				</div>
			</section>

			<!-- Videos -->
			<section>
				<h2 class="sec-title">Videos</h2>
				<div class="video-grid">
					{#each videos as v}
						<button class="video-tile" onclick={() => (activeVideo = v.id)}>
							<div class="thumb">
								<img src={`https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`} alt="" loading="lazy" />
								<span class="vplay"
									><svg width="18" height="18" viewBox="0 0 10 10"><path d="M1 0l9 5-9 5z" fill="#fff" /></svg></span
								>
								<span class="vlen">{v.length}</span>
							</div>
							<strong>{v.title}</strong>
							<span class="muted">{v.source}</span>
						</button>
					{/each}
				</div>
			</section>

			<!-- Photos -->
			<section id="photos">
				<h2 class="sec-title">Photos</h2>
				<div class="photo-strip">
					{#each photos as p, i}
						<button class="photo" onclick={() => (activePhoto = i)}>
							<img src={p.src} alt={p.caption} loading="lazy" />
						</button>
					{/each}
				</div>
			</section>

			<!-- President Info (Movie Info) -->
			<section id="info">
				<h2 class="sec-title">President Info</h2>
				<p class="lead">
					Dwight David "Ike" Eisenhower was the 34th President of the United States. Before the White
					House, he was the Supreme Commander of the Allied Expeditionary Force in Europe during World War
					II and planned the D-Day invasion of Normandy on June 6, 1944. As a moderate Republican, he
					called his approach "Modern Republicanism" — keeping New Deal programs like Social Security
					while focusing on balanced budgets and a strong but limited military.
				</p>
				<dl class="info-list">
					{#each info as [k, v]}
						<div><dt>{k}:</dt><dd>{v}</dd></div>
					{/each}
				</dl>
			</section>

			<!-- Cast -->
			<section id="cast">
				<h2 class="sec-title">Cast &amp; Crew</h2>
				<div class="cast-grid">
					{#each cast as c}
						<div class="cast">
							<img src={c.img} alt={c.name} loading="lazy" />
							<strong>{c.name}</strong>
							<span class="muted">{c.role}</span>
						</div>
					{/each}
				</div>
			</section>

			<!-- News & Interviews -->
			<section id="news">
				<h2 class="sec-title">News &amp; Interviews for Dwight D. Eisenhower</h2>
				<div class="news-grid">
					{#each news as n}
						<article class="news">
							<img src={n.img} alt="" loading="lazy" />
							<div>
								<span class="news-kind">{n.kind} · {n.date}</span>
								<h3>{n.headline}</h3>
								<p>{n.blurb}</p>
							</div>
						</article>
					{/each}
				</div>
			</section>

			<!-- Critics -->
			<section id="critics">
				<h2 class="sec-title">Critic Reviews for Dwight D. Eisenhower</h2>
				<div class="critic-summary">
					<div class="score">
						{@render tomato(44)}
						<div>
							<div class="pct sm">{tomatometer}%</div>
							<div class="muted">{freshCount} Fresh · {reviews.length - freshCount} Rotten</div>
						</div>
					</div>
					<div class="filters" role="tablist">
						<button class:on={reviewFilter === 'all'} onclick={() => (reviewFilter = 'all')}>All Critics</button>
						<button class:on={reviewFilter === 'fresh'} onclick={() => (reviewFilter = 'fresh')}>Fresh</button>
						<button class:on={reviewFilter === 'rotten'} onclick={() => (reviewFilter = 'rotten')}>Rotten</button>
					</div>
				</div>

				<div class="reviews">
					{#each shownReviews as r}
						<div class="review">
							<div class="critic">
								<div class="avatar">{r.critic[0]}</div>
								<div>
									<strong>{r.critic}</strong>
									<span class="muted">{r.outlet}</span>
								</div>
							</div>
							<div class="bubble">
								<div class="bubble-head">
									{#if r.fresh}{@render tomato(22)}{:else}{@render splat(22)}{/if}
									<span class="topic">{r.topic}</span>
									<span class="verdict" class:rotten={!r.fresh}>{r.fresh ? 'FRESH' : 'ROTTEN'}</span>
								</div>
								<p>{r.quote}</p>
								<span class="muted">Original Score: {r.score}</span>
							</div>
						</div>
					{/each}
				</div>

				<div class="verdict-box">
					<div class="cert">
						{@render tomato(70)}
						<div>
							<span class="cert-label">CERTIFIED FRESH</span>
							<strong class="cert-score">{tomatometer}%</strong>
						</div>
					</div>
					<div>
						<h3>Why Ike Gets a {tomatometer}%</h3>
						<p>
							Out of {reviews.length} major parts of his presidency, {freshCount} were successes and
							{reviews.length - freshCount} were failures. Eisenhower's biggest wins — the Interstate Highway
							System, ending the Korean War, creating NASA, enforcing desegregation at Little Rock, and the
							first civil rights laws since Reconstruction — still shape America today. He kept the country
							prosperous and at peace through some of the most dangerous years of the Cold War.
						</p>
						<p>
							But he loses points for secret CIA coups in Iran and Guatemala, for staying silent too long
							on McCarthyism while gay federal workers were purged, for lying about the U-2 spy plane, and
							for pulling America into Vietnam. Historians agree he was one of the best: C-SPAN's 2021 survey
							of presidential historians ranked him <strong>#5 of all presidents</strong>. That's a
							<strong>Certified Fresh</strong> presidency.
						</p>
					</div>
				</div>
			</section>

			<!-- Audience -->
			<section id="audience">
				<h2 class="sec-title">Audience Reviews (Voices of the 1950s)</h2>
				<div class="audience-grid">
					{#each audience as a}
						<div class="aud">
							<div class="stars" aria-label="{a.stars} out of 5 stars">
								{#each Array(5) as _, i}<span class:dim={i >= a.stars}>★</span>{/each}
							</div>
							<p>"{a.text}"</p>
							<span class="muted">— {a.name}</span>
						</div>
					{/each}
				</div>
				<p class="muted note">
					Audience reviews are imagined reactions from Americans of the era, written for this project.
				</p>
			</section>
		</main>

		<!-- ===== Sidebar (What to Watch -> Ike's Top Moments) ===== -->
		<aside>
			<div class="side-card">
				<h2>Ike's Top Moments</h2>
				<div class="tabs">
					{#each Object.keys(ikeMoments) as tab}
						<button class:active={sidebarTab === tab} onclick={() => (sidebarTab = tab)}>{tab}</button>
					{/each}
				</div>
				<div class="side-head"><strong>Highest Rated</strong><a href="#critics">VIEW ALL</a></div>
				<ul class="side-list">
					{#each ikeMoments[sidebarTab] as p}
						<li>
							{#if p.score >= 60}{@render tomato(26)}{:else}{@render splat(26)}{/if}
							<div>
								<span>{p.name}</span>
								<strong>{p.score}%</strong>
							</div>
						</li>
					{/each}
				</ul>
			</div>

			<div class="side-card">
				<h2>Quick Facts</h2>
				<ul class="facts">
					<li><strong>34th</strong> President</li>
					<li><strong>5-star</strong> General of the Army</li>
					<li><strong>41,000</strong> miles of Interstate authorized</li>
					<li><strong>2</strong> landslide election wins</li>
					<li><strong>#5</strong> in C-SPAN 2021 historian ranking</li>
				</ul>
			</div>
		</aside>
	</div>

	<footer>
		<p>
			<strong>Rotten Tomatoes: Presidential Edition</strong> — a Civics class project reviewing the
			presidency of Dwight D. Eisenhower. Not affiliated with Rotten Tomatoes or Fandango.
		</p>
		<p class="muted">
			Photos: public domain, via Wikimedia Commons / U.S. National Archives. Videos embedded from
			YouTube. Scores are the author's own ratings, based on the critic reviews above.
		</p>
	</footer>
</div>

<!-- ===== Video modal ===== -->
{#if activeVideo}
	<div class="modal" role="presentation" onclick={() => (activeVideo = null)}>
		<div class="modal-body" role="dialog" aria-modal="true" tabindex="-1" onclick={(e) => e.stopPropagation()} onkeydown={() => {}}>
			<button class="close" onclick={() => (activeVideo = null)} aria-label="Close">✕</button>
			<iframe
				src={`https://www.youtube-nocookie.com/embed/${activeVideo}?autoplay=1`}
				title="Video player"
				allow="autoplay; encrypted-media; picture-in-picture"
				allowfullscreen
			></iframe>
		</div>
	</div>
{/if}

<!-- ===== Photo lightbox ===== -->
{#if activePhoto !== null}
	<div class="modal" role="presentation" onclick={() => (activePhoto = null)}>
		<div class="lightbox" role="dialog" aria-modal="true" tabindex="-1" onclick={(e) => e.stopPropagation()} onkeydown={() => {}}>
			<button class="close" onclick={() => (activePhoto = null)} aria-label="Close">✕</button>
			<img src={photos[activePhoto].src} alt={photos[activePhoto].caption} />
			<div class="lb-bar">
				<button onclick={() => (activePhoto = (activePhoto! - 1 + photos.length) % photos.length)} aria-label="Previous">‹</button>
				<span>{photos[activePhoto].caption} ({activePhoto + 1}/{photos.length})</span>
				<button onclick={() => (activePhoto = (activePhoto! + 1) % photos.length)} aria-label="Next">›</button>
			</div>
		</div>
	</div>
{/if}

<style>
	:global(*) {
		box-sizing: border-box;
	}
	:global(html) {
		scroll-behavior: smooth;
	}
	:global(body) {
		margin: 0;
		background: #fff;
		color: #2a2c32;
		font-family: 'Libre Franklin', 'Franklin Gothic Medium', Arial, sans-serif;
	}
	a {
		color: inherit;
		text-decoration: none;
	}
	button {
		font: inherit;
		cursor: pointer;
	}
	.page {
		max-width: 1500px;
		margin: 0 auto;
		box-shadow: 0 0 30px rgba(0, 0, 0, 0.08);
	}
	.muted {
		color: #757a84;
		font-size: 0.85rem;
	}

	/* ---------- Masthead ---------- */
	.masthead {
		background: #fa320a;
		display: grid;
		grid-template-columns: auto;
		align-items: center;
		gap: 36px;
		padding: 18px 36px;
		color: #fff;
	}
	.logo {
		display: flex;
		flex-direction: column;
		line-height: 0.82;
		font-weight: 900;
		font-size: 2.6rem;
		letter-spacing: -1.5px;
	}
	.logo-word {
		display: flex;
		align-items: center;
	}
	.logo-word :global(svg) {
		margin: 0 -1px;
		transform: translateY(2px);
		filter: drop-shadow(0 0 0 #fff);
	}
	.logo-word :global(circle:first-child) {
		fill: #fff;
	}
	.logo-ed {
		font-family: 'Oswald', sans-serif;
		font-size: 0.62rem;
		letter-spacing: 2px;
		margin-top: 6px;
		opacity: 0.9;
	}
	.trending {
		background: #5c5c5c;
		color: #fff;
		display: flex;
		gap: 18px;
		align-items: center;
		padding: 8px 16px;
		font-size: 1.05rem;
		overflow-x: auto;
		white-space: nowrap;
	}
	.trend-label {
		font-family: 'Oswald', sans-serif;
		color: #ffe500;
		font-size: 1.2rem;
		letter-spacing: 0.5px;
	}
	.trending a:hover {
		text-decoration: underline;
	}

	/* ---------- Hero ---------- */
	.hero {
		position: relative;
		background: #1c3b33;
		color: #fff;
		min-height: 650px;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		overflow: hidden;
	}
	.hero-img {
		position: absolute;
		inset: 0 0 0 38%;
		background-size: cover;
		background-position: center 30%;
		filter: sepia(0.35) saturate(0.9);
	}
	.hero-fade {
		position: absolute;
		inset: 0 0 0 38%;
		background: linear-gradient(90deg, #1c3b33 0%, rgba(28, 59, 51, 0.6) 22%, rgba(28, 59, 51, 0) 50%);
	}
	.hero-text {
		position: relative;
		padding: 0 34px 110px;
	}
	.hero h1 {
		font-size: 2.6rem;
		margin: 0 0 10px;
		font-weight: 700;
	}
	.meta {
		margin: 0 0 30px;
		font-size: 1.15rem;
		font-weight: 500;
	}
	.hero-btns {
		display: flex;
		gap: 12px;
	}
	.btn-white,
	.btn-outline {
		display: inline-flex;
		align-items: center;
		gap: 10px;
		border-radius: 26px;
		padding: 12px 24px;
		font-size: 1.1rem;
		font-weight: 600;
		letter-spacing: 0.5px;
	}
	.btn-white {
		background: #fff;
		color: #1c1c1c;
		border: 2px solid #fff;
	}
	.btn-outline {
		background: transparent;
		color: #fff;
		border: 2px solid #fff;
	}
	.plus {
		display: inline-grid;
		place-items: center;
		width: 20px;
		height: 20px;
		border: 1.5px solid #fff;
		border-radius: 50%;
		font-size: 0.9rem;
	}
	.carousel {
		position: relative;
		display: flex;
		gap: 22px;
		padding: 0 22px 26px;
		overflow-x: auto;
		scrollbar-width: thin;
	}
	.vcard {
		position: relative;
		flex: 0 0 326px;
		height: 184px;
		border: 2px solid #6f7f7a;
		border-radius: 6px;
		overflow: hidden;
		padding: 0;
		background: #000;
		text-align: left;
	}
	.vcard img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		opacity: 0.85;
	}
	.vcard:hover img {
		opacity: 1;
	}
	.vtitle {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		padding: 12px 12px 30px;
		color: #fff;
		font-weight: 700;
		font-size: 1.15rem;
		letter-spacing: 0.4px;
		background: linear-gradient(rgba(0, 0, 0, 0.75), transparent);
	}
	.vplay {
		position: absolute;
		left: 14px;
		bottom: 14px;
	}
	.vlen {
		position: absolute;
		right: 10px;
		bottom: 12px;
		background: rgba(0, 0, 0, 0.6);
		color: #fff;
		padding: 2px 8px;
		border-radius: 4px;
		font-size: 1.1rem;
	}

	/* ---------- Layout ---------- */
	.layout {
		display: grid;
		grid-template-columns: 1fr 410px;
		gap: 50px;
		padding: 22px 22px 40px;
	}
	main {
		min-width: 0;
	}
	main section {
		margin-top: 44px;
	}
	.sec-title {
		font-size: 1.5rem;
		margin: 0 0 18px;
		padding-left: 12px;
		border-left: 4px solid #fa320a;
	}

	/* Score panel */
	.score-row {
		display: grid;
		grid-template-columns: 200px 1fr;
		gap: 30px;
		align-items: start;
	}
	.poster {
		width: 100%;
		aspect-ratio: 2/3;
		object-fit: cover;
		border-radius: 2px;
	}
	.score-panel {
		background: #f3f3f3;
		border-radius: 12px;
		padding: 22px;
	}
	.scores {
		display: flex;
		gap: 40px;
		flex-wrap: wrap;
	}
	.score {
		display: flex;
		gap: 14px;
		align-items: center;
	}
	.pct {
		font-size: 2rem;
		font-weight: 600;
	}
	.pct.sm {
		font-size: 1.6rem;
	}
	.label {
		font-size: 0.95rem;
	}
	.sub {
		color: #3976dc;
		font-weight: 500;
		font-size: 0.95rem;
	}
	.synopsis {
		display: flex;
		gap: 12px;
		margin-top: 18px;
		padding-bottom: 18px;
		border-bottom: 1px solid #dcdcdc;
	}
	.synopsis p {
		margin: 0;
		font-size: 1.15rem;
		line-height: 1.5;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}
	.synopsis.open p {
		-webkit-line-clamp: unset;
		line-clamp: unset;
	}
	.chev {
		background: none;
		border: 0;
		align-self: flex-start;
		transition: transform 0.2s;
	}
	.synopsis.open .chev {
		transform: rotate(180deg);
	}
	.consensus {
		padding: 16px 0;
		border-bottom: 1px solid #dcdcdc;
	}
	.consensus h3 {
		margin: 0 0 6px;
		font-size: 1.05rem;
	}
	.consensus p {
		margin: 0;
		line-height: 1.5;
	}
	.explore-cta {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 16px;
		padding-top: 16px;
		flex-wrap: wrap;
	}
	.explore-cta > div {
		display: flex;
		gap: 12px;
		align-items: center;
	}
	.explore-cta > div > div {
		display: flex;
		flex-direction: column;
	}
	.cta-icon {
		width: 44px;
		height: 44px;
		border-radius: 50%;
		display: grid;
		place-items: center;
		background: #fff;
		color: #fa320a;
		font-size: 1.4rem;
		box-shadow: 0 1px 4px rgba(0, 0, 0, 0.15);
	}
	.btn-blue {
		background: #3976dc;
		color: #fff;
		padding: 12px 28px;
		border-radius: 24px;
		font-weight: 700;
		letter-spacing: 0.5px;
	}
	.btn-blue:hover {
		background: #2b5fb8;
	}

	/* Explore */
	.explore-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
		gap: 14px;
	}
	.explore-card {
		display: flex;
		flex-direction: column;
		gap: 6px;
		padding: 16px;
		border: 1px solid #e2e2e2;
		border-radius: 10px;
		transition: box-shadow 0.15s, transform 0.15s;
	}
	.explore-card:hover {
		box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);
		transform: translateY(-2px);
	}
	.tag {
		font-size: 0.72rem;
		text-transform: uppercase;
		letter-spacing: 1px;
		color: #fa320a;
		font-weight: 700;
	}
	.go {
		color: #3976dc;
		font-weight: 600;
		font-size: 0.9rem;
	}

	/* Elections */
	.elections {
		display: grid;
		gap: 16px;
	}
	.election {
		display: grid;
		grid-template-columns: 90px 1fr;
		gap: 16px;
		background: #f3f3f3;
		border-radius: 10px;
		padding: 16px;
	}
	.el-year {
		font-family: 'Oswald', sans-serif;
		font-size: 2rem;
		color: #fa320a;
	}
	.el-row {
		display: grid;
		grid-template-columns: 170px 1fr 220px;
		gap: 12px;
		align-items: center;
		margin-bottom: 8px;
		font-size: 0.92rem;
	}
	.bar {
		height: 14px;
		background: #e0e0e0;
		border-radius: 7px;
		overflow: hidden;
	}
	.fill {
		height: 100%;
	}
	.fill.red {
		background: #d6262b;
	}
	.fill.blue {
		background: #2d5bd6;
	}
	.el-num {
		font-weight: 600;
	}
	.el-bars p {
		margin: 4px 0 0;
	}

	/* Videos */
	.video-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
		gap: 18px;
	}
	.video-tile {
		background: none;
		border: 0;
		padding: 0;
		text-align: left;
		display: flex;
		flex-direction: column;
		gap: 4px;
	}
	.thumb {
		position: relative;
		aspect-ratio: 16/9;
		border-radius: 6px;
		overflow: hidden;
		background: #000;
		margin-bottom: 6px;
	}
	.thumb img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	.thumb .vlen {
		font-size: 0.85rem;
	}

	/* Photos */
	.photo-strip {
		display: flex;
		gap: 12px;
		overflow-x: auto;
		padding-bottom: 8px;
	}
	.photo {
		flex: 0 0 auto;
		height: 170px;
		border: 0;
		padding: 0;
		border-radius: 6px;
		overflow: hidden;
		background: #eee;
	}
	.photo img {
		height: 100%;
		width: auto;
		display: block;
		transition: transform 0.2s;
	}
	.photo:hover img {
		transform: scale(1.04);
	}

	/* Info */
	.lead {
		line-height: 1.6;
		font-size: 1.05rem;
	}
	.info-list {
		margin: 0;
		display: grid;
		gap: 10px;
	}
	.info-list div {
		display: grid;
		grid-template-columns: 220px 1fr;
		gap: 10px;
	}
	.info-list dt {
		color: #505257;
		font-weight: 700;
	}
	.info-list dd {
		margin: 0;
	}

	/* Cast */
	.cast-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
		gap: 22px 16px;
	}
	.cast {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		gap: 4px;
	}
	.cast img {
		width: 100px;
		height: 100px;
		border-radius: 50%;
		object-fit: cover;
		object-position: center 20%;
		margin-bottom: 6px;
		background: #eee;
	}

	/* News */
	.news-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
		gap: 18px;
	}
	.news {
		display: grid;
		grid-template-columns: 120px 1fr;
		gap: 14px;
		border-bottom: 1px solid #eee;
		padding-bottom: 16px;
	}
	.news img {
		width: 120px;
		height: 90px;
		object-fit: cover;
		border-radius: 4px;
	}
	.news-kind {
		font-size: 0.75rem;
		font-weight: 700;
		text-transform: uppercase;
		color: #fa320a;
		letter-spacing: 0.5px;
	}
	.news h3 {
		margin: 4px 0 6px;
		font-size: 1.02rem;
		line-height: 1.3;
	}
	.news p {
		margin: 0;
		font-size: 0.9rem;
		line-height: 1.45;
		color: #505257;
	}

	/* Critics */
	.critic-summary {
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-wrap: wrap;
		gap: 16px;
		margin-bottom: 18px;
	}
	.filters {
		display: flex;
		gap: 8px;
	}
	.filters button,
	.tabs button {
		background: transparent;
		border: 0;
		border-radius: 8px;
		padding: 9px 16px;
		font-weight: 600;
		font-size: 0.92rem;
	}
	.filters button.on,
	.tabs button.active {
		background: #2a2c32;
		color: #fff;
	}
	.reviews {
		display: grid;
		gap: 16px;
	}
	.review {
		display: grid;
		grid-template-columns: 200px 1fr;
		gap: 18px;
	}
	.critic {
		display: flex;
		gap: 10px;
		align-items: center;
	}
	.critic > div:last-child {
		display: flex;
		flex-direction: column;
	}
	.avatar {
		width: 42px;
		height: 42px;
		border-radius: 50%;
		background: #2a2c32;
		color: #fff;
		display: grid;
		place-items: center;
		font-weight: 700;
		flex-shrink: 0;
	}
	.bubble {
		background: #f3f3f3;
		border-radius: 10px;
		padding: 14px 18px;
	}
	.bubble-head {
		display: flex;
		align-items: center;
		gap: 10px;
	}
	.topic {
		font-weight: 700;
	}
	.verdict {
		margin-left: auto;
		font-size: 0.72rem;
		font-weight: 800;
		letter-spacing: 1px;
		color: #fa320a;
	}
	.verdict.rotten {
		color: #0a9d48;
	}
	.bubble p {
		margin: 8px 0;
		line-height: 1.5;
	}
	.verdict-box {
		margin-top: 30px;
		display: grid;
		grid-template-columns: auto 1fr;
		gap: 28px;
		border: 2px solid #fa320a;
		border-radius: 12px;
		padding: 24px;
		background: #fff8f6;
	}
	.cert {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		gap: 6px;
	}
	.cert > div {
		display: flex;
		flex-direction: column;
	}
	.cert-label {
		font-family: 'Oswald', sans-serif;
		color: #fa320a;
		letter-spacing: 1px;
	}
	.cert-score {
		font-size: 2rem;
	}
	.verdict-box h3 {
		margin: 0 0 8px;
	}
	.verdict-box p {
		line-height: 1.55;
		margin: 0 0 10px;
	}

	/* Audience */
	.audience-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
		gap: 14px;
	}
	.aud {
		border: 1px solid #e2e2e2;
		border-radius: 10px;
		padding: 14px;
	}
	.aud p {
		margin: 8px 0;
		line-height: 1.45;
	}
	.stars {
		color: #ffb600;
		letter-spacing: 2px;
	}
	.stars .dim {
		color: #ddd;
	}
	.note {
		margin-top: 12px;
		font-style: italic;
	}

	/* Sidebar */
	aside {
		display: flex;
		flex-direction: column;
		gap: 24px;
	}
	.side-card {
		background: #f3f3f3;
		border-radius: 12px;
		padding: 22px;
	}
	.side-card h2 {
		margin: 0 0 16px;
		font-size: 1.6rem;
		font-weight: 600;
	}
	.tabs {
		display: flex;
		gap: 4px;
		padding-bottom: 14px;
		border-bottom: 1px solid #dcdcdc;
		flex-wrap: wrap;
	}
	.side-head {
		display: flex;
		justify-content: space-between;
		margin: 16px 0 10px;
	}
	.side-head a {
		color: #3976dc;
		font-weight: 600;
		font-size: 0.9rem;
	}
	.side-list {
		list-style: none;
		margin: 0;
		padding: 0;
		display: grid;
		gap: 14px;
	}
	.side-list li {
		display: flex;
		gap: 12px;
		align-items: center;
	}
	.side-list li div {
		display: flex;
		flex-direction: column;
		font-size: 1.05rem;
	}
	.facts {
		margin: 0;
		padding-left: 18px;
		line-height: 1.9;
	}
	.facts strong {
		color: #fa320a;
	}

	footer {
		background: #2a2c32;
		color: #fff;
		padding: 26px 36px;
		font-size: 0.92rem;
	}
	footer .muted {
		color: #b8bcc4;
	}

	/* Modals */
	.modal {
		position: fixed;
		inset: 0;
		background: rgba(0, 0, 0, 0.82);
		display: grid;
		place-items: center;
		z-index: 100;
		padding: 16px;
	}
	.modal-body {
		position: relative;
		width: min(960px, 100%);
		aspect-ratio: 16/9;
	}
	.modal-body iframe {
		width: 100%;
		height: 100%;
		border: 0;
		border-radius: 8px;
	}
	.close {
		position: absolute;
		top: -42px;
		right: 0;
		background: none;
		border: 0;
		color: #fff;
		font-size: 1.6rem;
	}
	.lightbox {
		position: relative;
		max-width: min(1000px, 100%);
	}
	.lightbox img {
		max-width: 100%;
		max-height: 75vh;
		display: block;
		margin: 0 auto;
		border-radius: 6px;
	}
	.lb-bar {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 16px;
		color: #fff;
		margin-top: 12px;
		text-align: center;
	}
	.lb-bar button {
		background: rgba(255, 255, 255, 0.15);
		color: #fff;
		border: 0;
		border-radius: 50%;
		width: 42px;
		height: 42px;
		font-size: 1.6rem;
		flex-shrink: 0;
	}

	/* ---------- Responsive ---------- */
	@media (max-width: 1150px) {
		.layout {
			grid-template-columns: 1fr;
		}
	}
	@media (max-width: 720px) {
		.masthead {
			grid-template-columns: 1fr;
			padding: 14px 16px;
			gap: 14px;
		}
		.logo {
			font-size: 2rem;
		}
		.hero {
			min-height: 560px;
		}
		.hero-img,
		.hero-fade {
			inset: 0;
			opacity: 0.45;
		}
		.hero-text {
			padding: 0 16px 60px;
		}
		.hero h1 {
			font-size: 2rem;
		}
		.vcard {
			flex-basis: 250px;
			height: 141px;
		}
		.layout {
			padding: 16px;
		}
		.score-row {
			grid-template-columns: 1fr;
		}
		.poster {
			width: 160px;
		}
		.el-row {
			grid-template-columns: 1fr;
			gap: 4px;
		}
		.election {
			grid-template-columns: 1fr;
		}
		.info-list div,
		.review,
		.verdict-box {
			grid-template-columns: 1fr;
		}
	}
</style>
