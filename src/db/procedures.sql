DELIMITER $$
CREATE PROCEDURE `registroUsuarios` (
  IN _id INT,
  IN _nombre VARCHAR(50),
  IN _apellido VARCHAR(50),
  IN _telefono VARCHAR(15),
  IN _correo VARCHAR(60),
  IN _password VARCHAR(60)  
)
BEGIN 
	IF _id = 0 THEN
		INSERT INTO persons (nombre, apellido, telefono)
		VALUES (_nombre, _apellido, _telefono);

   	SET _id = LAST_INSERT_ID();
   
   	INSERT INTO users (correo, PASSWORD, rol, id_person)
   	VALUES (_correo, _password, '0', _id);
   END IF;
   
   SELECT _id AS 'id';
END