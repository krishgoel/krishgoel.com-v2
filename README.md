# krishgoel.com ```-v2```
> The source code to the 2nd iteration of my personal website.

## To-do for future upgrades
- [ ] GitHub repo update
- [ ] Add the project filtering tag system as suggested by Ishaan
- [ ] Switch from Last.FM to Spotify for Music fetching

## Tech stack
Built on Svelte (with Sapper for routing) and hosted on Vercel

### Other Node Packages and JS libraries used 
- cross-fetch
- svelte-prismjs
- gray-matter
- marker
- highlight
- fs and path

### APIs used
- Audioscrobbler (with Last.fm)
- Notion API

### NTS: Garden fetching
Github Actions uses the Notion API to fetch the [garden database](https://www.notion.so/krishgoel/1e6d541ec3974208a619db7c83552cc9) and store it in ```data/plants.json```. Iterate through this JSON to create the cards on the ```/garden``` and link to [krishgoel.notion.site/[pageID]](https://krishgoel.notion.site/). 

### External libraries and snippets used
- CSS from Prism.JS for syntax highlighting

Made with ❤️