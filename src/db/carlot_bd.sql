DELIMITER //
CREATE PROCEDURE `registroParks`(
	IN `_id` INT,
	IN `_nombre` VARCHAR(50),
	IN `_apellido` VARCHAR(50),
	IN `_telefono` VARCHAR(15),
	IN `_correo` VARCHAR(60),
	IN `_password` VARCHAR(60),
	IN `_rol` BINARY (1),
	IN `_nombre_park` VARCHAR(100),
	IN `_calle` VARCHAR(70),
	IN `_colonia` VARCHAR(70),
	IN `_numero_ext` INT(11),
	IN `_stock` INT(11),
	IN `_dia_ini` VARCHAR(20),
	IN `_dia_fin` VARCHAR(20),
	IN `_hora_apertura` TIME,
	IN `_hora_cierre` TIME,
	IN `_descripcion` TEXT
,
	IN `_tarifa` INT
)
BEGIN 
	IF _id = 0 THEN
		INSERT INTO persons (nombre, apellido, telefono)
		VALUES (_nombre, _apellido, _telefono);

   	SET _id = LAST_INSERT_ID();
   
   	INSERT INTO users (correo, PASSWORD, id_person, rol)
   	VALUES (_correo, _password, _id, _rol);
   	
   	INSERT INTO parks (nombre_park, calle, colonia, numero_ext, stock, dia_ini, dia_fin, hora_apertura, hora_cierre, descripcion, tarifa, id_person)
   	VALUES(_nombre_park, _calle, _colonia, _numero_ext, _stock, _dia_ini, _dia_fin, _hora_apertura, _hora_cierre, _descripcion, _tarifa, _id);
   END IF;
   
   SELECT _id AS 'id';
END//
DELIMITER ;


DELIMITER //
CREATE PROCEDURE `registroReservas`(
	IN `_id` INT,
	IN `_id_park` INT,
	IN `_id_user` INT
,
	IN `_hra_arrivo` VARCHAR(50)
)
BEGIN 
	IF _id = 0 THEN
		INSERT INTO reservas (id, id_park, id_user, hra_arrivo)
		VALUES (_id, _id_park, _id_user, _hra_arrivo);

   	SET _id = LAST_INSERT_ID();
   
   END IF;
   
   SELECT _id AS 'id';
END//
DELIMITER ;


DELIMITER //
CREATE PROCEDURE `registroUsuarios`(
  IN _id INT,
  IN _nombre VARCHAR(50),
  IN _apellido VARCHAR(50),
  IN _telefono VARCHAR(15),
  IN _correo VARCHAR(60),
  IN _password VARCHAR(60),
  IN _rol BINARY(1)
)
BEGIN 
	IF _id = 0 THEN
		INSERT INTO persons (nombre, apellido, telefono)
		VALUES (_nombre, _apellido, _telefono);

   	SET _id = LAST_INSERT_ID();
   
   	INSERT INTO users (correo, PASSWORD, id_person, rol)
   	VALUES (_correo, _password, _id, _rol);
   END IF;
   
   SELECT _id AS 'id';
END//
DELIMITER ;