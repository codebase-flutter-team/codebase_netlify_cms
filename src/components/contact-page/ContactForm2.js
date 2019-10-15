import React, {useEffect, useRef} from 'react'
import './styles.scss'

export default function ContactForm2() {
  const planOption = useRef(null);

  useEffect(() => {
    let params = (new URL(window.location)).searchParams;
    let plan = params.get('plan');
    if (plan) {
      planOption.current.value = plan;
    }
  });

  return (
    <form method="POST" name="contact-form" data-netlify="true" data-netlify-honeypot="bot-field">
      <input type="hidden" name="form-name" value="contact-form" />
      <label htmlFor="name">Name</label>
        <input type="text" name="name" placeholder="John Doe" className="input" maxlength="75" required/>

      <label htmlFor="email">Email</label>
        <input type="email" name="email" placeholder="Example@email.com" className="input" maxlength="75" required/>
        
      <label htmlFor="help">What do you need help with?</label>
      <div className="select">
        <select ref={planOption} name="What do you need help with?" placeholder="Select an option" className="input" required>
          <option value="" disabled selected hidden>Select an option</option>
          <option value="Design Prototype">Design Prototype</option>
          <option value="Minimum Viable Product">Minimum Viable Product</option>
          <option value="Fully-featured Product">Fully-featured Product</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <label htmlFor="comments">Comments</label>
        <textarea name="comments" rows="5" placeholder="Let us know how we can help" class="input" maxlength="500" required></textarea>

      <label htmlFor="options">Where did you hear about us?</label>
      <div className="select">
        <select name="Where did you hear about us" placeholder="Select an option" className="input" required>
          <option value="" disabled selected hidden>Select an option</option>
          <option value="Youtube">Youtube</option>
          <option value="Instagram">Instagram</option>
          <option value="Discord">Discord</option>
          <option value="LinkedIn">LinkedIn</option>
          <option value="Clutch.co">Clutch.co</option>
          <option value="Word of Mouth">Word of Mouth</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <button type="submit">Submit</button>
    </form>
  )
}
