---
title: Removing the Head – A CMS Tale
date: '2019-06-18'
tags:
  - development
  - wordpress
  - gridsome
  - nuxt
  - blog
---

Static sites are better for our clients and more fun to build. Let's get started.

- - -

## Where We Began 

Historically whenever our project required a CMS, we've reached for Wordpress, the standalone open source project. It has been the defacto toolset in our utility belt, serving us well for over a decade.

### Wordpress Praise Points: 

- Mature 
- Well-known 
- Well-documented
- Easy learning curve
- Powers 35% of all sites
- Ongoing development
- Large community support

However, some of these bullets are also its weakness. 

Later on Wordpress poorly introduced Gutenberg, a premature page builder. The community sparked very decisive opinions regarding its direction. Wordpress' core developers were clearly trying to expand their audience given how page builder plugins and services were succeeding among hobbyists and designers. There's no denying Wordpress needed to change with the times. The problem is a page builder and CMS offer two distinct resolutions. 

Developers hate page builders for good reason. An acceptable argument is page builders allow freedom to designers. The counter argument, with a CMS, developers are able to control or prevent their clients from creating haphazard visual and functional mishaps. The average person is not a designer or an accessibility expert, nor should they be making risky decisions. With a page builder, there is less restriction, too. Meaning, theme developers must devote more time managing areas of concern that never existed before.  

Besides, giving the average client more responsibility might throw him or her into a deer-trapped-in-headlights situation; overwhelmed by a Pandora's box of possibilities. Compare that to a CMS experience. Entry fields are set up and designed to help guide the user through the process of predictable options. 

### Wordpress Sans Gutenberg

Regardless of Gutenberg's integration, Wordpress has always had its pain points. We've pushed through them despite its flaws. I lived with them since version 1.0.2. Its now-partially-retired editor, TinyMCE, has shown its true age. Compare that to the Gutenberg editor which is built on React. There is no comparison. The Gutenberg editor loads extremely fast. However, navigating between admin pages is still excessively slow, regardless of the latest PHP, Apache and MySQL versions. Wordpress remains as a series of PHP files. 

When used as a coupled CMS, the other issue Wordpress suffers from is data management. Development is anything but simple when there are several sources of truth. This problem isn't exclusive to Wordpress either. The same is true for any database-driven site when its head is attached to its rear. 

In a solo developer scenario, the bulk of a Wordpress project is developed locally. Once completed, the database dump, core and theme files are then uploaded or pushed to the remote server. Some time after this moment, the local database and contents are going to differ from the remote installation. The same can be said when working with a team. There will be at least two different databases to manage. 

Should a new page be introduced to the project, it's best practice to build and test locally first. The same actions then have to be repeated on the remote Wordpress instance. This course of action is both time-consuming and a nuisance allowing room for error. Should a page need to be targeted by a specific ID or revised slug, then problems will arise should the databases fall out of sync. 

To help address these symptoms of ad nauseam there, Delicious Brains' [WP Migrate DB Pro](https://deliciousbrains.com/wp-migrate-db-pro/pricing/) offers a very well-crafted, but expensive plugin. The annual cost per license, per small team is $600. 

The other option… 

### Going Headless

Wordpress used as a decoupled or headless CMS will relieve some anxiety when working with its REST API instead. However, this raises another question. Which framework should be used to handle the front end? Wordpress is written in PHP. Now PHP developers need to quickly become well-versed with another framework? Since Gutenberg's block components are written in React, React would be the obvious answer. Although I'd imagine some developers strongly detest React's rat's nest approach like me. Fortunately, Advanced Custom Fields provides a way of writing [blocks without React](https://www.advancedcustomfields.com/blog/acf-5-8-introducing-acf-blocks-for-gutenberg/). There is a an unfortunate side effect however. These blocks aren't as pretty or seamless as native React blocks, but I digress. What's left now is choosing a Vue or Svelte-flavored framework for the front end. 

Working with the REST API still doesn't account for Wordpress' weaknesses. As mentioned earlier, [Wordpress powers 35% of all sites](https://www.whoishostingthis.com/compare/wordpress/stats/) and lately receives more love by hackers than its supporters. In Stack Overflow's 2020 developer's survey, [Wordpress was nominated the most dreaded platform]((https://insights.stackoverflow.com/survey/2020#technology-most-loved-dreaded-and-wanted-platforms-dreaded5)).

The other problem… now that Wordpress' clear roadmap is to become [the ultimate page builder](https://wptavern.com/gutenberg-9-0-brings-major-improvements-to-navigation-screen-and-query-block), what do clients expect? I'm pretty certain no developer would be thrilled building an entire project only to find out after launch their client was thinking "building blocks" instead of the classic CMS. 

In summary, here is a typical Wordpress headless setup for client applications: 

- Cloud hosting for Wordpress' admin files and media
- Apache for serving Wordpress
- MySQL for managing the data
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

[Sanity](https://www.sanity.io/) and [Prismic](https://prismic.io/) fall into similar categories as SasS (Software as Service) products. Your project's data is hosted on their servers. Both services include file storage and image transformations as well. The price is on par or less than regular shared hosting since these services would be substituted for traditional hosting. They each offer a free tier as well. 

SasS products truly shine in situations where you don't want to be bothered with server management and relentless pesky hackers.

Another similar, but somewhat different solution is [Strapi](https://strapi.io/). Strapi is open source and free, driven by a community of developers. Imagine Advanced Custom Fields for Wordpress, but without Wordpress. That's Strapi. Its CMS is self-hosted, so the data storage type and management is entirely up to the developer. A traditional host like MediaTemple can be used. But, personally, I've found using [Heroku's Postgres](https://www.heroku.com/postgres) was an ideal choice. Since Heroku is for data storing only, cloud storage for media is necessary. Personally, I've been using [Cloudinary](https://cloudinary.com/) since its API can be integrated with just about anything. Their free tier is extremely generous for storage and image transformations, all served from a CDN. 

Sanity, Prismic and Strapi are API-based which differ from Git-based solutions like [Forestry](https://forestry.io/) and [NetlifyCMS](https://www.netlifycms.org/). These are also well-documented if not simple to set up. Forestry's pricetag is similar to the solutions mentioned earlier while NetlifyCMS is free to use. 

Reaching for either an API or git-based solution will depend on the project.  

### Front of the Front – The Presentation

In order to deliver content from the CMS, HTML and/or Javascript are necessary. React-flavored frameworks like Next or Gatsby are extremely popular if you like that approach. I've already shed my feelings earlier on React. Call me ol' school, but I love template tags and well-organized structure. That's why I've landed on either, [Gridsome](https://gridsome.org/) or [Nuxt](https://nuxtjs.org/). Should you want to avoid opinionated frameworks all together, nothing beats [11ty (Eleventy)](https://www.11ty.dev/), especially for git-based projects. An 11ty project is dead simple to get running. It also allows for a variety of different template languages. 

Gridsome and Nuxt each offer a unique approach in the Vue category. Gridsome is specifically geared towards using Vue with GraphQL while Nuxt is a more generalized Vue framework that can fetch data from an API(s). However, [Apollo](https://www.apollographql.com/) can be integrated into any Nuxt project if using GraphQL is preferred. Nuxt can also build out SSR (Server Side Rendered) applications. But, in this context, I'm mainly focusing on the [Nuxt Content API](https://content.nuxtjs.org/) module for delivering SSG (Static Site Generation). 

Here's just one example partnered with a SasS provider: 

- Sanity (or Prismic or Forestry or NetlifyCMS) for CMS backend
- Gridsome (or Nuxt or 11ty) for CMS frontend
- Netlify for content delivery 

_Notice the fewer required parts than running a headless Wordpress setup?_

## The Takeaway 

I've purposely failed to explain why server-side languages and frameworks would still be viable options. There still are many use cases. For brevity-sake, one example might be ordering food online or a chat app that requires instantaneous updating between parties.

Besides, the focus here is on our projects which have been, can be or should be static. Even with our Wordpress-less projects we've mostly reached for PHP because it's made coding less verbose, more digestible. PHP allows for almost-DRY (Don't Repeat Yourself) development. But, we can produce those same results today without reaching for a toolset that prevents us from our own progress.
