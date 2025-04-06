function Header({h1Text,pText,img}) {
  return (
    <header>
      <div class="section__container header__container">
        <img src={img} alt="header" />
        <div class="header__ribbon">
          <div class="header__content">
            <h1 class="section__header">{h1Text}</h1>
            <p>
              {pText}
            </p>
          </div>
        </div>
        <div class="arrow__down">
          <a href="#footer" class="ri-arrow-down-line"> </a>
        </div>
        <div class="image__box"></div>
      </div>
    </header>
  )
}

export default Header