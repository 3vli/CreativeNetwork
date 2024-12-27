
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