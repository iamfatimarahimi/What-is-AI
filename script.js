
// header
window.addEventListener("scroll", () => {
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});
// Text and image scroll
let text = document.getElementById("text");
let space = document.getElementById("space-ship");
window.addEventListener("scroll", () => {
  let value = window.scrollY;
  text.style.Top = value * -2.5 + "px";
  space.style.left = value * -1.5 + "px";
});
// Text moving
let section = document.querySelectorAll('.imgSlider');
window.onscroll = ()=>{
  section.forEach(sec =>{
    let top = window.scrollY
    let offset = sec.offsetTop - 500;
    let height = sec.offsetHeight;

    if(top>= offset && top< offset+height){
      sec.classList.add("Show-animate");
    }
    // else{
    //   sec.classList.remove("Show-animate");
    // }
  })

}
// Swiper
document.addEventListener("DOMContentLoaded", (event) => {
  new Swiper(".swiper", {
    slidesPerView: 4,
    spaceBetween: 25,
    loop: true,
    centerSlide: "true",
    fade: "true",
    grabCurser: "true",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
  });
  pagination.style.backgroundcolor ="#fff";
});
ScrollReveal({
  reset: true,
  distance: '60px',
  duration: 2500,
  dely:400,
})
ScrollReveal().reveal('.row , .header , #video' ,{ delay: 400  , orogin:'left' });
ScrollReveal().reveal(' .header , .generator' ,{ delay: 600  , orogin:'bottom' });
ScrollReveal().reveal('.media-icons i' ,{ delay: 400  , orogin:'bottom' , interval:100});

$('.carousel').carousel({ride: true});