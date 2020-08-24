class SendData {
  constructor() {
    this.btn = document.querySelector(".btn");
    this.btn.addEventListener("click", this.sendForm);
  }

  sendForm() {
    const mail = document.querySelector(".form-control").value;
    const info = document.querySelector(".info").value;

    this.data = {
      mail: `eMail otrzymany od: ${mail}`,
      info: `Treść wiadomości: ${info}`,
    };

    fetch("...", {
      method: "post",
      headres: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.data),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log("wysłane");
        console.log("odpowiedź" + res);
      });
  }
}

export default SendData;
