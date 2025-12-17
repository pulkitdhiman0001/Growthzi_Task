import "./Contact.css";
import Header from "../../components/Heading/Heading";
import contactIcon from "/src/assets/images/map.png"
import phoneIcon from "/src/assets/icons/phone.svg"
import faxIcon from "/src/assets/icons/fax.svg"
import mailIcon from "/src/assets/icons/mail.svg"
const Contact = () => {
  return (
    <section className="contact">
      <Header heading={"Contact"} />
      <div className="contact-container">
        <div className="contact-map">
          <img src={contactIcon} alt="Map" />
          <div className="map-pin"></div>
        </div>

        <div className="contact-form">
          <h1>
            Get in <span>Touch</span>
          </h1>
          <p>
            Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo
            molestie vel, ornare non id blandit netus.
          </p>

          <form>
            <input type="text" placeholder="Name *" />
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Phone number *" />

            <select>
              <option>How did you find us?</option>
              <option>Google</option>
              <option>LinkedIn</option>
              <option>Referral</option>
            </select>

            <button type="submit">SEND</button>
          </form>

          <div className="contact-info">
            <div className="">
              <div className="contact-icon">
                <img src={phoneIcon}></img>
              </div>
              <div className="details">
                <div>PHONE</div>

                <div className="number">03 5432 1234</div>
              </div>
            </div>
            <div className="">
              <div className="contact-icon">
                <img src={faxIcon}></img>
              </div>
              <div className="details">
                <div>FAX</div>

                <div className="number">03 5432 1234</div>
              </div>
            </div>
            <div className="">
              <div className="contact-icon">
                <img src={mailIcon}></img>
              </div>
              <div className="details">
                <div>EMAIL</div>

                <div className="number">info@marcc.com.au</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
