/* NavBar Mobile */
class MobileNavbar{
   constructor(mobileMenu, navItems, navLinks) {
    this.mobileMenu = document.querySelector(mobileMenu);
    this.navItems = document.querySelector(navItems);
    this.navLinks = document.querySelectorAll(navLinks)
    this.activeClass = "active";
    this.handleClick = this.handleClick.bind(this);
   } 

   animateItems() {
    this.navLinks.forEach((Link, index) => {
        Link.style.animation
            ? (Link.style.animation = "")
            : (Link.style.animation = `navItemsFade 0.5s ease forwards ${index / 7 + 0.3}s`);
    });
   }


   handleClick(){
    this.navItems.classList.toggle(this.activeClass);
    this.mobileMenu.classList.toggle(this.activeClass);
    this.animateItems();
   }

   addClickEvent() {
    this.mobileMenu.addEventListener("click", this.handleClick);
   }

   init(){
    if(this.mobileMenu){
        this.addClickEvent();
    }
    return this;
   }
}

const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    "#items",
    "#items li",
);

mobileNavbar.init();