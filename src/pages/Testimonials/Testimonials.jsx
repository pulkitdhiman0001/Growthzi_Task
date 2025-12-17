import "./Testimonials.css";
import Header from "../../components/Heading/Heading"
import testimonialIcon from "/src/assets/images/testimonial.png"
const Testimonials = () => {
  return (
    <section class="testimonials">
      <div className="heading">
        <Header heading={"Testimonials"}/>
      </div>
      <div class="testimonials-wrapper">
        <div class="testimonial-card">
         <div className="header">
            <img src={testimonialIcon} class="avatar" />
            <div className="name-position">
              Priya Sharma, <span>Product Manager</span>
            </div>
          </div>
          <p>
            Working with Aakarsh has been effortless. He understands
            requirements quickly, communicates clearly, and provides clean
            backend code with strong database structure. His API designs are
            exceptionally efficient and well-documented.
          </p>
        </div>

        <div class="testimonial-card active">
          <div className="header">
            <img src={testimonialIcon} class="avatar" />
            <div className="name-position">
              Priya Sharma, <span>Product Manager</span>
            </div>
          </div>
          <p>
            Working with Aakarsh has been effortless. He understands
            requirements quickly, communicates clearly, and provides clean
            backend code with strong database structure. His API designs are
            exceptionally efficient and well-documented.
          </p>
        </div>

        <div class="testimonial-card">
          <div className="header">
            <img src={testimonialIcon} class="avatar" />
            <div className="name-position">
              Priya Sharma, <span>Product Manager</span>
            </div>
          </div>
          <p>
            Working with Aakarsh has been effortless. He understands
            requirements quickly, communicates clearly, and provides clean
            backend code with strong database structure. His API designs are
            exceptionally efficient and well-documented.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
