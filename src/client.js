import * as sapper from '@sapper/app';

// highlight.js theme import from node_modules
import "highlight.js/styles/lioshi.css";

sapper.start({
	target: document.querySelector('#sapper')
});