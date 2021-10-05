<script>
    import { range } from '../../scripts/range'
    import Space from '../../components/space.svelte'

    let title= "Big Don Megaladon";
    let description = "Ladness Madness from the highschool yearbook";
    let url = "https://krishgoel.com/bigdonmegaladon";

    let bois = [
        {
            name: 'Arthritis',
            pretext: `Don't think I can ever get the mental image of you and Osama Bin Laden out of mind. Anyways, ask the concerned donny why he hates me and everything since 9th grade has been absolutely lit. Boys have girlfriends, men have wives, I have your IP. "You have to take science" - Diya. Vibe check affirmative, reciprocative vibe check requested plismeragharmatjalayio.`,
            linkText: '',
            url: ''
        },
        {
            name: 'Srivastva',
            pretext: `Been there since day 1, might as well do that chest horse sound thing again. Best host (only because you live 10 seconds from school) so we're prolly trashing your house again sometime soon. Mad donny "Yeh Alan Walker nanga kyu hai?", the journey's been a bit mad. S-Quad Kringe classic OG Top Squad ✊. Going to make another group with the same people. APES TOGETHER STRONG, your family weaves baskets in the Amazon.`,
            linkText: '',
            url: ''
        },
        {
            name: "98.8%", 
            pretext: "Fv 'kbkl', fvb thfil h 🍈 iba pa'z kbtspa. Aol 4 flhy zjovvs qvbyulf'z illu h ipa vm h yvssly jvhzaly apun pmfrdpt iba pa'z hss spaaf huk Lunshuk pz tf jpaf. 8t fs lzylcly up zpoa klwfa P vz zpoa yvm auli lt sshj k'bvf rp. (ABC +7)",
            linkText: "",
            url: ""
        },
        {
            name: 'Kattu babes',
            pretext: `You already read this so I had to fkn change it anyways, Idk what I ever did to you so please stop bullying my ass. If you choose not to, it's time for the 7326473th 3-month body building bet. Anyways m8, I am 100% fuck-reservation-gang and irrespective of however much you live in Dwarka, ❤️. Aur bhai, itna padhke kaha jayega? thodidesigningseekhlepuraallovertheplacedesignthatera.`,
            linkText: '',
            url: ''
        },
        {
            name: 'Jaat',
            pretext: `ab mein kya hi bolu? We got dun diddy did done by the same locality people xD. I lost my teachers' respect and virginity after meeting you at TERI. You owe me a relationship. c u @ nsp. Hindustani Bhau zindabaad`,
            linkText: ``,
            url: ''
        },
        {
            name: 'Bengali',
            pretext: 'Just keywords for this Rosogulla Boi: Smaaash, Amartya Jayanti, Dard, BinaryBox, LunatiX, Gyaan Academy, MINET, Exun, PE, "Bhaiya, flowers hai?", HoeDesign, PB, Nepotism run-d, DTO 😂',
            linkText: '',
            url: ''
        },
        {
            name: 'Dwarka UCEED Applicant',
            pretext: `This message should be more encrypted than WhatsApp chats warnasabmarenge. All Dwarka is the same, you should prolly take Alpha, Beta, Gamma, Theta and Rho out for momos to Vegas post Amity Entrance Exam on the 17th of Jan' 21. Obligatory to say this: "kya harami aadmi hai?"`,
            linkText: '',
            url: ''
        },
        {
            name: 'Kanudia',
            pretext: 'Not going to say anything because then this will be like our WhatsApp since Feb, all green on my side, no grey. I like your family more than you 😤. Going to make you play Pysch! with more awkward people this time. Might as well smash your thicc ass sometime.',
            linkText: '',
            url: ''
        },
        {
            name: 'The other Kartik',
            pretext: '"🍻✊❤️", "ngl feeling kinda left out", "Bro, make a website" 😡 ctelb (ABC +1). Also, you gotta stop picking at me bro 😛',
            linkText: '',
            url: ''
        },
        {
            name: 'Choubey',
            pretext: `Hello dearest Choubey thx regards. I know I donot matter but it's ok 🙁🙁. Thank you for 24x7 validation, Pitampura is a shit hole and the October of '19 was a blast. Vilen party scene after boards 🍻. See you at IIT.`,
            linkText: '',
            url: ''
        },
        {
            name: 'Ridhi',
            pretext: `Hi sexxyyyyyyy! Foookin "Ma'am, I'd cure me if I were you" time lessago. See you again in 789 months cuz that's how calling works. BYE`,
            linkText: '',
            url: ''
        }
    ];
    function shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }
    shuffleArray(bois);
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

<section class="width-restriction">
    <img src="https://i.kym-cdn.com/entries/icons/original/000/032/196/apes.jpg" alt="Apes together strong"/>
    <h1>🍻 This one's fr da Sanskriti dons</h1>
    <p>If you're here because of the yearbook, you need to get better shit to do. If you're mentioned here you should really go kys 'cause you spent your time interacting with me in school but this also means you took away a portion of my time and that isn't something I regret giving to any one of you here. ly ❤️. sorryimbent</p>
    <Space height={"15px"}/>
    <p class="mono">Timestamp: 13th Dec 2020 at 01:59 hrs</p>
    <Space height={"15px"}/>
    <p>Also, I'm working on an yearbook app ting right now so if going to 
        <a href="https://yearbook.krishgoel.com" class="mono">yearbook.krishgoel.com</a> 
        doesn't give you an error, go and make a profile there.
    </p>
    <Space height={"25px"}/>
    <h2>👑 ₹2 Memorial</h2>
    <div class="row">
        {#each range(0,3,1) as i, index}
            <div class="col-3">
                {#each bois as boi, p}
                    {#if p%3 == i}
                        <div class="card">
                            <div class="width-restriction">
                                <h3>{boi.name}</h3>
                                <p>{boi.pretext}</p>
                                {#if boi.linkText != ""}
                                    <a href={boi.url} aria-label="{boi.linkText}">🔗 {boi.linkText}</a>
                                {/if}
                            </div>
                        </div>
                    {/if}
                {/each}
            </div>
        {/each}
	</div>
</section>