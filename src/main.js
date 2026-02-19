import './style.css'

document.addEventListener("DOMContentLoaded", function () {
  configButtonMain();
  configButtonPlans();
  configForm();
});


function configButtonMain(){

  const button = document.getElementById("contactButton");

  if(!button) return;

  button.addEventListener("click", function() {
    sendWhatsAppMsg("Hola, quiero información sobre sus servicios de desarrollo.");
  });

}

function configButtonPlans(){
  const buttons = document.querySelectorAll(".contactPlan");

  buttons.forEach(button => {
    button.addEventListener("click", function() {
      const plan = button.getAttribute("data-plan");
      const price = button.getAttribute("data-price");
      sendWhatsAppMsg(msgConstructor(plan, price));
    });
  });
}

function configForm(){
  const form = document.getElementById("contactForm");

  if(!form) return;

  form.addEventListener("submit", function(event) {
    event.preventDefault();

    const fromData = new FormData(form);

    const name = fromData.get("name");
    const email = fromData.get("email");
    const message = fromData.get("message");

    const fullMessage = `Hola, mi nombre es ${name} y mi correo electrónico es ${email}.\n${message}`;

    sendWhatsAppMsg(fullMessage);
  });
}

function msgConstructor(plan, price){

  return `Hola, quiero contratar el plan ${plan} con un precio de ${price}.\n\nMe gustaría saber más sobre el Plan: ${plan}.\nGracias.`;

}

function sendWhatsAppMsg(msg){
  const phoneNumber = "595984732556";

  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(msg)}`;

  window.open(url, "_blank");
}