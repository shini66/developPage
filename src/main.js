import './style.css'
import { setupCounter } from './counter.js'

document.addEventListener("DOMContentLoaded", function () {
  function contact() {
    alert("Contact me at: example@example.com");
  }

  document.getElementById("contactButton").addEventListener("click", contact);
});

setupCounter(document.querySelector('#counter'))


