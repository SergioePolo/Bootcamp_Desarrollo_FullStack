Algoritmo reto_control_de_acceso
	Escribir 'Buen d�a, para ingresar al evento tenemos que validar tu ingreso'
	Escribir 'Por favor ingresa tu nombre:'
	Leer name
	Escribir 'Por favor ingresa tu edad'
	Leer age
	Escribir '�Cuentas con una invitaci�n para ingresar al evento?'
	Leer invitation
	Escribir 'Espera un momento mientras validamos tu informaci�n'
	Si age>=18 Entonces
		Si invitation='si' Entonces
			Escribir 'Bienvenido al evento '+name+', pasala muy bien'
		SiNo
			Escribir 'Lo lamento '+name+', no puedes ingresar al evento ya que no cuentas con una invitaci�n'
		FinSi
	SiNo
		Escribir 'Lo lamento '+name+', no puedes ingresar al evento por no cumplir el minimo de edad'
	FinSi
FinAlgoritmo
