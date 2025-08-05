document.getElementById('accessForm').addEventListener('submit', function (event){
    event.preventDefault();
    let response = '';
    const name = document.getElementById('userName').value;

    let age = document.getElementById('age').value;
    age = parseInt(age);

    const invitation = document.querySelector('input[name='invitation']:checked');

    if(!invitation){
        alert('Por favor selecciona si posees una invitación al evento');
        return;
    }
    
    const hasInvitation = invitation.value === 'true';
    
    if(age >= 18 && hasInvitation == true){
        response = `Bienvenido ${name} es un placer tenerte con nosotros`;
    }
    else if(age >= 18 && hasInvitation == false){
        response = `Lo lamento ${name} sin  invitación no puedes entrar al evento`;
    }
    else{
        response = `Lo lamento ${name} solamente personas de 18 años en adelante pueden ingresar al evento`;
    }
    
    document.getElementById('response').innerHTML = response;
})