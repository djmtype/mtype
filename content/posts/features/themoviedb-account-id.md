---
title: Fetching Your Account ID from The Movie DB
description: 'How to obtain your account_id from themoviedb.org'
date: 2021-03-26
cover_image: https://images.unsplash.com/photo-1542903660-eedba2cda473?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1
cover_image_id: f77Bh3inUpE
ext_image: true
photo_credit: 'Photo by <a href="https://unsplash.com/@markusspiske?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Markus Spiske</a> on <a href="https://unsplash.com/s/photos/syntax-code?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'
category: Features
tags: ['api']
status: published
hasPlaylist: false
---

Too many hours wasted on something that seemed elementary. How difficult can it be to grab a simple `account_id`? When failure strikes it usually entails some head banging followed by some modest swearing. 

Many of these same questions were asked in [their forum](https://www.themoviedb.org/talk), yet nothing but crickets.

There needs to be a ~~good~~ ~~decent~~ existing tutorial on how to retrieve one's `account_id` because there are several steps on how to get there. Maybe this is *that* tutorial?

- Follow these instructions in case my words fail you.  
  [https://developers.themoviedb.org/3/authentication/how-do-i-generate-a-session-id](https://developers.themoviedb.org/3/authentication/how-do-i-generate-a-session-id)  
	
- Use [Postman](https://www.postman.com/) or similar instead of [themoviedb.org](https://themoviedb.org)'s on-page generator, otherwise, your browser may blow a hissy fit of CORS issues.
- Be sure to pay attention to what is a `GET` versus a `POST` request.
- Your API key will be essential for everything.  
[https://www.themoviedb.org/settings/api](https://www.themoviedb.org/settings/api)

I've tried to outline the steps to the best of my memory… 

## 1. Get your Request Token 

Reference:  
[https://developers.themoviedb.org/3/authentication/create-request-token](https://developers.themoviedb.org/3/authentication/create-request-token)  

Example of the constructed URL you'll need to plug into Postman as a `GET` request:

```html
https://api.themoviedb.org/3/authentication/token/new?api_key=blahblahblah
```

Run it and there should be a Request Token waiting for you.  

## 2. Create a Session ID

Reference:  
[https://developers.themoviedb.org/3/authentication/create-session](https://developers.themoviedb.org/3/authentication/create-session)

Example of the constructed URL you'll need to plug into Postman as a `POST` request:

```html
https://api.themoviedb.org/3/authentication/session/new?api_key=blahblahblah
```

Before executing the request, within Postman's *Body* tab, you need to add your `request_token` as raw **JSON**. 

It will look something like the following: 

```json
{
  "request_token": "xxxxxxxxxxxxxx"
}
```

After running the request, you should get back your `session_id`.  

## 3. Retrieve your account details

Reference:  
[https://developers.themoviedb.org/3/account/get-account-details](https://developers.themoviedb.org/3/account/get-account-details) 

Example of the constructed URL you'll need to plug into Postman as a `GET` request:

```html
https://api.themoviedb.org/3/account?api_key=blahblahblah&session_id=xxxxxxxxxxx
``` 

After execution, this should return some JSON, and within it the `id`.  
PS: This is your `account_id`.

Example: 

```json
{
    "avatar": {
        "gravatar": {
            "hash": "bL33pb0pb00b0p"
        },
        "tmdb": {
            "avatar_path": null
        }
    },
    "id": 1234567,
    "iso_639_1": "en",
    "iso_3166_1": "US",
    "name": "",
    "include_adult": true,
    "username": "memememe"
}
```

*Tally ho!*