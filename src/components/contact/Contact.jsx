import { useRef, useState } from 'react';
import Swal from 'sweetalert2';
import './contact.css';
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();
  const [isFormValid, setIsFormValid] = useState(true);

  const sendEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    if (!formData.get("name") || !formData.get("email") || !formData.get("message")) {
      setIsFormValid(false);
      return;
    }
    setIsFormValid(true);

    emailjs
      .sendForm('service_hsdpnzg', 'template_pw9aw4e', form.current, 'qHYF2CATMV9BARHIr')
      .then(
        (result) => {
          console.log("Email sent successfully!", result.text);
          e.target.reset();

          Swal.fire({
            icon: 'success',
            confirmButtonText: 'Ok',
            timer: 2000,
            position: 'top',
            timerProgressBar: true,
            showConfirmButton: false, 
            customClass: {
              popup: 'custom-popup', 
            },
            didOpen: () => {
              const width = window.innerWidth;
              if (width <= 768) {
                Swal.getPopup().style.width = '90%'; 
                Swal.getPopup().style.fontSize = '1.2rem'; 
              } else {
                Swal.getPopup().style.width = '400px'; 
                Swal.getPopup().style.fontSize = '1.5rem';
              }
            }
          });
        },
        (error) => {
          console.error("Failed to send email:", error.text);
        }
      );
  };

  const ContactData = [
    {
      id: 1,
      icon: <MdOutlineEmail />,
      title: "Email",
      info: "ahmadadham330@gmail.com",
      link: "mailto:ahmadadham330@gmail.com",
    },
    {
      id: 2,
      icon: <RiMessengerLine />,
      title: "Messenger",
      info: "Ahmad Shrara",
      link: "https://m.me/AhmadShrara",
    },
    {
      id: 3,
      icon: <BsWhatsapp />,
      title: "WhatsApp",
      info: "+20101626452",
      link: "https://api.whatsapp.com/send?phone=+20101626452",
    },
  ];

  return (
    <section className="contact" id="contact">
      <div className="top_section">
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>
      </div>
      <div className="container contact_container">
        <div className="contact_options">
          {ContactData.map(({ id, icon, title, info, link }) => (
            <article key={id} className="contact_option">
              {icon}
              <h4>{title}</h4>
              <h5>{info}</h5>
              <a href={link} target='_blank' rel="noopener noreferrer">Send Message</a>
            </article>
          ))}
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" placeholder="Full Name" name="name" required />
          <input type="email" placeholder="Your Email" name="email" required />
          <textarea rows={6} name="message" placeholder="Enter Your Message" required></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
        {!isFormValid && (
          <p style={{ color: 'red', textAlign: 'center' }}>
            Please fill in all fields before sending the message.
          </p>
        )}
      </div>
    </section>
  );
}

export default Contact;
