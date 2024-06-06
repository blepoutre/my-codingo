import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="answer"
export default class extends Controller {
  static targets=["reponse1", "reponse2", "reponse3", "reponse4", "reponse5", "win", "loose"];

  static values={
    validation: Number
  };

  check() {
    switch(true) {
      case (this.reponse1Target.firstChild.nextSibling.checked):
        this.userAnswer = this.reponse1Target.innerText;
        break;
      case (this.reponse2Target.firstChild.nextSibling.checked):
        this.userAnswer = this.reponse2Target.innerText;
        break;
      case (this.reponse3Target.firstChild.nextSibling.checked):
        this.userAnswer = this.reponse3Target.innerText;
        break;
      case (this.reponse4Target.firstChild.nextSibling.checked):
        this.userAnswer = this.reponse4Target.innerText;
        break;
      case (this.reponse5Target.firstChild.nextSibling.checked):
        this.userAnswer = this.reponse5Target.innerText;
        break;
    }
    this.result(this.userAnswer);
  }

  result(userAnswer){
    if (parseInt(userAnswer) === this.validationValue){
        this.winTarget.classList.add("show");
        this.winTarget.classList.add("d-block");
    } else{
        this.looseTarget.classList.add("show");
        this.looseTarget.classList.add("d-block");
    };
  }
}
