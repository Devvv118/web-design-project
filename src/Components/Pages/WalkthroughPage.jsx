import WalkthroughCard from "../WalkthroughCard"

function WalkthroughPage() {

  const embedURL = ["", "https://my.matterport.com/show?play=1&lang=en-US&m=V4FJYYR4npW", "https://my.matterport.com/show?play=1&lang=en-US&m=pjsmnTb1gA5","https://my.matterport.com/show?play=1&lang=en-US&m=5WjJN1zDRNW"]
  const title = ["Coming Soon!", "Family Caravan", "The Wysteria Plus", "The Wildflower"];
  const imgs = ["", "/walkthru1.gif", "/walkthru2.webp", "/walkthru3.webp",]
  const desc = [
    "An exciting new space is on the way. Stay tuned for the reveal!",
    "A cozy mobile home designed with families in mind. Adventure-ready and comfortably spacious.",
    "Elegance meets functionality in this premium model — perfect for modern living.",
    "A charming, nature-inspired retreat crafted for peace, comfort, and serenity."
  ];


  return (
    <div class="walkthrough-page">

      <header>
        <div class="section__container header__container">
          <img src="/living2.jpg" alt="header" />
          <div class="header__ribbon">
            <div class="header__content">
              <h1 class="section__header">Walkthroughs</h1>
              <p>
                Explore our collection of virual tours!
              </p>
            </div>
          </div>
          <div class="arrow__down">
            <a href="#footer" class="ri-arrow-down-line"> </a>
          </div>
          <div class="image__box"></div>
        </div>
      </header>

      <div class="walkthrough__header">
        <h1>Here's a demo to get you started</h1>
      </div>
      <div class="walkthrough__demo">
        <iframe width="100%" height="600px" frameborder="0" allowFullScreen="yes"
          src="https://my.matterport.com/show/?m=jm5WwEA3HUN&log=0&help=0&nt=0&play=1&qs=0&brand=1&dh=1&tour=1&gt=1&hr=1&mls=0&mt=1&tagNav=1&pin=1&portal=1&f=1&fp=1&nozoom=0&search=1&wh=1&kb=1&lp=0&title=0&tourcta=1&vr=1">
        </iframe>
      </div>

      <div class="walkthrough__header">
        <h1>Our Collection</h1>
      </div>
      <div class="walkthrough__grid">
        <WalkthroughCard
          title={title[1]}
          desc={desc[1]}
          img={imgs[1]}
          url={embedURL[1]}
        />
        <WalkthroughCard
          title={title[2]}
          desc={desc[2]}
          img={imgs[2]}
          url={embedURL[2]}
        />
        <WalkthroughCard
          title={title[3]}
          desc={desc[3]}
          img={imgs[3]}
          url={embedURL[3]}
        />
      </div>
    </div>
  )
}

export default WalkthroughPage