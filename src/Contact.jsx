import styled from "styled-components";
import Iframe from 'react-iframe';

const Contact = () => {
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return (
    <Wrapper>
      <h3 className="common-heading">Contact Us</h3>

     


 {/* <Iframe 
 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7530.505011822962!2d74.16739465943336!3d19.31484628658358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdd1e8a57e26503%3A0x8fbcd754c24db3bd!2sGhargaon%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1668210759545!5m2!1sen!2sin"
 width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"></Iframe>  */}

<Iframe 
src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7533.1107477328205!2d74.13597809100915!3d19.258200009984986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdd1f5a6e6a4029%3A0xd30a6d18b2dd8467!2sGanesh%20Aher%20Rent%20For%20Room!5e0!3m2!1sen!2sin!4v1670411992644!5m2!1sen!2sin"
 width="100%"
  height="450"
  style={{ border: 0 }}
  allowFullScreen=""
    loading="lazy" 
    referrerPolicy="no-referrer-when-downgrade">

</Iframe>


   


      <div className="container">
        <div className="contact-form">
          <form
            action="https://formspree.io/f/xdojyrer"
            method="POST"
            className="contact-inputs">
            <input
              type="text"
              placeholder="username"
              name="username"
              required
              autoComplete="off"
            />

            <input
              type="email"
              name="Email"
              placeholder="Email"
              autoComplete="off"
              required
            />

            <textarea
              name="Message"
              cols="30"
              rows="10"
              required
              autoComplete="off"
              placeholder="Enter you message"></textarea>

            <input type="submit" value="send" />
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;