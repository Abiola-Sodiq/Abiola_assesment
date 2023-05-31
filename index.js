//variable declarations
let image = document.getElementById("image");
let userName = document.getElementById("name");
let phoneNumber = document.getElementById("phoneNumber");
let email = document.getElementById("email");
let streetAddress = document.getElementById("streetAddress");

//function to import Api
const profileCard = () => {
  fetch("https://randomuser.me/api")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data.results[0]);

      
      userName.textContent = "NAME:" +"  " +
        data.results[0].name.title +
        " " +
        data.results[0].name.first +
        " " +
        data.results[0].name.last;
      phoneNumber.textContent = "PHONE NO:" +"  " + data.results[0].phone;
      email.textContent = "E-MAIL:" + "  " + data.results[0].email;
      streetAddress.textContent = "ADDRESS:" +"  "+
        data.results[0].location.street.number +
        " " +
        data.results[0].location.street.name +
        " " +
        data.results[0].location.city +
        " " +
        data.results[0].location.state;+" "+ data.results[0].location.coordinates.country
    });
};
profileCard();
