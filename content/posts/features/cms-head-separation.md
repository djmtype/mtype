---
title: CMS Head Separation
description: 'Using Wordpress today versus yesterday on projects that require a client access to content'
date: 2019-06-18
cover_image: ../images/headless-cms.jpg
cover_image_id: m9d8W67TXDI
category: Features
tags: ['jamstack','gridsome','vue','eleventy']
status: published
hasPlaylist: false
---

## Where We Began 

Historically whenever our project required a CMS, we've reached for Wordpress, the standalone open source project. It has been the defacto toolset in our utility belt, serving us for a couple decades; since version 1.0.3.

### Wordpress Praise Points: 

- Mature 
- Well-known 
- Well-documented
- Easy learning curve
- Powers ~35% of all sites
- Ongoing development
- Large community support
- Plug-in system

However, some of these bullets are also its weakness. 

Later on Wordpress poorly introduced Gutenberg, a premature page builder. The community sparked very decisive opinions regarding its direction. Wordpress' core developers were clearly trying to expand their audience given how page builder plugins and services were succeeding among hobbyists and designers. There's no denying Wordpress needed to change with the times. The problem is a freeform page builder and CMS offer two distinct resolutions. 

Developers hate page builders for good reason. They literally come with their own baggage and own opinionated philosophy. They are meant to satisfy everyone and no one in particular. 

On the other hand, page builders allow freedom to designers and marketeers. Normally, developers are able to control or prevent their clients from creating haphazard visual and functional mishaps. The average person is not a designer or an accessibility expert, nor should they be making risky decisions. With a freeform page builder, there is less restriction. Meaning, theme developers must devote more time managing areas of concern that never existed before. 

Besides, giving the average client more responsibility might throw him or her into a deer-trapped-in-headlights situation, overwhelmed by a Pandora's box of possibilities. Compare that to a CMS experience. Entry fields are set up and designed to help guide the user through the process of predictable options. 

I was much in favor of WordPress offering a component-based block system. However, their execution was something less than desireable. To this day, Gutenberg's interface is still a minefield of mostly foreign icons. True, they offer an "accessible" UI view which replaces icons with written labels, but its integration is more like an afterthought. Why not just add a label below each icon? It's difficult enough to tell which items have been nested (or grouped) without digging through the ambiguous document tree from the toolbar. 

### Wordpress Sans Gutenberg

Regardless of Gutenberg's integration, Wordpress has always had its pain points. We've pushed through them despite its flaws. Its text editor, TinyMCE, ships with a deprecated version, revealing its true age. Compare that to the Gutenberg editor which is built on React. There is no comparison. The Gutenberg editor loads extremely fast. However, navigating between admin pages is still quite slow, regardless of the latest PHP, Apache and MySQL versions. Wordpress much remains as a series of PHP files. 

When used as a coupled CMS, the other issue Wordpress suffers from is data management. Development is anything but simple when there are several sources of truth. This problem isn't exclusive to Wordpress either. The same is true for any database-driven site when its head is attached to its rear. 

In a solo development scenario, the bulk of a Wordpress project is constructed locally. Once completed, the database dump, core and theme files are then uploaded or pushed to the remote server. Some time after this moment, the local database and contents are going to differ from the remote installation. The same can be said when working with a team. There will be at least two different databases to manage. 

Should a new type of page be introduced to the project, the best practice is to build and test in a staging environment. The same actions then have to be repeated on the remote Wordpress instance making the process both time-consuming and a nuisance. Not to mention, allowing room for error. Should a page need to be targeted by a specific ID or revised slug, then conflicts will arise should the databases fall out of sync. 

To help address these symptoms of ad nauseam, Delicious Brains' [WP Migrate DB Pro](https://deliciousbrains.com/wp-migrate-db-pro/pricing/) offers a very well-crafted, but expensive plugin. The annual cost per license, per small team is $600. 

The other option… 

### Going Headless

Wordpress used as a decoupled or headless CMS will relieve much anxiety when working with its REST API instead. However, this raises another question. Which framework should be used to handle the front end? Wordpress is written in PHP. Now PHP developers need to quickly become well-versed with another framework? Since Gutenberg's block components are written in React, reaching for React would be the obvious answer. Although I'd imagine some developers strongly detest React's rat's nest approach; myself included. Fortunately, Advanced Custom Fields provides a way of writing [blocks without React](https://www.advancedcustomfields.com/blog/acf-5-8-introducing-acf-blocks-for-gutenberg/). There is a an unfortunate side effect however. These blocks aren't as pretty or seamless as native Gutenberg blocks, but I digress. What's left now is choosing an enjoyable framework like Vue or Svelte for the front end. 

Working with the REST API still doesn't account for Wordpress' weaknesses. As mentioned earlier, [Wordpress powers 35% of all sites](https://www.whoishostingthis.com/compare/wordpress/stats/) and lately receives more love by hackers than its supporters. In Stack Overflow's 2020 Developer's Survey, [Wordpress was nominated the most dreaded platform](https://insights.stackoverflow.com/survey/2020#technology-most-loved-dreaded-and-wanted-platforms-dreaded5).

The other problem… now that Wordpress' clear roadmap is to become [the ultimate page builder](https://wptavern.com/gutenberg-9-0-brings-major-improvements-to-navigation-screen-and-query-block), what do clients expect? I'm pretty certain no developer would be thrilled building an entire project only to find out after launch their client was thinking "page blocks" instead of the classic CMS. 

In summary, here is a typical Wordpress headless setup for client applications: 

- Cloud hosting for Wordpress' admin files and media
- Apache or Nginx for serving Wordpress
- MySQL or MariaDB for managing the data
- Wordpress for managing content and serving API endpoints
- Plugins for content management, managing API endpoints, and triggering deployment:  
  - [Advanced Custom Fields](https://www.advancedcustomfields.com/)
  - [ACF to Rest API](https://github.com/airesvsg/acf-to-rest-api)
  - [Deploy with NetlifyPress](https://wordpress.org/plugins/deploy-netlifypress/)
- A Wordpress theme (still required for blocks and functions)
- Optional React knowledge for creating native Gutenberg blocks
- A Vue-based framework for writing the frontend templates
- [Netlify](https://www.netlify.com/) for delivering a static version of the website   

## Talking Alternatives 

### Back of the Front - The CMS 

For most use cases I'd rather utilize Wordpress in a headless fashion instead of the old monolithic approach especially for large pre-existing Wordpress sites. However, there are alternative solutions when it comes to the administrative area or backend of the CMS. 

Honestly, for smaller projects, developers don't need to look any further than utilizing Markdown files for content. The beauty about Markdown when partnered with a CMS is that clients would never know the difference. As a bonus, all these files would be saved to the same project repo for tracking changes. Plus, no more database means no more content fragmentation. 

[Sanity](https://www.sanity.io/) and [Prismic](https://prismic.io/) fall into different headless categories as SasS (Software as Service) products. Your project's data is hosted on their servers. Both services include file storage and image transformations as well. Their price is based on the amount of users and can be on par or less than regular shared hosting since these services would be substituted for traditional hosting. They are each free to try out as long as needed. 

SasS products truly shine in situations where you don't want to be bothered with server management and relentless pesky hackers.

Another similar, but somewhat different solution is [Strapi](https://strapi.io/). Strapi is open source and free, driven by a community of developers. Imagine Advanced Custom Fields for Wordpress, but without Wordpress. That's Strapi. Its CMS is self-hosted, so the data storage type and management is entirely up to the developer. A traditional host like MediaTemple can still be used. But, personally, I've preferred [Heroku's Postgres](https://www.heroku.com/postgres) as an ideal choice. Since Heroku's Postgres will be managing data only, cloud storage for media is required. Personally, I've been using [Cloudinary](https://cloudinary.com/) since its API can be integrated with just about anything. Their free tier for image storage and transformations is extremely generous, all served from a CDN, too. 

Sanity, Prismic and Strapi are API-based which differ from Git-based solutions like [Forestry](https://forestry.io/) and [NetlifyCMS](https://www.netlifycms.org/). These are also well-documented if not simple to set up. Forestry's pricetag is similar to the solutions mentioned earlier while NetlifyCMS is free to use. 

Reaching for either an API or git-based solution will depend on the project.  

### Front of the Front – The Presentation

In order to deliver content from the CMS, we need a means to retrieve and display it. React-flavored frameworks like Next or Gatsby are extremely popular if you like that approach. I've already shed my feelings earlier on React. Call me ol' school, but I love template tags and well-organized structure. That's why I've landed on either, [Gridsome](https://gridsome.org/) or [Nuxt](https://nuxtjs.org/). 


Gridsome and Nuxt each offer a unique approach in the Vue category. Gridsome is specifically geared towards using Vue with GraphQL while Nuxt is a more generalized Vue framework that can fetch data from APIs. However, [Apollo](https://www.apollographql.com/) can be integrated into any Nuxt project if using GraphQL is preferred. Nuxt can also build out an SPA (Single Page Application). But, in this context, I'm mainly focusing on Nuxt for delivering SSG (Static Site Generation). The [Nuxt Content API](https://content.nuxtjs.org/) module is also wonderful for those git-based projects. 

Should you want to avoid opinionated frameworks all together, nothing beats [11ty (Eleventy)](https://www.11ty.dev/), especially for git-based projects. An 11ty project is dead simple to get running. It also allows for a variety of different template languages. 

Here's just one setup example partnered with a SasS provider: 

- Sanity (or Prismic or Forestry or NetlifyCMS) for CMS backend
- Gridsome (or Nuxt or 11ty) for CMS frontend
- Netlify for content delivery 

_Notice the fewer required parts than running a headless Wordpress setup?_

## The Takeaway 

I've purposely failed to explain why server-side languages and frameworks would still be viable options. There still are many use cases. 

Besides, the focus here is on our projects which have been, can be or should be static. Even with our Wordpress-less projects we've mostly reached for PHP because it's made coding less verbose, more digestible. PHP allows for partially DRY (Don't Repeat Yourself) development. But, we can produce those same results today without reaching for a toolset that prevents us from our own progress.

**Update:** My clients have all been quite critical of Gutenberg and find it confusing even after removing most of its shipped blocks. They've shared the same aggravations I mentioned above. Most of all, they're frustrated by how text objects like heading, paragraphs and lists are converted into separate blocks.