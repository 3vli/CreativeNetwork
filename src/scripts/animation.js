
let i = 0;
let txt = `هلا بك في موقع شبكة الإبداع، هنا حيث يجتمع الإبداع والمهارات في هذا المكان المميز. وكذلك يمكنك مشاهدة فريق المطورين والمصممين من خلال الضغط على 'الفريق'.`
let speed = 50;
function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
typeWriter();
const circle = document.querySelectorAll('#heroCircle');
circle.addEventListener('animationiteration', () => {
  const randomTop = Math.random() * 100;
  circle.style.top = `${randomTop}%`;
});

const circler = document.querySelector('#heroCircler');
circler.addEventListener('animationiteration', () => {
  const randomTop = Math.random() * 100;
  circler.style.top = `${randomTop}%`;
});

