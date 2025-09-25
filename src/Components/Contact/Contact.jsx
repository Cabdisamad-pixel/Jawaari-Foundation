// Contact.jsx
import React, { useState } from 'react';
import contactStyles from './Contact.module.css';

import Header from '../Header/Header';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [success, setSuccess] = useState(false);

  const handleChange = e => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Halkan waxaad ku dari kartaa API call ama backend logic
    setSuccess(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <>
      <Header/>
      <div className={contactStyles.contactContainer}>
      <h2>Contact Us</h2>
      <p>If you have any questions or want to support Jawaari Foundation, please fill out the form below.</p>

      <form onSubmit={handleSubmit} className={contactStyles.contactForm}>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Your full name"
          />
        </label>

        <label>
          Email
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Your email address"
          />
        </label>

        <label>
          Subject
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            placeholder="Subject of your message"
          />
        </label>

        <label>
          Message
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Write your message here..."
            rows="5"
          />
        </label>

        <button type="submit">Send Message</button>

        {success && <p className={contactStyles.successMsg}>Thank you for contacting us! We will get back to you soon.</p>}
      </form>

      <div className={contactStyles.contactInfo}>
        <h3>Other Ways to Reach Us</h3>
        <p>Email: info@jawaarifoundation.org</p>
        <p>Phone: +252 XXX XXX XXX</p>
        <p>Location: Mogadishu, Somalia</p>
      </div>
    </div>
    </>
  );
};

export default Contact;
