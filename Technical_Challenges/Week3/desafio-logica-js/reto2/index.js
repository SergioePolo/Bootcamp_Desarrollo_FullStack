const correctPIN = 1234;
let balance = 100000;

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("atmForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    let userPIN = document.getElementById("PIN").value;

    userPIN = parseInt(userPIN);

    if (userPIN === correctPIN) {
      atmFunction();
    } else {
      alert("PIN Incorrecto");
    }
  });
});

function atmFunction() {
  let runATM = true;

  while (runATM) {
    if (balance === 0) {
          alert(
            "Ya no cuentas con fondos en tu cuenta para realizar otro retiro, que tengas un buen día."
          );
          break;
        }
    alert(`Cuentas con un saldo disponible de $${balance.toLocaleString()}`);

    const withdrawCheck = confirm("¿Deseas realizar un retiro?");
    if (withdrawCheck) {
      let balWith = prompt("Escribe el monto a retirar");
      balWith = parseInt(balWith);
      if (isNaN(balWith) || balWith <= 0) {
        alert("Cantidad invalida, por favor ingresar una cifra valida");
      } else if (balWith > balance) {
        alert("No se puede retirar una cifra mayor a la disponible");
      } else {
        balance -= balWith;
        alert(`Retiro exitoso de $${balWith.toLocaleString()}. Su nuevo saldo es de $${balance.toLocaleString()}`);
      }
      runATM = confirm("¿Desea realizar otro retiro?");
    } else {
      alert("Gracias por usar el cajero, vuelva pronto");
      runATM = false;
    }
  }
}
