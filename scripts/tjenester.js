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

form.addEventListener('submit', (e) => {
  let messages = []
  if (email.value === '' || email.value == null) {
    messages.push('Name is required')
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

  if (messages.length > 0) {
    e.preventDefault()
    errorElement.innerText = messages.join(', ')
  }
})
