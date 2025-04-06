function NavBar() {
  return (
    <nav>
      <div class="nav__logo"><a href="#">Space Integration</a></div>
      <ul class="nav__links">
        <a href="/" class="link">Home</a>
        <a href="/walkthrough" class="link">Walkthrough</a>
        <a href="/model" class="link">Model</a>
        {/* <a href="/#footer" class="link">Contacts</a> */}
      </ul>
      <div class="nav__icons">
        <span><i class="ri-search-line"></i></span>
        <span><i class="ri-menu-3-line"></i></span>
      </div>
    </nav>
  )
}

export default NavBar