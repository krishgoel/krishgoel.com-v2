<script>
	import Space from '../components/space.svelte'

	let title= "Dead End | krishgoel.com";
    let description = "This is a really boring page and I wouldn't recommend coming here often.";
</script>

<svelte:head>
    <title>{title}</title>
    <meta name="title" content="{title}" />
    <meta name="description" content="{description}" />
    <meta property="og:title" content="{title}" />
    <meta property="og:description" content="{description}" />
    <meta name="twitter:title" content="{title}" />
    <meta name="twitter:description" content="{description}" />
</svelte:head>

<section>
	<h1>You've reached a dead end.</h1>
	<Space height={"10px"}/> 
	<p>Often referred to as /404 by Programmers (and emo-bois who feel internally-validated and think they sound very cool after captioning their sad sack of shit posts "Error 404: Feelings not found").</p>
	<Space height={"20px"}/> 
	<h2>Not a lot happens here, it's a really boring place and I wouldn't recommend coming here often.</h2>
	<Space height={"20px"}/> 
	<h2>But because you're here, feel free to listen to <a href="https://open.spotify.com/user/39emqovi90p90iq1sfbczkan0?si=7eda258db2b04654" target="_blank" aria-label="My Spotify">some of banging playlists</a>.</h2>
	<p>PS: My Spotify Playlists Section is basically a gallery.</p>
	<Space height={"20px"}/> 
	<h2>Or you may choose to head back <a href="/" aria-label="Home">/home</a>.</h2>
	<Space height={"20px"}/> 
	<h2>Whatever choice you do make, best of luck on your journey.</h2>
	<p>It may not end well, but it'll end and that's a certainty :)</p>
	<Space height={"20px"}/> 
	<h2>"You have no right to be depressed, you haven't tried hard enough to like it." <i>~ Car Seat Headrest</i></h2>
</section>