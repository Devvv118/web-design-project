// import Form from "../FormOld"
import ContactForm from "../ContactForm"

function HomePage() {
  return (
    <div>
      <header>
        <div class="section__container header__container">
          <section id="home" className="imageSlides">
            <video 
              autoPlay 
              muted 
              loop 
              height="830" 
              width="100%" 
              src="/v.mp4"
            >
            </video>
          </section>
          <div class="header__ribbon">
            <div class="header__content">
              <h1 class="section__header">Design Your Dream Room</h1>
              <p>
                Creating spaces that reflect your unique style.
              </p>
            </div>
          </div>
          {/* <div class="arrow__down">
            <a href="#footer" class="ri-arrow-down-line"> </a>
          </div> */}
          <div class="image__box"></div>
        </div>
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
            <img src="https://cdn-bnokp.nitrocdn.com/QNoeDwCprhACHQcnEmHgXDhDpbEOlRHH/assets/images/optimized/rev-113a4ab/www.decorilla.com/online-decorating/wp-content/uploads/2024/05/Luxury-contemporary-interior-design-style-by-Decorilla-1024x574-345x.jpg" alt="Project 1" />
            <img src="https://images.woodenstreet.de/image/data/blog-images/14-Nov-2024/3.jpg" alt="Project 2" />
            <img src="https://static.wixstatic.com/media/bf8702_9402089a2bf44b0094c4ddb0d27c17a9~mv2.webp/v1/fill/w_738,h_511,al_c,q_85,enc_avif,quality_auto/bf8702_9402089a2bf44b0094c4ddb0d27c17a9~mv2.webp" alt="Project 3" />
            <img src="https://cdn.decorilla.com/images/1600/2113bb41-db94-4db7-924f-e739a38e259a/Online-Designer-BusinessOffice-3D-Model-1.jpg?cv=1" />
            <img src="https://officebanao.com/wp-content/uploads/2023/06/Hero-Image.jpg" />
            <img src="https://images.ctfassets.net/rg5y8r6t6cjr/6OtgaBRnouvW7gdQNRtCEA/a277d04af7a42c63f8d5a418fa2d9b58/nojhproduct-moderncoastal-interior-3birdsrenovations-house14-jameshardie-198.jpg" />
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
            <h4>Free Shipping</h4>
            <p>
              Free shipping every time you buy furniture from us without
              exception.
            </p>
          </div>
        </div>
        <div class="benefits__card">
          <span><i class="ri-checkbox-circle-line"></i></span>
          <div class="benefits__content">
            <h4>Warranty</h4>
            <p>
              Every time you buy our furniture products, you will get a warranty
              without exception.
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
        <div class="experience__features">
          <div class="experience__col">
            <h3>12</h3>
            <p>Years<br />experience</p>
          </div>
          <div class="experience__col">
            <h3>46</h3>
            <p>Awards<br />gained</p>
          </div>
          <div class="experience__col">
            <h3>375</h3>
            <p>Happy<br />customers</p>
          </div>
        </div>
        <a href="learn_more.html" class="button">Learn more</a>
      </div>
    </section>

    <section class="section__container process__container">
      <div class="process__content">
        <h2 class="section__header">We provide the best process experience</h2>
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
        <img src="/office1.jpg" alt="process" />
        <img src="/office2.jpg" alt="process" />
      </div>
    </section>

    <section class="section__container customer__container">
      <div class="customer__nav">
        <h2 class="section__header">What our customers are saying</h2>
        {/* <div class="customer__nav__icons">
          <span><i class="ri-arrow-left-line"></i></span>
          <span><i class="ri-arrow-right-line"></i></span>
        </div> */}
      </div>
      <div class="customer__grid">
        <div class="customer__card">
          <span><i class="ri-double-quotes-l"></i></span>
          <h4 class="customer__title">The result given are very satisfying</h4>
          <p class="customer__description">
            Being able to work with "Space Integration" was an extraordinary experience. They
            provide excellent service and the results given were also very
            satisfying by giving elegent impressions.
          </p>
          <div class="customer__content">
            {/* <span><img src="/pic-1.jpeg" alt="user" /></span> */}
            <div class="customer__details">
              <h4>Aarav Kapoor</h4>
              <p>Product Designer</p>
            </div>
          </div>
        </div>
        <div class="customer__card">
          <span><i class="ri-double-quotes-l"></i></span>
          <h4 class="customer__title">
            The service provided is very good and the website is user friendly
          </h4>
          <p class="customer__description">
            When I wanted to create an inspiring workspace, I designed it through "Space Integration". The results given were
            in accordance with what I wanted.
          </p>
          <div class="customer__content">
            {/* <span><img src="/pic-2.jpg" alt="user" /></span> */}
            <div class="customer__details">
              <h4>Ria Manoj</h4>
              <p>HR, Infosys</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <ContactForm />

    {/* <section class="section__container subscribe__container">
      <h2 class="section__header">Subscribe to get the latest news about us</h2>
      <p class="subscribe__description">
        We recommend you to subscribe to our newspaper, enter your email below
        to get our daily update about us.
      </p>
      <form>
        <input type="text" id="email" placeholder="Enter your email address" />
        <button type="button" onclick="chk_email()">Subscribe</button>
      </form>
    </section> */}

    </div>
  )
}

export default HomePage