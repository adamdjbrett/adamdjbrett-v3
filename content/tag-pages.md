---js
// <script>
const pagination = {
	data: "collections",
	size: 1,
	alias: "tag",
	filter: ["all", "posts", "projects"],
	addAllPagesToCollections: true,
};

const eleventyComputed = {
	title: "Tagged '{{ tag }}'",
	permalink: function(data) {
		return `/tags/${this.slugify(data.tag)}/`;
	}
};
---
<h1>Tagged “{{ tag }}”</h1>

{% set postslist = collections[ tag ] %}
{% include "postslist.njk" %}

<p class="p-3 mt-3">See <a href="/tags/">all tags</a>.</p>
