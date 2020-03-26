---
layout: layouts/page.njk
title: Informer
permalink: /informer/index.html
---

## Form Test


<form name="contact" method="POST" netlify-honeypot="bot-field" data-netlify="true" action="/thanks/">
<p style="display: none" class="hidden">
     <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
  </p>
<input type="hidden" name="form-name" value="contact" />
  <p>
    <label>Your Name: <input type="text" name="name" /></label>   
  </p>
  <p>
    <label>Your Email: <input type="email" name="email" /></label>
  </p>
  <p>
    <label>Your Role: <select name="role[]" multiple>
      <option value="leader">Leader</option>
      <option value="follower">Follower</option>
    </select></label>
  </p>
  <p>
    <label>Message: <textarea name="message"></textarea></label>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
</form>
