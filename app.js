let desktopImage = [
    { img_path: 'desktop/d1.jpg', title: "Transform your brand", description: "We are a full-service creative designer provide interactive web page form business." },
    { img_path: 'desktop/d2.jpg', title: "Transform your brand", description: "We are a full-service creative designer provide interactive web page form business." },
    { img_path: 'desktop/d3.jpg', title: "Transform your brand", description: "We are a full-service creative designer provide interactive web page form business." },
    { img_path: 'desktop/d4.jpg', title: "Transform your brand", description: "We are a full-service creative designer provide interactive web page form business." },
    { img_path: 'desktop/d5.jpg', title: "Transform your brand", description: "We are a full-service creative designer provide interactive web page form business." },
    { img_path: 'desktop/d6.jpg', title: "Transform your brand", description: "We are a full-service creative designer provide interactive web page form business." },
    { img_path: 'desktop/d7.jpg', title: "Transform your brand", description: "We are a full-service creative designer provide interactive web page form business." },
    { img_path: 'desktop/d8.jpg', title: "Transform your brand", description: "We are a full-service creative designer provide interactive web page form business." },
    { img_path: 'desktop/d9.jpg', title: "Transform your brand", description: "We are a full-service creative designer provide interactive web page form business." },
];



let menuToggler = document.querySelector('.bar');

let target = document.querySelector('nav ul');

menuToggler.addEventListener('click', function () {
    target.classList.toggle('active')
})