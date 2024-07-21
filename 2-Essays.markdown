---
layout: page
title: Essays
permalink: /notes/
---
Book Reviews
{% for post in site.posts %}
  - [{{ post.title }}]({{ post.url | relative_url }}) / *{{ post.date | date: "%B %d, %Y" }}*
{% endfor %}

Finance Series

{% for post in site.finance_posts %}
  - [{{ post.title }}]({{ post.url | relative_url }}) / *{{ post.date | date: "%B %d, %Y" }}*
{% endfor %}
