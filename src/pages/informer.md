---
layout: layouts/page.njk
title: Informer
permalink: /informer/index.html
---

## Form Test


### Formsubmit

<form action=" https://formsubmit.co/scott@spinlinestudio.com " method="POST">


<input type="hidden" name="_replyto">
<input type="hidden" name="_next" value="https://mtype.com/thanks">
<input type="hidden" name="_subject" value="Formsubmit submission!">


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

---

### Netlify


<form name="contact" method="POST" data-netlify="true" action="/thanks">
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
