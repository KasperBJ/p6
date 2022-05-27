let image_input = document.querySelector("#image-input");

image_input.addEventListener("change", function() {
  let reader = new FileReader();
  reader.addEventListener("load", () => {
    let uploaded_image = reader.result;
    document.querySelector(".contentforbox").style.backgroundImage = `url(${uploaded_image})`;
  });
  reader.readAsDataURL(this.files[0]);
});

// Denne kode oppe i toppen er til billedevalg.

// Denne kode oppe i bunden er til form.

let email = document.getElementById('email')
let password = document.getElementById('password')
let form = document.getElementById('form')
let errorElement = document.getElementById('error')
document.getElementById("error").style.fontFamily = "Hansen Grotesque,sans-serif";
document.getElementById("error").style.fontSize = "small";


form.addEventListener('submit', (e) => {
  let messages = []
  if (email.value === '' || email.value == null) {
    messages.push('Email is required')
  }

  if (password.value.length <= 6) {
    messages.push('Password must be longer than 6 characters')
  }

  else {
  messages.push('Password is really strong!')

}

  if (password.value === 'password') {
    messages.push('Password cannot be password')
  }

// Denne kode er til når alert boksen svarer på hvilket input der er.
  if (messages.length > 0) {
    e.preventDefault()
    errorElement.innerText = messages.join(', ')

    if (password.value.length >= 6) {
      alert ("Your mail is:" +
      "  " +
      document.getElementById('email').value +
      " \n " +
      "Passsword:" +
      "  " +
      document.getElementById('password').value);

      let ita = document.getElementsByName("paidpr");
      let selectedIta = "";
      for (var i = 0; i < ita.length; i++) {
      if (ita[i].type == "checkbox" && ita[i].checked == true) selectedIta += ita[i].value + "\n";
    }

      let items = document.getElementsByName("radio");
      let selectedItems = "";
      for (var i = 0; i < items.length; i++) {
      if (items[i].type == "checkbox" && items[i].checked == true) selectedItems += items[i].value + "\n";
    }

    alert("Price:" + selectedIta + selectedItems );

      window.location = 'productlist.html';

    }
  }
  })
