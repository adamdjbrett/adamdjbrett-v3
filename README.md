# adamdjbrett 👨‍💻

👋🏻 Welcome to the New Version of Adam DJ Brett 👨🏻‍🚀

👉🏻 This is the most complete project with SEO support and the best site performance 👍🏻

Run demo [https://adamdjbrettv2.netlify.app/](https://adamdjbrettv2.netlify.app/)

---

## Change Log ✍🏼

+ Migration from jekyll to 11ty `V.3.0.0-alpha.13`

---

## ✨ Features :

+ Google LD JSON Schemes
+ Google Geo Location
+ Google Breadcumb
+ Google Company Profile
+ Google Review
+ Google Post Article
+ Auto SEO injection Script
+ Title Description and Image for Meta Tag, Open Graph, Twitter Card
+ Prisma 
+ Markdown IT
+ Markdown TOC
+ Custom Markdown Widget for CV
+ Pagination List Blog 
+ Pagination List Page
+ Pagination for blog posts
+ Pagination for project posts
+ Original Direct Link
+ Cannoncial Link
+ Social Media Post Share
+ Bootstrap Icon
+ Navbar with accesskey
+ Navbar mobile Version
+ Navbar Desktop Version
+ Brutalist Themes
+ Retina Responsive Design
+ Social Media Nav Link
+ Mastodon Domain Validate
+ All Social Media Validate
+ Import All Content from old site
+ 11ty Embed Everything
+ Auto Compression Image CDN by WSRV
+ Prisma Syntax Highlight
+ Implement Print CSS for CV page
+ PWA
+ Luxon Date Time
+ YAML Data
+ Json Data
+ Markdown Post and Widget
+ Feed Atom XML and XSLT
+ Sitemap.xml
+ Robots.txt
+ Pagefind
+ Headless Decap CMS Integration

---

## 🏅 Test Result

Desktop Version Test

![Desktop Adjb Test](https://wsrv.nl/?url=https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgLXVExvliwfWk7sJ-SbQsQxye3SYMqCrRx_7cxCLS-7JrXYn-L9qtspa1au_X_vlJconpPftLp-OJ9TXSOhZJjA8-3nwWree48BjT06cHKGnzGMxisDeHdUt6EhWpbNk3q8IYcvZl79HQIH9ivIiMVlxSII_7cEffRhoyY_1k1mcPE3pKvkkN1-vNAtVM/s16000/lighthouse-desktop.png&output=webp)

Mobile Version Test

![Mobile Version Test](https://wsrv.nl/?url=https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi48f0Jl93VsugpSDoUfmSWXWrnPXfoNjQLq6z9qSw-9lL7r0Ggs6Nx9mgcVu9gPdn4ZI_8ofsb0oaEFaFpR7dWBkxMrcif5QfQRYb0WEPF6PLKOR9UHQ67NfqzjmYVhd7K2X1kg-Iy2CAki1LcWcdRF6Pr1Mn7g4PP8o3ClyOtTrN3SYrU60lQ_Z1Hvg0/s1293/lighthpuse-mobile.png&output=webp)

Google LD SChemes Test

![Google LD Script Test](https://wsrv.nl/?url=https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhB2ZM4Sc_uB5oYRnlFLqX5Tji-k6oT_hrEaPbBYf53w06NTaoTQznxQCoDdKOlSiCOFqFhUruwLo_Dm69ae36ebHhaI-rqRP3FXnYKaj-m4jQBm2M1sBPoyr4QaCY7VKTlZBavwYDmel4R4tUWYgNdkJapF1F1RSr0Hg4UeZw9iK8LQYFnB2UXA4PTzws/s16000/google-ld.png&output=webp)

PWA Installation Test

![PWA Test](https://wsrv.nl/?url=https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjYFeXpWGz8kDSnP6MYtpj_U78p0xYNUx3THqGEDI1WpxQILnStERk7IB00hD3fkrpGPLbYSyPDtnytZNITykCDHZLfGejVGibpis_XZofFkD2lPpqGXF2tNN-M8YNb6BVSDbsZnl_M1pLajSvPKqOHCa5y7UYGALsqF3I6EAPDyIMzWIcK7b4QRiDwWFE/s16000/pwa.png&output=webp)

Auto SEO Injection Script

![SEO Test](https://wsrv.nl/?url=https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgqGV7eCrKmJK3JggD1anAPb7JT2qu_KLvIlLLuUDqb3qgeO2K9zaz_JZhXpVU9us6xURzZmpf5E66iIlbD6ibbVF0ItuTXIaNoqNrfkcHLS2-NpEMWYgPJnh6EMC43F9LH3u5cqgcmTJ11-Co913HjLT8cM_abzxjJinbXXc6lsMbKCH74yhsM5AOfxOo/s16000/fixautoseo-image.png&output=webp)

---

## 📂 Folder Structure

+ Data
   - metadata.json for setup your site
   - cv/data.yaml for configure your cv page
+ _includes
   - layouts - base themes template for page
   - widget - widget and script for customise your page themes
+ content
   - blog folder - Blog post article content collections
   - cv folder - Markdown widget for your CV page
   - feed folder - Generate feed atom xml and beauty xslt
   - pages folder - Collections for all pages article
   - project folder - Project post article content collections
   - 404.md - For customise your 404 not found page
   - blog.md - Configure your blog list page
   - cv.md - Configure and Setup your SEO CV page
   - gallery.md - Configure and Setup your Gallery page
   - index.md - Configure and Setup your Home page
   - info.md - Configure and Setup your Info page
   - project.md - Configure your projects list page
   - robots.txt.njk - Configure and generate your robots.txt file
   - sitemap.xml.njk - Configure and generate your sitemap.xml file
   - tags.md - Configure and setup your Tags Page

---

## First Setup 🔮

Open `eleventy.config.js` and change `title` , `subtitle` , `author` , and `base` on this line code with your needs.

```
		collection: {
			name: "posts",
			limit: 10,
		},
// Change this line code
		metadata: {
			language: "en",
			// Change with your title
			title: "Adam DJ Brett",
			// change with your description
			subtitle: "Web Developer Adam Dj Brett",
			// change with your url
			base: "https://adamdjbrett.pages.dev",
			author: {
				// change author name here..
				name: "Adam Dj Brett"
			}
		}
	});
```

---

### Headless CMS

💯 Recommendations for using CMS for convenience.

+ Deploy your project on netlify.
+ Configure your identity.
+ Access Backend Admin area with `/admin`.
+ Start work with headless CMS to update your site.
+ Access site setup and configure SEO and others.
+ You can customize all the pages and settings in the CMS, just access the available menu.
+ For CV Area is use CV markdown widget and you can access on all CV features menu.

---

## Work with Icon 🌝

Visit https://icons.getbootstrap.com/

Select your icon and add into frontmatter

example full code look like this url link here https://icons.getbootstrap.com/icons/airplane/

`<i class="bi bi-airplane"></i>`

What we need to add into fronmatter just look like this

`icon: "airplane"`

use `airplane` to add bootstrap icon

If the icon requires an image format so you can use the svgicon repo, visit https://www.svgrepo.com/

Download icon image and upload in to your icon frontmatter

---

## Embed Mode 🎥

For embed you can simply copy and paste url link from youtube, and others.

See on demo example post `content/blog/demo.md`

or open [DEMO.md](DEMO.md) to see how to embed and use syntax highlights

---

### 📲 PWA Setup

open on `public/manifest.json`

And customise application name, background color, icon, and others..

Frontmatter concept

```
{
	"background_color": "#FB3B15",
	"theme_color": "#FB3B15",
	"name": "ADAMDJBRETT",
	"short_name": "ADAMDJBRETT",
	"display": "minimal-ui",
	"start_url": "/",
	"icons": [
		{
			"src": "android-icon-192x192.png",
			"sizes": "192x192",
			"type": "image/png",
			"purpose": "any maskable"
		},
		{
			"src": "logo.png",
			"sizes": "512x512",
			"type": "image/png",
			"purpose": "any maskable"
		}
	]
}
```

---

## Optional Without CMS 📴

Follow this guide if you not use headless CMS

---

### Configuration your site 🛠

Open `_data/metadata.json`

```
{
// your website title...
  "title": "Adam Dj Brett",
// description your website here..
  "description": "Adam Dj Brett Web Developer",
// Your Icon..
  "icon": "/assets/img/logo.png",
// Favicon image here..
  "favicon": "/assets/img/logo.png",
// Cover default if your page not add image for meta tag, open graph and twitter card
  "cover": "/assets/img/logo.png",
// Cover default if your page not add image for meta tag, open graph and twitter card
  "image": "/assets/img/logo.png",
// Your site Lang
  "language": "en",
// Site locale lang
  "locale": "en_US",
// Add your formspree id here
  "formspree_id": "https://formspree.io/xdodoqnq",
// Your Site URL Link
  "url": "https://adamdjbrett.pages.dev",
// Navbar Title
  "nav_title": "ADAM DJ BRETT", 
  "navbar":
  [
     {
	// title navbar here..
      "nav": "HOME",
	// accesskey for your nav work with ALT+Key example ALT+h for home page
      "key": "h",
	// your url link page
      "link": "/homepage"
     }
  ],
// Title for navbar dropdown
  "navbar_dropdown_title": "PAGES",
  "navbar_dropdown":
  [
     {
	// Navbar list title here..
      "nav": "GALLERY",
	// navbar dropdown accesskey here...
      "key": "g",
	// URL Link for this navbar
      "link": "/gallery"
     }
  ],

  "social": 
	// max 3 social icon
  [
     {
	// title for your icon..
      "nav": "Visit my Mastodon",
	// access key goes here...
      "key": "m",
	// Bootstrap Icon here.. see on https://icons.getbootstrap.com/
      "icon": "mastodon",
	// your social media link here...
      "link": "https://mastodon.social/@creativitas"
     },
     {
      "nav": "Visit my Twitter",
      "key": "t",
      "icon": "twitter-x",
      "link": "/"
     },
     {
      "nav": "Visit My Facebook",
      "key": "f",
      "icon": "facebook",
      "link": "/"
     }
  ],

// Your local bussines / you can use your address
  "localbusiness": {
    "address": "4100 Broxton Court",
    "locality": "Hephzibah",
    "region": "GA",
    "postalcode": "30815",
    "country": "US",
    "latitude": "33.3743286",
    "longitude": "-82.0821901,17"
  },

  "author": {
    "name": "Adam Dj Brett",
    "email": "adj@email.com",
    "url": "https://www.adamdjbrett.com/"
  },

// Insert your company details here..
  "company": {
    "founding": "2007",
    "city": "Augusta, GA 30815, USA",
    "name": "Adam DJ Brett",
    "phonecall": "18501235021",
    "phone": "850-123-5021",
    "businesshours": "Available 24/7",
    "googlereview": "https://g.page/r/CcNh4bCJxK99EBE/review",
    "address": "4100 Broxton Court - Hephzibah",
    "maplink": "https://maps.app.goo.gl/evroidhXw8zvsc6P7",
    "email": "admin@adamdjbrett.com"
  },

// This is for configure your project widget and breadcumb
  "project": {
    "breadcumb": "Projects",
    "title": "Projects",
    "button": "SEE ALL PROJECTS",
    "link": "/project/"
  },

// This is for configure your blog widget and breadcumb
  "blog": {
    "breadcumb": "Blog",
    "title": "Featured Posts",
    "button": "SEE ALL POSTS",
    "link": "/blog/"
  },

// This is for configure your footer area
  "footer": {
    "text1": "Copyrights",
    "text2": "Adam DJ Brett",
    "link": "https://adamdjbrett.pages.dev"
  }

}
```

---

### Home page 🏠

Open `content/index.md`

Update SEO home Page

```
title: "Adam DJ Brett"
description: "Web Developer Adam Dj Brett"
image: "/assets/img/adamcool.png"
```

Update Header Area

```
header:
 intro: "I’M A DEVELOPER, DIGITAL ARTIST, CONSULTANT AND A BUNCH OF OTHER IMPRESSIVE TITLES AND BUZZ WORDS."
 text: "This is my info—I’m sharing it all this with ya’ll to impress you with all the hard work I’ve done in the past few years. Once you’re impressed, you can continue to scroll down to see more details and credentials about me."
```

Update From Area

```
form: 
 title: "GOT AN INTERESTING PROJECT? TELL ME MORE...💬"
 button: "Submit 🚀"
```

---

### 💡 Info Page 

Open `content/info.md`

Update SEO info Page

```
title: "Information about Adam Dj Brett"
description: "If you need to know about adam dj brett visit this page."
```

Update Header Area

```
header: "HEY I’M A DEVELOPER. I’VE BEEN BORN AND RAISED IN THE WORLD, AND THAT’S ALSO WHERE I’M BASED. I’M CURRENTLY A FREE AGENT, EX-THIS, EX-THAT, EX-SUPER BIG NAME. WHEN I’M NOT CODING, WRITING OR CREATING, I EAT CEREALS. I HAVE A DOG, CHECK HER OUT @MYGOD."
image: "/img/demo/adjbcool.jpg"
```

Update Folks Area

Use svg icon image visit on https://www.svgrepo.com/

```
folks: 
 title: "I worked with these folks:"
 tech: 
   - icon: "/img/demo/logo1.svg"
     title: "Company 1"
   - icon: "/img/demo/logo2.svg"
     title: "Company 2"
   - icon: "/img/demo/logo3.svg"
     title: "Company 3"
   - icon: "/img/demo/logo4.svg"
     title: "Company 4"
   - icon: "/img/demo/logo5.svg"
     title: "Company 5"
   - icon: "/img/demo/logo2.svg"
     title: "Company 6"
```

Update FindMe Area

```
findme: 
 title: "You can find me here:"
 tech: 
   - icon: "/img/demo/github.svg"
     title: "Github"
   - icon: "/img/demo/twitter.svg"
     title: "Twitter"
   - icon: "/img/demo/linked.svg"
     title: "Linked"
   - icon: "/img/demo/instagram.svg"
     title: "Instagram"
   - icon: "/img/demo/facebook.svg"
     title: "Facebook"
   - icon: "/img/demo/mastodon.svg"
     title: "Mastodon"
```

Update Skills Area

```
skilles: 
   - text: "Web 3.0"
   - text: "Jekyll"
   - text: "Eleventy 11ty"
   - text: "Astro Js"
   - text: "Gatsby Js"
   - text: "Next Js"
   - text: "Docusaurus"
   - text: "Starlight"
   - text: "Svelte"
   - text: "Blazor WASM"
```

Update Contact Area

```
contact: "thisismyemail.@myemail.me"
```

Update Experience Area

```
experience:
 title: "Experience:"
 tech: 
  - title: "Current"
    text: 
     - job: "freelance @freelance.me" 
  - title: "20018-2024"
    text: 
     - job: "fullstack at this startup" 
  - title: "2015"
    text: 
     - job: "senior front-end at this place" 
  - title: "2013"
    text: 
     - job: "intern developer at a big company"
  - title: "2011"
    text: 
     - job: "flipping burgers"
     - job: "Jekyll Web Developer"
```

Update Education Area

```
education:
 title: "Education:"
 tech: 
  - title: "2015-2018"
    text: 
     - edu: "BA computer sciense at a semi fancy school"
  - title: "2014"
    text: 
     - edu: "React Bootcamp"
  - title: "2011"
    text: 
     - edu: "JAMSTACK Bootcamp"
     - edu: "Static Site Generator Courses Bootcamp"
```

Update Form Area

```
form: 
 title: "LET'S TALK... 💬"
 button: "Submit 🚀"
permalink: "/info/"
```

---

### CV Page 📌

Open `content/cv.md`

Update SEO for CV page

```
title: "Adam Dj Brett CV"
description: "CV of Adam Dj Brett"
```

Update Header Area

```
header:
 intro: "I’M A DEVELOPER, DIGITAL ARTIST, CONSULTANT AND A BUNCH OF OTHER IMPRESSIVE TITLES AND BUZZ WORDS."
 text: "This is my info—I’m sharing it all this with ya’ll to impress you with all the hard work I’ve done in the past few years. Once you’re impressed, you can continue to scroll down to see more details and credentials about me."
```

Update Contact Form Area

```
contact: "GOT AN INTERESTING PROJECT? TELL ME MORE...💬"
```

---

### 📷 Gallery Page

Open `content/gallery.md`

Update SEO for gallery Page

```
title: "Adam Dj Brett Galleries"
image: ""
description: "Gallery of the Art Adam Dj Brett"
```

Update Header Area

```
header: "Gallery"
```

Update or add new image gallery

```
galleries: 
  - title: "2009 Diversity and Social Justice Lecture by Dr. Lester Ruiz of ATS at Brite Divinity School, Texas Christian University"
    image: /assets/img/posters/2009-Harry-Knox.jpg
    order: 1
  - title: "2009 Dialogue with Nietzsche: Christianity after Nietzsche, Nietzsche after Christianity by Dr. Lester Ruiz of ATS at Brite Divinity School, Texas Christian University"
    image: /assets/img/posters/2009-Dr-Lester-Ruiz-ATS-Guest-lecture-Rev-1.jpg
    order: 2
```

---

### 🏷 Tags Page

Open `content/tags.md`

Update title description for SEO and header area

```
title: Adam DJ Brett Tags
header: Adam DJ Brett Tags
description: Tags Adam Djbrett
```
---

### 🎮 Project List Page

Open `content/project.md`

Need to update or change this frontmatter

Update SEO for project list page

```
title: "Adam Dj Brett Project"
description: "Adam Dj Brett Projects"
```

Update Header Area

```
header: "PROJECT"
```

Update Pagination Post Show - change size number for example `6` to be `12` if you want show 12 posts on projects lists page

```
pagination:
  data: collections.projects
  size: 6
```

Update form area

```
form: 
 title: "LET'S TALK... 💬"
 button: "Submit 🚀"
```
---

### Blog List Page ✏️

Open `content/blog.md`

Update SEO for blog list page

```
title: "Adam Dj Brett Project"
description: "Adam Dj Brett Projects"
```

Update Header Area

```
header: "PROJECT"
```

Update Pagination Post Show - change size number for example `6` to be `12` if you want show 12 posts on blog lists page

```
pagination:
  data: collections.projects
  size: 6
```

---

### 📖 Blog Posts Article

Open `content/blog/`

You can update and delete article on this folder.

Frontmatter concept

```
---
title:  "Your article title here.."
description: "Description about your article here..."
image: "Image URL link use local image example /assets/img/adamcool.png"
canconcial_url: "OPtional if you want use canoncial url link for this article"
original_link: "Optional if you need to outbound link to original link article"
date: 2024-07-13
tags: notes , tags
---
Write article here...
```

---

### 📃 Static Page

Open `content/pages/`

You can update and delete static page on this folder.

Frontmatter concept

```
---
title: About
description: About Adam Dj Brett
permalink: /about/
---
Write article here...
```

### 📖 Projects Posts Article

Open `content/project/`

You can update and delete project article on this folder.

Frontmatter concept

```
---
title: This is title
description: This is description
image: "/img/demo/project1.jpg"
date: 2018-07-04
tags:
  - number 2
---
Write article here...
```

---

### 🕹 CV list 

Open `content/cv/`

You can update and delete cv list with markdown concept in this area.

+ academic folder is for update academic cv section
+ activites folder is for update activites cv section
+ associations folder is for update associations cv section
+ awwards folder is for update awwards cv section
+ colaborative folder is for update colaborative cv section
+ education folder is for update education cv section
+ exams folder is for update exams cv section
+ languages folder is for update languages cv section
+ presentations folder is for update presentations cv section
+ publication folder is for update publication cv section
+ scholarship folder is for update scholarship cv section
+ service folder is for update service cv section
+ skills folder is for update skills cv section
+ teaching folder is for update teaching cv section
+ technical folder is for update technical cv section
+ training folder is for update training cv section

Frontmatter concept

```
---
title: "2018"
date: 2024-07-02
---
- Webmaster (2015-2018)
    - Syracuse University, Department of Religion (thecollege.syr.edu/religion)
    - Syracuse University, Jewish Studies (jsp.syr.edu)
    - Syracuse University Women in Science and Engineering, Summer 2018 (suwise.syr.edu)
- Website Advisor and Event Coordination (Summer 2018)
    - IAWE (iawe.syr.edu)
- Webmaster and Social Media Coordinator
    - Flourish and Decay: Exploring Religion in Process: Syracuse University, Religion Graduate Student Conference

```

---

## Style Guide 🎨

This project uses bootstrap for performance and speed.

So you can see it in the bootstrap docs

https://getbootstrap.com/docs/5.3/components/accordion/

### 🌟 Extra Style

To change additional styles you can change and update the code in `_includes/widget/seo.njk` and `_includes/widget/seoblog.njk`

if you want use glass efect you can add `class="glass"` and add `class="glass-dark"` for dark glass efect

To change font family you can import your fornt then change this line code

```
html,body {
font-family: "replace with your font";
}
```
To change header font, import your fonts, and change this line code

```
h1,h2,h3,h4,h5,h6 {
font-family: "replace with your font";
}
```
