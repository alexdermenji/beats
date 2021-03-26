(function () {
  const myForm = document.getElementById("form");
  const orderBtn = document.getElementById("orderBtn");

  orderBtn.addEventListener("click", function (event) {
    event.preventDefault();

    if (validateForm(myForm)) {
      const data = {
        comment: myForm.elements.comment.value,
        name: myForm.elements.name.value,
        phone: myForm.elements.phone.value,
        to: myForm.elements.to.value,
        // house: myForm.elements.house.value,
        // block: myForm.elements.block.value,
        // apartment: myForm.elements.apartment.value,
        // level: myForm.elements.level.value,
        // payment: myForm.elements.payment.value,
        // callback: myForm.elements.call.checked,
      };
      console.log(data);
      const xhr = new XMLHttpRequest();
      xhr.responseType = "json";
      xhr.open("POST", "https://webdev-api.loftschool.com/sendmail");
      xhr.send(JSON.stringify(data));
      xhr.addEventListener("load", () => {
        if (xhr.response.status) {
          console.log("Все ок");
        } else {
          console.log("Ошибка");
          console.log(xhr.response);
        }
      });
    } else {
      console.log("Error");
    }
  });

  function validateForm(form) {
    let valid = true;

    if (!validateField(form.elements.name)) {
      valid = false;
    }
    if (!validateField(form.elements.phone)) {
      valid = false;
    }
    if (!validateField(form.elements.comment)) {
      valid = false;
    }

    return valid;
  }

  function validateField(field) {
    field.classList.remove("order__input--error");
    if (!field.checkValidity()) {
      field.classList.add("order__input--error");
    }
    return field.checkValidity();
  }
})();
