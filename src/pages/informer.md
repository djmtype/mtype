---
layout: layouts/page.njk
title: Informer
permalink: /informer/index.html
---

## Form Test


<form class="sf-flow" name="contact" method="POST" data-netlify="true">
 <input type="hidden" name="subject" value="Website Submission" />
  <p>
    <label for="name">Your Name: </label><input type="text" name="name" id="name" />   
  </p>
  <p>
    <label for="email">Your Email: </label><input type="email" name="email" id="email" />
  </p>
  <p>
    <label for="role">Your Role: </label><select id="role" name="role[]" multiple>
      <option value="leader">Leader</option>
      <option value="follower">Follower</option>
    </select>
  </p>
  <p>
    <label for="message">Message: </label><textarea name="message" id="message"></textarea>
  </p>
  <p>
    <button class="button" type="submit">Send</button>
  </p>
</form>


