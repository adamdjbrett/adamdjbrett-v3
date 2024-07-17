---
layout: "layouts/base.njk"
title: Adam DJ Brett Tags
header: Adam DJ Brett Tags
description: Tags Adam Djbrett
---
<header class="container-fluid">
<div class="col-md-9 mx-auto p-3 mts">
<h1 class="header_title"><strong><a href="{{page.url}}">{{header}}</a></strong></h1>
<h2 class="lead mt-3">{{description}}</h2>
</div>
</header>
<div class="container">
<div class="p-3 col-md-9 mx-auto">
<div class="row">
{% for tag in collections | getKeys | filterTagList %}
{% set tagUrl %}/tags/{{ tag | slugify }}/{% endset %}
<div class="mt-1 mb-1 ms-1 me-1 col-md-2 col-4">
<a href="{{ tagUrl }}" 
class="btn btn-outline-light glass-dark col-12 p-1">
{{ tag }}</a></div>
{% endfor %}
</div>
</div>
</div>