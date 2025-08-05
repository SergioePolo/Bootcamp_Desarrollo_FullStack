document.addEventListener('DOMContentLoaded',function(){
    const form = document.getElementById('tableForm');

    form.addEventListener('submit', function (event){
        event.preventDefault();

        let number = document.getElementById('number').value;
        number = parseInt(number);
        createTable(number);
    })
});

function createTable(number){
    let createNewTable = true;

    while(createNewTable){
            let table = `Tabla del ${number}: \n`;

            for(let i=1; i<=10; i++){
                table += `${number} x ${i} = ${number * i} \n`;
            }
            alert (table);

            createNewTable = confirm('¿Deseas ver otra tabla?');
            if(createNewTable){
                number = prompt ('Ingresa el nuevo número');
                if (number === null) break;
                number = parseInt(number);
            }
        }
}