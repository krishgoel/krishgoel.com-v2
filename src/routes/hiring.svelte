<script>
	let title= "Hiring | krishgoel.com";
    let description = "Hi, I'm Krish, a technophile and maker from New Delhi and we're hiring.";
    let url = "https://krishgoel.com/colophon";
	
	import Space from '../components/space.svelte'
</script>

<svelte:head>
    <title>{title}</title>
    <meta name="title" content="{title}" />
    <meta name="description" content="{description}" />
    <meta property="og:title" content="{title}" />
    <meta property="og:url" content="{url}" />
    <meta property="og:description" content="{description}" />
    <meta name="twitter:title" content="{title}" />
    <meta name="twitter:url" content="{url}" />
    <meta name="twitter:description" content="{description}" />
</svelte:head>

<section>
	<h1>We're Hiring</h1>
	<Space height={"20px"}/>
	<p>
		We are a phy-gital fashion house in the metaverse and excited to announce an opportunity to work with us! We are currently hiring for several roles, including fashion designers, curators, analysts, Blender 3D designers and managers to join our team. 
	</p>
	<p>
		Please note that these positions are fully remote, and we will be conducting routine assessments to ensure optimal performance of the team. These internships and freelance jobs are fully paid positions that offer a chance to work on cutting-edge projects and gain valuable experience.
	</p>
	<p>	
		We are not looking for specific resumes, repertoires, or cover letters, but we do appreciate candidates who provide a description of their commitment, any other cool experiences they have that demonstrate their skills, and samples of their work. We believe that the best way to evaluate a candidate's potential is to see their past work and understand how they think and approach their projects. If you are interested in joining our team, please submit your application and any relevant materials as outlined in the hiring procedure above, and send your material to <a href="mailto:krishgoel3@gmail.com" target="_blank" aria-label="Mail to krishgoel3@gmail.com">krishgoel3@gmail.com</a>.
	</p>
	<p>
		We look forward to hearing from you!
	</p>

	<Space height={"25px"}/>
	<h2>Positions</h2>
	<Space height={"25px"}/>
	<div class="row">
		<div class="col-3">
			<div class="width-restriction">
				<h3>Fashion Designers, Curators and Analysts</h3>
				<p>
					We are looking for 5-7 individuals to analyze fashion trends from all over the internet and curate catalogues of products with scope for virality.
				</p>
				<p>
					Please attach any samples of your ideas/Pintrest Boards/Instagram Guides/collections or any other material you'd like us to see.
				</p>
				<!-- <p>
					We are looking for candidates who can analyze fashion trends from all over the internet and curate catalogues of products with scope for virality. To apply, please send your resume and any relevant samples of your past work such as Pinterest boards, Instagram guides, collections, etc to krishgoel3@gmail.com. The hiring team will review the submissions and select a group of candidates for an interview.
				</p>
				<p>
					During the interview, candidates will be asked about their experience and qualifications, as well as their ideas for curating fashion trends and creating viral catalogs. 
				</p>
				<p>
					Based on the interview and the candidate's portfolio, we'll select the top 5-7 candidates for the position.
				</p> -->
			</div>
		</div>
		<div class="col-3">
			<div class="width-restriction">
				<h3>Blender 3D Designers</h3>
				<p>
					We are looking for 10-15 individuals to design, non-technical designs, mostly fashion goods.
				</p>
				<p>
					If you're interested but don't have any skills currently, we'd be happy to recommend you courses and hire you if your work suits our standards.
				</p>
				<p>
					The payment here would be done on pay-per-delivered-item and freelance basis, the proper pipelined procedure of submission and standards with protocols etc. will be explained later.
				</p>
				<p>
					Please attach any samples of your past work if you are experienced.
				</p>
				<!-- <p>
					We are looking for candidates who can design non-technical designs, mostly fashion goods using Blender 3D. If you do not have any skills currently but interested in the role, we will be happy to recommend you courses and hire you if your work suits our standards. To apply, please send your resume and any relevant samples of your past work, if you have any to krishgoel3@gmail.com.
				</p>
				<p>
					The payment here would be done on pay-per-delivered-item and freelance basis. The proper pipelined procedure of submission and standards with protocols will be explained later.
				</p>
				<p>
					We'll select 10-15 candidates for the position, based on their sample work and qualifications.
				</p> -->
			</div>

		</div>
		<div class="col-3">
			<div class="width-restriction">
				<h3>Managers</h3>
				<p>
					We are looking for two managers, one with a good sense of fashion and the other with a good sense of technical design (engineering majors would be preferred here although not strict).
				</p>
				<p>
					The ideal skills would be management, communication, optimization and streamlining preferably with the ability to work with/adapt to Excel, ReTool, Slack/Discord.
				</p>
				<p>
					This would be a part-time job but we'll require consistency.
				</p>
				<!-- <p>
					During the interview, candidates will be asked about their experience and qualifications, as well as their ideas for curating fashion trends and creating viral catalogs. Based on the interview and the candidate's portfolio, we'l select the top 5-7 candidates for the position.
					
				</p> -->
			</div>

		</div>
	</div>

</section>