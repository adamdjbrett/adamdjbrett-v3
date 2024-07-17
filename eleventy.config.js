import markdownItAnchor from "markdown-it-anchor";
import { InputPathToUrlTransformPlugin, HtmlBasePlugin } from "@11ty/eleventy";
import { feedPlugin } from "@11ty/eleventy-plugin-rss";
import pluginSyntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";
import pluginNavigation from "@11ty/eleventy-navigation";
import pluginBundle from "@11ty/eleventy-plugin-bundle";
import pluginPWA from "eleventy-plugin-pwa-v2";
import pluginFilters from "./_config/filters.js";
import { execSync } from "child_process";
import embedEverything from "eleventy-plugin-embed-everything";
import pluginTOC from 'eleventy-plugin-toc';
import yaml from "js-yaml";
import markdownIt from "markdown-it";
import fg from "fast-glob";
/** @param {import("@11ty/eleventy").UserConfig} eleventyConfig */
export default async function(eleventyConfig) {
	// Copy the contents of the `public` folder to the output folder
	// For example, `./public/css/` ends up in `_site/css/`
	eleventyConfig
		.addPassthroughCopy({
			"./public/": "/",
		// activate this if you need to create fetch loop galleries image see on add by creativitas information
		//	"./galleries/": "/gallery/galleries/",
			"./node_modules/prismjs/themes/prism-okaidia.css": "/css/prism-okaidia.css"
		})
		.addPassthroughCopy("./content/feed/pretty-atom-feed.xsl");

	// Run Eleventy when these files change:
	// https://www.11ty.dev/docs/watch-serve/#add-your-own-watch-targets

	// Watch content images for the image pipeline.
//	eleventyConfig.addWatchTarget("content/**/*.{svg,webp,png,jpeg}");

	// Per-page bundles, see https://github.com/11ty/eleventy-plugin-bundle
	// Adds the {% css %} paired shortcode
	eleventyConfig.addBundle("css");
	// Do you want a {% js %} bundle shortcode too?
	// eleventyConfig.addBundle("js");

	// Official plugins
	eleventyConfig.addPlugin(pluginSyntaxHighlight, {
		preAttributes: { tabindex: 0 }
	});
	eleventyConfig.addPlugin(pluginNavigation);
	eleventyConfig.addPlugin(HtmlBasePlugin);
	eleventyConfig.addPlugin(InputPathToUrlTransformPlugin);

	// Atom Feed
	eleventyConfig.addPlugin(feedPlugin, {
		outputPath: "/feed/feed.xml",
		stylesheet: "pretty-atom-feed.xsl",
		templateData: {
			eleventyNavigation: {
				key: "Feed",
				order: 3
			}
		},
		collection: {
			name: "posts",
			limit: 10,
		},
		metadata: {
			language: "en",
			title: "Adam DJ Brett",
			subtitle: "Web Developer Adam Dj Brett",
			base: "https://adamdjbrett.pages.dev",
			author: {
				name: "Adam Dj Brett"
			}
		}
	});


// add by creativitas

// static site fetch for image galleries - create new folder galleries on root and upload your image there..
// Next you can create new markdown files on content folder and name it gallery.md use layout : layout/gallery.njk
//  eleventyConfig.addPassthroughCopy({"/galleries/*": "galleries"});
//  eleventyConfig.addFilter("galleries", function (dir="") {
//    return fg.sync(dir);
//  });

// inject markdown IT
  const md = new markdownIt({
    html: true
  });
  eleventyConfig.addPairedShortcode("markdown", (content) => {
    return md.render(content);
  });

// Activate YAML data
eleventyConfig.addDataExtension("yaml", (contents) => yaml.load(contents));

// pagefind in
eleventyConfig.on('eleventy.after', () => {
execSync(`npx pagefind --site _site --glob \"**/*.html\"`, { encoding: 'utf-8' })
})

// Activate nunjuck limit reverse
eleventyConfig.addNunjucksFilter("limit", (arr, limit) => arr.slice(0, limit));
	eleventyConfig.addFilter("head", (array, n) => {
		if(!Array.isArray(array) || array.length === 0) {
			return [];
		}
		if( n < 0 ) {
			return array.slice(n);
		}

		return array.slice(0, n);
	});

// Activate plugins for embed everything
eleventyConfig.addPlugin(embedEverything, {
// Embed all is ready
  add: ['soundcloud','youtube','instagram','spotify','tiktok','twitter','vimeo','twitch']
});

// Activate Table of Content
eleventyConfig.addPlugin(pluginTOC, {
    tags: ['h2', 'h3', 'h4', 'h5'],
    wrapper: 'div'
  })

// PWA injection
eleventyConfig.addPlugin(pluginPWA);

// close add by creativitas


	// Filters
	eleventyConfig.addPlugin(pluginFilters);

	// Customize Markdown library settings:
	eleventyConfig.amendLibrary("md", mdLib => {
		mdLib.use(markdownItAnchor, {
			permalink: markdownItAnchor.permalink.ariaHidden({
				placement: "after",
				class: "header-anchor",
				symbol: "#",
				ariaHidden: false,
			}),
			level: [1,2,3,4],
			slugify: eleventyConfig.getFilter("slugify")
		});
	});

	eleventyConfig.addShortcode("currentBuildDate", () => {
		return (new Date()).toISOString();
	});

	// Features to make your build faster (when you need them)

	// If your passthrough copy gets heavy and cumbersome, add this line
	// to emulate the file copy on the dev server. Learn more:
	// https://www.11ty.dev/docs/copy/#emulate-passthrough-copy-during-serve

	// eleventyConfig.setServerPassthroughCopyBehavior("passthrough");
};

export const config = {
	// Control which files Eleventy will process
	// e.g.: *.md, *.njk, *.html, *.liquid
	templateFormats: [
		"md",
		"njk",
		"html",
		"liquid",
		"11ty.js",
	],

	// Pre-process *.md files with: (default: `liquid`)
	markdownTemplateEngine: "njk",

	// Pre-process *.html files with: (default: `liquid`)
	htmlTemplateEngine: "njk",

	// These are all optional:
	dir: {
		input: "content",          // default: "."
		includes: "../_includes",  // default: "_includes" (`input` relative)
		data: "../_data",          // default: "_data" (`input` relative)
		output: "_site"
	},

	// -----------------------------------------------------------------
	// Optional items:
	// -----------------------------------------------------------------

	// If your site deploys to a subdirectory, change `pathPrefix`.
	// Read more: https://www.11ty.dev/docs/config/#deploy-to-a-subdirectory-with-a-path-prefix

	// When paired with the HTML <base> plugin https://www.11ty.dev/docs/plugins/html-base/
	// it will transform any absolute URLs in your HTML to include this
	// folder name and does **not** affect where things go in the output folder.

	// pathPrefix: "/",
};
