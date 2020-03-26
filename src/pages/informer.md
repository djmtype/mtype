---
layout: layouts/page.njk
title: Informer
permalink: /informer/index.html
---

## Form Test

<form class="sf-flow" name="contact" method="POST" data-netlify="true">
  <p>
    <label>Your Name: </label><input type="text" name="name" />   
  </p>
  <p>
    <label>Your Email: </label><input type="email" name="email" />
  </p>
  <p>
    <label>Your Role: </label><select name="role[]" multiple>
      <option value="leader">Leader</option>
      <option value="follower">Follower</option>
    </select>
  </p>
  <p>
    <label>Message: </label><textarea name="message"></textarea>
  </p>
  <p>
    <button class="button" type="submit">Send</button>
  </p>
</form>
