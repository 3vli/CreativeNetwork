const aboutCircle = document.querySelector('#aboutCircle');

aboutCircle.addEventListener('animationiteration', () => {
   const randomTop = Math.random() * 100;
   aboutCircle.style.top = `${randomTop}%`;
})
const aboutCircler = document.querySelector('#aboutCircler');

aboutCircler.addEventListener('animationiteration', () => {
   const randomTop = Math.random() * 100;
   aboutCircler.style.top = `${randomTop}%`;
})

let demoH3 = document.getElementById('demo');
let txt = ` نحن فريق نونيم. لبرمجة المواقع الالكترونية، وتطويرها. وكذلك نسهم في
          مساعدة عملائنا وانشاء المواقع الالكترونية. ونسهم في تحقيق هذا الهدف.
          نحن نوفر لكم أفضل الخدمات المتوفرة لنا. ونوفر لكم خدمة إنشاء المواقع
          الالكترونية، سواء كان تجارة.. الخ.`;
let speed = 50;
let i = 0;

let typeWriter = () => {
   if (i < txt.length) {
      demoH3.innerHTML += txt.charAt(i);
      i++
      setTimeout(typeWriter, speed);

   }
}
typeWriter()