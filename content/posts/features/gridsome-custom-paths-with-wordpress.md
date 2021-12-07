---
title: Gridsome Custom Paths with Wordpress
description: 'Creating a custom path with Gridsome and Wordpress is not straight forward'
date: 2021-07-08
cover_image: ../images/cms-headless.png
cover_image_id: m9d8W67TXDI
category: Features
tags: ['jamstack','gridsome','vue','wordpress']
status: published
hasPlaylist: false
---

A while back I needed to include a "dynamic" term within my path. Here is the original [Discord](https://discord.com/channels/476372673564246017/519253675076616255/762426958704279555) entry. 

With the help of @travis, I was going to post the answer, then totally forgot. Shame on me because years later I needed to revisit that same scenario. 

I had set up a Wordpress custom taxonomy called `galleries`. (Think of `galleries` as Wordpress' own `categories`.) Like any other taxonomy, it allowed for multiple terms, so I wanted my path to include the first term associated with the post. 

The path would render something like this: `/artwork/originals/my-artwork-title`, where *originals* is the actual term. In Gridsome, it would be represented as `galleries[0].slug`. 

I was confused for a couple reasons. For one, [Templates - Gridsome](https://gridsome.org/docs/templates/) states it's possible to use the `templates` path as seen below.

```js
// gridsome.config.js
module.exports = {
  templates: {
    WordPressArtworks: '/artwork/:galleries__0__slug/:slug',
  }
}
```

or

```js
// gridsome.config.js
WordPressArtworks: [
  {
    path: (node) => {
    return `/artwork/${node.galleries[0].slug}/${node.slug}`
    }
  }
]
```

Neither of above code examples work – at least for Wordpress – or to my knowledge. Maybe there's a different approach? There's a benefit of using `templates` as it will add a `path` node to the schema. However, simply injecting `:galleries__0__slug` will not render correctly. 

Instead, `galleries-0-slug` was literally being rendered. Otherwise, it might be returned as `undefined`. Regardless, the `galleries` term will not be displayed properly. 

Wordpress uses references and returns the `id` of the term, not the actual `slug` name.  

@travis did a better job at explaining –  

> Gridsome just stores references to other nodes, and the GraphQL layer actually 'links' them together. So each object in *categories* will contain an *id*, and *typeName* (of the related node/s)

An example record when running `console.log(node.galleries)`: 

```js
[ { typeName: 'WordPressGalleries', id: '8' } ]
```

## The workaround (or solution?)

Use `createPages` ([Pages API - Gridsome](https://gridsome.org/docs/pages-api/#create-pages-from-graphql))

```js
// gridsome.server.js
module.exports = function(api) {
  api.createPages(async ({ graphql, createPage }) => {
    const { data } = await graphql(`
      {
        allWordPressArtworks {
          edges {
            node {
              id
              slug
              galleries {
                id
                slug
              }
            }
          }
        }
      }
    `);

    data.allWordPressArtworks.edges.forEach(({ node }) => {
      createPage({
        path: `/artwork/${node.galleries[0].slug}/${node.slug}`,
        component: "./src/templates/WordPressArtworks.vue",
        context: {
          id: node.id,
        },
      });
    });
  });
};
```

Within the `WordPressArtwork.vue` template, the `id` needs to be specified. For clarity, here is an abbreviated `page-query`: 

```graphql
query WordPresArtworks($id: ID!) {
  wordPressArtworks(id: $id) {
    id
    slug
    galleries {
      id
      slug
    }
  }
}
```

Now within one my Vue pages, like `Originals.vue`, I can link to one of my single `WordPressArtworks` posts following this example:  

```html
<g-link :to="'/artwork/' + element.node.galleries[0].slug + '/' + element.node.slug">
```
*Maybe the `g-link` component can be written more elegantly?* 

Unfortunately, I don't get to use Vue often so I can't answer that question. Although, I've been using Vue via Gridsome for a couple years, my learning has slowed down due to work and non-work. Perhaps, once Gridsome adopts Vue 3 it will rev me back up.
