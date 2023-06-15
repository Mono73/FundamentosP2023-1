const rutina = [
	{
		Objetivo: 'Masa muscular',
		Tiempo: '30min',
		Ejercicios: 3,
		Sett: 4,
		Sexo: 'Hombre',
		Nivel: 'Principiante',
		Rutina: '1). 20 Flexions. 2). 15 Dominadas. 3). 15 Biceps.'
		},
	{ 
        Objetivo: 'Fuerza', 
        Tiempo: '30min', 
        Ejercicios: 4, 
        Sett: 4, 
        Sexo: 'Hombre', 
        Nivel: 'Medio',
		Rutina: '1). 1min Plancha. 2). 15 Flexiones. 3). 30 Abdominales sencillas. 4). 15 Sentadillas'
    },
	{
		Objetivo: 'Fuerza',
		Tiempo: '30min',
		Ejercicios: 3,
		Sett: 3,
		Sexo: 'Mujer',
		Nivel: 'Principiante',
		Rutina: '1). 1min Plancha. 2). 8 Flexiones. 3). 1min salto con Cuerda. 4). 20 Sentadillas'
	},
	{ 
        Objetivo: 'Resistencia', 
        Tiempo: '60min', 
        Ejercicios: 4, 
        Sett: 4, 
        Sexo: 'Hombre', 
        Nivel: 'Medio',
		Rutina: '1). 1min Plancha. 2). 15 Flexiones. 3). 2min salto con cuerda. 4). 20 Sentadillas con maleta.' 
    },
	{
		Objetivo: 'Resistencia',
		Tiempo: '90min',
		Ejercicios: 5,
		Sett: 4,
		Sexo: 'Mujer',
		Nivel: 'Avanzado',
		Rutina: '1). 2min Plancha. 2). 15 Zancadas (cada pie). 3). 30 Abdominales rusos. 4). 30 Sentadillas con maleta. 5). 2min Saltar la cuerda' 
	},
	{
		Objetivo: 'Masa muscular',
		Tiempo: '90min',
		Ejercicios: 5,
		Sett: 4,
		Sexo: 'Mujer',
		Nivel: 'Medio',
		Rutina: '1). 15 Flexiones. 2). 15 Sentadilla con peso. 3). 15 Triceps con silla . 4). 30 Sentadillas con maleta. 5). 16 Escalada de montaña'
	},
	{
		Objetivo: 'Perder peso',
		Tiempo: '90min',
		Ejercicios: 5,
		Sett: 3,
		Sexo: 'Hombre',
		Nivel: 'Avanzado',
		Rutina: '1). 25 Escalada de montaña. 2). 15 Elevaciones de piernas. 3). 2min plancha . 4). 2min saltos con cuarda. 5). 10 Flexiones'
	},
	{ 
        Objetivo: 'Masa muscular',  
        Tiempo: '60min', 
        Ejercicios: 4, 
        Sett: 2, 
        Sexo: 'Hombre', 
        Nivel: 'Medio',
		Rutina: '1). 15 Sentadillas con salto 2). 15 zancadas hacia atras 3). 15 Triceps con silla . 4). 20 flexiones en Diamante' 
    },
	{
		Objetivo: 'Perder peso',
		Tiempo: '30min',
		Ejercicios: 3,
		Sett: 4,
		Sexo: 'Mujer',
		Nivel: 'Medio',
		Rutina: '1). 10 Flexiones con inclinacion (Apoyo de brazos ). 2). 15 abdominales. 3). 15 2min Saltos de cuerda . '
	},
	{ 
        Objetivo: 'Resistencia',
        Tiempo: '90min', 
        Ejercicios: 5, 
        Sett: 2, 
        Sexo: 'Hombre', 
        Nivel: 'Avanzado',
		Rutina: '1). 25 Elevaciones de piernas 2). 30 Abdominales. 3). 24 Flexion y rotacion . 4). 30 Escalada de montaña. 5). 24 Abdominal cruzado'
    },
	{
		Objetivo: 'Perder peso',
		Tiempo: '90min',
		Ejercicios: 5,
		Sett: 3,
		Sexo: 'Hombre',
		Nivel: 'Avanzado',
		Rutina: '1). 3min Plancha 2). 30 Abdominales rusos. 3). 20 Burpees . 4). 30 Flexiones escalonadas. 5). 24 Flexiones Hindues'
	},
	{
		Objetivo: 'Masa muscular',
		Tiempo: '60min',
		Ejercicios: 3,
		Sett: 4,
		Sexo: 'Hombre',
		Nivel: 'Principiante',
		Rutina: '1). 24 Flexiones Diamante. 2). 24 Sentadilla con peso. 3). 35 Triceps con silla .'
	},
	{
		Objetivo: 'Resistencia',
		Tiempo: '30min',
		Ejercicios: 3,
		Sett: 4,
		Sexo: 'Mujer',
		Nivel: 'Principiante',
		Rutina: '1). 15 Escalada de montaña. 2). 15 Sentadilla con peso. 3). 15 Triceps con silla .'
	},
	{ 
        Objetivo: 'Fuerza',  
        Tiempo: '60min', 
        Ejercicios: 4, 
        Sett: 2, 
        Sexo: 'Hombre', 
        Nivel: 'Medio',
		Rutina: '1). 15 flexiones en diamante. 2). 15 Flexion y rotacion. 3). 15 Burpees. 4). 15 Flexones con inclinacion (Apoyo de piernas)' 
    },
	{
		Objetivo: 'Masa muscular',
		Tiempo: '60min',
		Ejercicios: 4,
		Sett: 2,
		Sexo: 'Mujer',
		Nivel: 'Principiante',
		Rutina: '1). 8 Flexiones con inclinacion (Apoyo de brazos). 2). 4 Flexiones con brazos abiertos. 3). 12 sentadillas Burpees. 4). 7 Zanadas con peso (cada pierna))'
	},
	{
		Objetivo: 'Fuerza',
		Tiempo: '30min',
		Ejercicios: 3,
		Sett: 4,
		Sexo: 'Mujer',
		Nivel: 'Medio',
		Rutina: '1). 10 Flexiones en diamante. 2). 1min plancha. 3). 15 Burpees. '
	},
	{
		Objetivo: 'Fuerza',
		Tiempo: '90min',
		Ejercicios: 5,
		Sett: 4,
		Sexo: 'Mujer',
		Nivel: 'Avanzado',
		Rutina: '1). 10 Flexiones en diamante. 2). 25 Abdominales . 3). 15 Burpees. 4). 15 Zancadas de pierna (cada pierna). 5). 1min Sentadilla en Pared'
	},
	{
		Objetivo: 'Perder peso',
		Tiempo: '90min',
		Ejercicios: 4,
		Sett: 4,
		Sexo: 'Hombre',
		Nivel: 'Avanzado',
		Rutina: '1). 15 flexiones en diamante. 2). 20 Flexiones con aplauso. 3). 15 Burpees. 4). 4min Salto con cuerda'
	},
	{ 
        Objetivo: 'Perder peso',
        Tiempo: '30min', 
        Ejercicios: 3, 
        Sett: 4, 
        Sexo: 'Hombre', 
        Nivel: 'Medio',
		Rutina: '1). 15 Burpies. 2). 15 Flexion y rotacion y 1min plancha. 3). 15 Burpees.'

    }
];
