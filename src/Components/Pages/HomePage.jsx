// import Form from "../FormOld"
import ContactForm from "../ContactForm"
import ImageSlider from "../ImageSlider"

function HomePage() {
  return (
    <div>
      <header>
        <video 
          autoPlay 
          muted 
          loop 
          height="830   " 
          width="100%" 
          src="/v.mp4"
        >
        </video>
      </header>

      <section id="our-story">
      <h2>Our Story</h2>
      <p>Every great journey begins at home, and ours is no different. What started as a passion for interior design soon became a fulfilling profession. Our studio was born from a love for transforming spaces—curating flooring, décor, accessories, and rugs sourced from around the world.

          With a team of young, creative minds, we blend aesthetics with functionality, crafting interiors that reflect individuality and elegance. Every space we design tells a story—one of style, comfort, and timeless charm.
          
          Welcome to our world of design, where passion meets craftsmanship.</p>
      
  
      </section>

    <section id="choose-us">
        <h2>Why Choose Us</h2>
        <blockquote>
            <p>Infuse artistry and a unique personality into your space with exquisite furniture.</p>
            <p>High-quality materials and finishes are selected to ensure durability, style, and sustainability.</p>
            <p>Stunning interiors are delivered within budget, maintaining high standards without unnecessary expenses.</p>
            <p>Combining creativity and functionality, the team crafts stunning interiors tailored to individual preferences.</p>
            <p>"Design is not just what it looks like and feels like. Design is how it works."</p>
            <p>"Every space has a story. Our mission is to bring yours to life." </p>
          
            <cite>— Creative Director</cite>
        </blockquote>
    </section>

    <section id="our-work">
        <h2>Our Work</h2>
        <div class="gallery">
            <section>
              <ImageSlider />
            </section>
        </div>
    </section>


    <section class="section__container benefits__container">
      <h2 class="section__header">Benefits you get when using our services</h2>
      <div class="benefits__grid">
        <div class="benefits__card">
          <span><i class="ri-award-line"></i></span>
          <div class="benefits__content">
            <h4>Best Quality</h4>
            <p>
              All of our products use the best materials and choices of our
              customers.
            </p>
          </div>
        </div>
        <div class="benefits__card">
          <span><i class="ri-truck-line"></i></span>
          <div class="benefits__content">
            <h4>Quick Implementation</h4>
            <p>
              Your design will be contructed within the time promised. 
            </p>
          </div>
        </div>
        <div class="benefits__card">
          <span><i class="ri-checkbox-circle-line"></i></span>
          <div class="benefits__content">
            <h4>Flawless Execution</h4>
            <p>
              Your design ideas will be implemented without compromises.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="section__container experience__container">
      <div class="experience__image">
        <img src="/living2.jpg" alt="experience" />
      </div>
      <div class="experience__content">
        <h2 class="section__header">We provide you the best experience</h2>
        <p class="experience__description">
          You don't worry about the results because all of these interiors are
          made by people who are professionals in their fields with an elegant
          and luxurious style and with premium quality materials.
        </p>
        <br /><br />
        <div class="experience__features">
          <a href="/walkthrough" class="button">Walkthroughs</a>
          <a href="/model" class="button">Model</a>
        </div>
        
      </div>
    </section>

    <section class="section__container process__container">
      <div class="process__content">
        <h2 class="section__header">How we work</h2>
        <div class="process__grid">
          <div class="number">01</div>
          <h4>Designing</h4>
          <span></span>
          <p>
            First you determine the concept and model you want, then
            choose what colors and materials you want to use in your furniture.
          </p>
          <div class="number">02</div>
          <h4>Processing</h4>
          <span></span>
          <p>
            When the designing process is complete, we process the design. Then we carry out the execution of the desired
            concept.
          </p>
          <div class="number">03</div>
          <h4>Finishing</h4>
          <span class="last-child"></span>
          <p>
            After the processing is complete, we will immediately carry out the
            finishing stage and we do it carefully and make sure there are no
            mistakes.
          </p>
        </div>
      </div>
      <div class="process__image">
        <img src="/model2.png" alt="process" />
        <img src="/walkthru0.png" alt="process" />
      </div>
    </section>

    <section class="section__container customer__container">
      <div class="customer__nav">
        <h2 class="section__header">Your feedback is valuable to us</h2>
      </div>
      <ContactForm />
    </section>

    </div>
  )
}

export default HomePage