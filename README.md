# krishgoel.com

## To-do
- [x] Fix the card design
- [x] Add link animation
- [ ] SEO and updated meta on social media shares
- [ ] Add G-Analytics
- [x] Build the blog CMS architecture
- [ ] GitHub repo update
- [x] Typewriter animation (https://svelte.dev/repl/9dfb73bfa9b34aeea4740fa23f5cde8a?version=3.38.2)
- [x] Fix the banner animation on iOS Safari, it fucking sucks because of some sort of line-height adjustment error
- [ ] Update each individual routes' SEO
- [ ] Update robots.txt and sitemap
- [ ] Before pushing to production, ensure that the meta URLs are changed to krishgoel.com and not krishgoel-v4.vercel.app 
- [x] Consider this https://stackoverflow.com/questions/60201324/send-data-from-one-page-to-another-instead-of-preloading
- [x] Uninstall svelte-loading-spinners
- [ ] Configure the error page
- [ ] Ensure all anchor tags have ```aria-label```
- [x] Get new icons etc
- [ ] Fix the splashscreens (Generated using https://appsco.pe/developer/splash-screens)

## Extra Node Packages used
- cross-fetch
- svelte-typewriter

## APIs used
- Potion (with Notion)
- Audioscrobbler (with Last.fm)

## External libraries and snippets used
- CSS from Prism.JS for syntax highlighting

## How the preload works
```html
<script context="module">
    export async function preload(page, session) {
        const res = await this.fetch("https://potion-api.vercel.app/table?id=5856546a8a954678937de8e1d91d99d7")
        const projects = await res.json()

        return { projects: projects }
    }
</script>

<script>
    export let projects
</script>
```

## How to import local JSON files into Svelte
```html
<script>
  import * as someJSON from './someJsonFile.json';  
  
  console.log(someJSON);
</script>

<div>{someJSON.someKey}</div>
```

_Don't read this istfg_