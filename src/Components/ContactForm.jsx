import { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    country: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState({ text: "", color: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { firstName, lastName, country, email, phone, message } = formData;
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (!firstName || !lastName || !country || !email || !phone || !message) {
      setStatus({ text: "All fields are required!", color: "red" });
    } else if (!email.match(emailPattern)) {
      setStatus({ text: "Enter a valid Email!", color: "red" });
    } else if (phone.length !== 10 || isNaN(phone)) {
      setStatus({ text: "Phone must be 10 digits!", color: "red" });
    } else {
      setStatus({ text: "Form Submitted Successfully!", color: "green" });
      setFormData({
        firstName: "",
        lastName: "",
        country: "",
        email: "",
        phone: "",
        message: "",
      });
    }
  };

  return (
      
      <section id="contact">
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="country"
            list="country-list"
            placeholder="Choose Country"
            value={formData.country}
            onChange={handleChange}
            required
          />
          <datalist id="country-list">
            <option value="India" />
            <option value="USA" />
            <option value="UK" />
            <option value="Canada" />
            <option value="Australia" />
            <option value="Germany" />
            <option value="France" />
          </datalist>

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Your Phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit">Submit</button>
        </form>

        {status.text && (
          <p style={{ color: status.color, marginTop: "10px" }}>
            {status.text}
          </p>
        )}
      </div>
    </section>
  );
}

export default ContactForm;