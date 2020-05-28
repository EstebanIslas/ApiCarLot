INSERT INTO `persons` (`id`, `nombre`, `apellido`, `telefono`) VALUES
	(1, 'Daniela', 'Rubiales', '7752789292'),
	(2, 'Esteban', 'Islas', '7753457890'),
	(3, 'Oscar', 'Escamilla', '7753434890'),
	(5, 'manuelito', 'morales', '34234'),
	(6, 'Sam', 'Smith', '7757523658'),
	(7, 'manuelito', 'morales', '34234'),
	(8, 'osvat', 'smskms', '56789'),
	(15, 'Jose', 'Luis', '7757523655'),
	(16, 'Daniela Maria', 'Rubiales', '7757523644'),
	(17, 'Valentin', 'Elizalde', '7751299532');

INSERT INTO `users` (`id`, `correo`, `password`, `image`, `rol`, `id_person`) VALUES
	(2, 'oscarescamilla@gmail.com', 'oscar123', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR5UcrY71t1Gn2xal2VAWbV_tpkmAcbNIWYxrs_L23zGSo6wKt2', '1', 3),
	(3, 'estebanislas@gmail.com', 'esteban123', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRF-qErkovP8q_XRRDn-c9PL2py9zDCLpy6_M3tp8Fp997KiZpd', '0', 2),
	(5, 'manuel@manuel', 'manuel', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQYsgBhcVLLSDpRFKUgqFKiS2kehzwXW2FHeF4VezQjOgKM-Onj', '0', 5),
	(6, 'samsmith@gmail.com', 'pass', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRHD86n_tP9hWpcsdqedUYJU6W8FowFbRfTqh0IQdtWY94CPCVe', '0', 6),
	(7, 'manuel@manuel', 'manuel', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS3aK7_ZdIUGyVxUIPAnSPcvJXvsY3Wg_Dc_Cw_HJFhiKrNmK9N', '0', 7),
	(8, 'hjbn', 'ghbjn', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSHNn7XsifQl11ZXWzDPlLBfExY_gisL6DusHmHBzB65hOnQDmJ', '0', 8),
	(16, 'valen@gmail.com', 'hola', NULL, '1', 17);

INSERT INTO `parks` (`id`, `nombre_park`, `calle`, `colonia`, `numero_ext`, `stock`, `dia_ini`, `dia_fin`, `hora_apertura`, `hora_cierre`, `descripcion`, `id_person`, `longitud`, `latitud`, `image`, `tarifa`) VALUES
	(1, 'Hidalgo', 'Miguel Hidalgo', 'San Francisco', 15, 25, 'Lunes', 'Domingo', '08:00 am', '14:00 pm', 'un lugar seguro para tu auto', 1, NULL, NULL, 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQM90jj1zxd3Ws8dXzi5bfjzCsP9V1NXbuThC4_DqHKus1hO5bY', '10.50'),
	(2, 'La fuente', 'Benito Juarez', 'Centro', 25, 100, 'Lunes', 'Domingo', '07:30 am', '15:00 pm', 'no busques mas siempre disponibles', 2, NULL, NULL, 'http://noticiascurazao.com/wp-content/uploads/2017/12/estacionamiento.jpg', '13.65'),
	(3, 'El parkeadero', '10 de mayo', 'La cañada', 105, 20, 'Lunes', 'Viernes', '08:30 am', '17:00 pm', 'Esta es una descripcion', 15, NULL, NULL, 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSG2KfAsQi6podDspG3Z0ly67Wz-RVBrLA4EjA9ytJwxWjNCGO6', '15'),
	(4, 'Estacionamiento Garcia', 'Insurgentes', 'La cañada', 20, 20, 'Lunes', 'Viernes', '08:30 am', '17:00 pm', 'Esta es una descripcion', 16, NULL, NULL, 'https://media.metrolatam.com/2019/08/09/estacionamientoa-9c1a07dd5df48a97df0d36e8d6bf80a3-600x400.jpg', '20'),
	(5, 'El gallo', 'Santiago', 'La Condesa', 15, 50, 'Lunes', 'Viernes', '08:30 am', '17:00 pm', 'Esta es una descripcion', 17, NULL, NULL, NULL, '16');

INSERT INTO `puntuaciones` (`id`, `comment`, `calificacion`, `id_person`, `id_park`) VALUES
	(1, 'Excelente servicio y muy buen trato', 5, 3, 1),
	(2, 'Porfavor si pudiera abrir mas temprano', 3, 3, 2);

INSERT INTO `cars` (`id`, `matricula`, `marca`, `color`, `descripcion`, `id_person`) VALUES
	(1, 'MHS152S', 'Nissan', 'Rojo', 'Camioneta familiar', 3),
	(2, 'TEM646L', 'Frontier', 'Gris', 'Camoneta que ya tiene un golpe en la aprte inferior delantera', 3);

INSERT INTO `inputs` (`id`, `entrada`, `salida`, `estado`, `tarifa_hr`, `descripcion`, `id_park`, `id_car`) VALUES
	(1, '2019-10-06 05:22:42', NULL, 1, 10.5, NULL, 1, 1),
	(2, '2019-10-06 05:22:42', NULL, 1, 15.2, NULL, 2, 2);

INSERT INTO `tarifas` (`id`, `tipo_car`, `descripcion`, `tarifa`, `id_park`) VALUES
	(1, 'Motos', 'Ejemplos de motos italikas,Naked Buell,Supermoto BETA,Doble Propósito KTM 1290,Urbanas Yamaha FZ-16.', 5, 1),
	(2, 'Automoviles', 'Ejemplos de automoviles Jetta,Platina,Fiesta.', 10, 1),
	(3, 'camioneta', 'Ejemplos de camionetas pickups, vehículos todoterreno, furgonetas, monovolúmenes, y familiares', 15, 2);

INSERT INTO `reservas` (`id`, `entrada`, `estado`, `hra_arrivo`, `id_park`, `id_user`) VALUES
	(1, '2019-12-10 23:05:16', 'En curso', '14:00:00', 1, 2),
	(2, '2019-12-10 23:05:42', 'En curso', '18:00:00', 2, 6),
	(4, '2019-12-11 05:11:17', 'En curso', '06:14:06', 3, 6);

