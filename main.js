let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #485755;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #485755;">Ing. TIC | Full stack | Programador Jr. en PHP, Java, Python y Solidity | Principiante en Marketing digital.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
