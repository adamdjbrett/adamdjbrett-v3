---
layout: layouts/base.njk
title: "Adam Dj Brett Project"
description: "Adam Dj Brett Projects"
header: "PROJECT"
pagination:
  data: collections.projects
  size: 6
  reverse: true
testdata:
 - item1
 - item2
 - item3
 - item4
form: 
 title: "LET'S TALK... 💬"
 button: "Submit 🚀"
permalink: "project/{% if pagination.pageNumber > 0 %}page-{{ pagination.pageNumber + 1 }}/{% endif %}index.html"
---
<header class="container-fluid">
<div class="col-md-9 mx-auto p-3 mts">
<h1 class="header_title"><strong><a href="{{page.url}}">{{header}}</a></strong></h1>
<h2 class="lead mt-3">{{description}}</h2>
</div>
</header>



<div class="p-3 col-md-10 mx-auto">
<div class="row">
{%- for item in pagination.items -%}
<a href="{{item.url}}" class="col-md-6 p-2 posts mb-3 mt-5">
<div class="p-3 border-bottom ">
{% if item.data.image %}<img class="img-fluid img-post mb-3" alt="{{item.data.title}}" width="100%" height="100%" src="https://wsrv.nl/?url={{metadata.url}}{{item.data.image}}&w=500&h=500&output=webp"/>{% endif %}
<h3>{{ item.data.title }}</h3>
<p>{{ item.data.description }}</p>
<p class="icones">
<svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="currentColor" class="bi bi-arrow-up-right-circle icons" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.854 10.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707z"/>
</svg>
</p>
</div>
</a>
{%- endfor -%}
</div>
<nav aria-label="Page navigation example">
  <ul class="pagination justify-content-center p-3 mt-5">
<li class="page-item">{% if page.url != pagination.href.first %}<a class="page-link" href="{{ pagination.href.first }}">First</a>
{% endif %}</li>
    <li class="page-item">{% if pagination.href.previous %}<a class="page-link" href="{{ pagination.href.previous }}">Previous</a>
{% endif %}</li>
{%- for pageEntry in pagination.pages %}
   <li class="page-item"><a class="page-link btn glass" href="{{ pagination.hrefs[ loop.index0 ] }}"{% if page.url == pagination.hrefs[ loop.index0 ] %} aria-current="page"{% endif %}> {{ loop.index }}</a></li>
{%- endfor %}
   <li class="page-item">{% if pagination.href.next %}<a class="page-link" href="{{ pagination.href.next }}">Next</a>{% else %}
{% endif %}</li>
   <li class="page-item">{% if page.url != pagination.href.last %}<a class="page-link" href="{{ pagination.href.last }}">Last</a>{% else %}
{% endif %}</li>
  </ul>
</nav>

</div>

{% include "widget/info/form.njk" %}