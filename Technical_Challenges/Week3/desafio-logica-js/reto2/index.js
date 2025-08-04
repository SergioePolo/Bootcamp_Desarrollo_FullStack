const correctPIN = 1234;
let balance = 100000;
document.getElementById("atmForm").addEventListener("submit", function(event){
    event.preventDefault();
    let pin = document.getElementById("PIN").value;
    pin = parseInt(pin);
    if(pin != correctPIN){
        alert("Por favor ingresa un PIN valido")
    }
    document.getElementById("text").innerHTML = "¿Quieres realizar un retiro?";
})