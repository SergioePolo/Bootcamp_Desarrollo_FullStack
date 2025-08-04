Algoritmo cajero_automatico
	Escribir 'Bienvenido a tu cajero, por favor ingresa tu PIN para continuar'
	saldo <- 100000
	Leer PIN
	Si PIN=1234 Entonces
		Escribir 'Bienvenido'
		Escribir '¿Quieres realizar un retiro?'
		Leer retirar
		Mientras retirar='si' Hacer
			Escribir '¿Cuanto quieres retirar?'
			Leer monto
			Si saldo>=monto Entonces
				saldo <- saldo-monto
				Escribir 'Retiro realizado con éxito'
				Escribir 'Tu nuevo saldo es ', saldo
			SiNo
				Escribir 'No puedes retirar un monto mayor al saldo que tienes'
			FinSi
			Escribir '¿Quieres realizar un retiro?'
			Leer retirar
		FinMientras
		Escribir 'Que tengas un buen día, esperamos volver a verte'
	SiNo
		Escribir 'Por favor ingresa un PIN valido'
	FinSi
FinAlgoritmo
