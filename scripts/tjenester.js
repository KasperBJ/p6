var image_input = document.querySelector("#image-input");

image_input.addEventListener("change", function() {
  var reader = new FileReader();
  reader.addEventListener("load", () => {
    var uploaded_image = reader.result;
    document.querySelector(".contentforbox").style.backgroundImage = `url(${uploaded_image})`;
  });
  reader.readAsDataURL(this.files[0]);
});

// Denne kode oppe i toppen er til billedevalg.


let email = document.getElementById('inputemail')
let password = document.getElementById('password')
let form = document.getElementById('form')
let errorElement = document.getElementById('error')

form.addEventListener('submit', (e) =>{
  let messages = []
  if (name.value === '' || name.value == null) {
    messages.push('Email is required')
  }

  if (messages.length > 0) {
e.preventdefault()
errorElement.innerText = messages.join(', ')
}
})
