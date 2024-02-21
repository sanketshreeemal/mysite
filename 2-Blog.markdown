---
layout: page
title: Notes
permalink: /notes/
---
{% for post in site.posts %}
  - [{{ post.title }}]({{ post.url | relative_url }})
  <br>
  *{{ post.date | date: "%B %d, %Y" }}*
{% endfor %}