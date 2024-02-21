---
layout: page
title: Blog
permalink: /blog/
order: 2
---
{% for post in site.posts %}
  - [{{ post.title }}]({{ post.url | relative_url }})
  <br>
  *{{ post.date | date: "%B %d, %Y" }}*
{% endfor %}