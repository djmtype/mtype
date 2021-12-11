---
title: Unsplash with Gridsome
description: 'Using Unsplash for your posts’ cover images'
date: 2021-12-09
cover_image: ../images/headless-cms.jpg
coverImage: gdU9NcMLg-M
category: Features
tags: ['gridsome', 'unsplash', 'axios']
status: published
hasPlaylist: false
---

There's severals ways of incorporating images on your site. With that said, this is probably not one of them. With all your enthusiasm drained, please continue reading… or don't. 

For starters, you should not hotlink to an image from a 3rd-party URL unless it's a trusted CDN. Most certainly, it will take longer for the image to load compared to an image hosted within your own site's directory. Another disadvantage when it comes to Gridsome, these images can't be processed as `<g-image>` components because they live offsite. True, there's a plugin for that, but then you'll just be adding to the workload at build-time. The other downside – javascript is required for this to function. Should javascript be disabled, this data won't get loaded onto the page. 

*Postscript: Gridsome might be a static site generator, but it still relies on javascript to run properly such as rendering your other `<g-image>` components, prefetching routes, delivering page transitions, other things.*

Basically, I wanted to explore how to `GET` data from an endpoint that included a dynamic part. In this case it's the image `:id`. 

The API endpoint: `https://api.unsplash.com/photos/:id/?client_id=xxx` 

The documentation: [https://unsplash.com/documentation#get-a-photo](https://unsplash.com/documentation#get-a-photo)

To grab a specific image from Unsplash, you will only need to add its `:id` to your markdown file's frontmatter. That's all. No need to figure out and download the right image size or format, no need to grab the photo's attribution snippet. This logic will be expressed inside the template. 

BTW, you can find said `:id` when visiting a single photo's modal/page.  
Example: `https://unsplash.com/photos/gdU9NcMLg-M`  
The `:id` resides at the very end of the URL.

Basic frontmatter inside `./content/posts/my-post-title.md`: 

```md
---
title: My Post Title
coverImage: gdU9NcMLg-M
---
```

Abridged code for `./src/templates/Post.vue`: 

```js
<template>
<div>
  <img :src="unsplash.urls.regular" loading="lazy" :width="unsplash.width" :height="unsplash.height" :alt="unsplash.alt_description" />

  // Give the author street cred  
  Photo by 
  <a :href="unsplash.links.html + '?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText'">
  {{ unsplash.user.name }}
  </a>
  on 
  <a href="https://unsplash.com/?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
  Unsplash
  </a>
  </div>
</template>

<page-query>
query Post($path: String, $id: ID) {
  post: post (path: $path, id: $id) {
    id
    title
    coverImage
  }
}
</page-query>

<script>
import axios from 'axios';

export default {
  data () {
    return {
      unsplash: {
        links: {
          html: ''
        },
        user: {
          name: ''
        },
        urls: {
          regular: '',
          raw: ''
        }
      }
    }
  },
  async mounted () {
    try {
      const results = await axios.get(
        `https://api.unsplash.com/photos/${this.$page.post.coverImage}/?client_id=${process.env.GRIDSOME_UNSPLASH_CLIENT_ID}`
      )
      this.unsplash = results.data
    } catch (error) {
      console.log(error)
    }
  }
};
</script>
```
I didn't arrive at this solution on my own. The code example above can easily be discovered on [Gridsome's official docs](https://gridsome.org/docs/client-side-data/#fetch-from-rest-api). 

I'll leave you with a silver-lining on a better practice instead of the nonsense I've written above. 

For the specific case of using Unsplash as local images, [refer to this helpful part](https://mannes.tech/gridsome-images#add-cover-images-as-front-matter) of "How to Add Cover Images To Your Gridsome Posts" by Simon Mannes.
