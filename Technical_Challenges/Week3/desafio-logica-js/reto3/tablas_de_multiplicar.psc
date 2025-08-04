Algoritmo tablas_de_multiplicar
	i <- 1
	createTable <- 'si'
	Mientras createTable='si' Hacer
		Escribir 'Ingresa el número del cual deseas ver su tabla de multiplicar (1 al 10)'
		Leer number
		Escribir 'Creando tabla de multiplicar'
		Mientras i<=10 Hacer
			Escribir number, ' x ', i, ' = ', number*i
			i <- i+1
		FinMientras
		i <- 1
		Escribir '¿Quieres crear otra tabla?'
		Leer createTable
	FinMientras
FinAlgoritmo
