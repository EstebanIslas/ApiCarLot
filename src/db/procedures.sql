/* Insertar o Actualizar Usuarios */
DELIMITER $$
CREATE PROCEDURE `usersAddorEdit` (
  IN _id INT,
  IN _correo VARCHAR(60),
  IN _password VARCHAR(60),
  IN _image VARCHAR(255),
  IN _rol BINARY(1),
  IN _id_person INT
)
BEGIN 
  IF _id = 0 THEN
    INSERT INTO users (correo, PASSWORD, image, rol, id_person)
    VALUES (_correo, _password, _image, _rol, _id_person);

    SET _id = LAST_INSERT_ID();
  ELSE
    UPDATE users
    SET
    correo = _correo,
    password = _password,
    image = _image,
    rol = _rol,
    id_person = _id_person
    WHERE id = _id;
  END IF;

  SELECT _id AS 'id';
END

/* Insertar o Actualizar Personas */

DELIMITER $$
CREATE PROCEDURE `personsAddorEdit` (
  IN _id INT,
  IN _nombre VARCHAR(50),
  IN _apellido VARCHAR(50),
  IN _telefono VARCHAR(15)
)
BEGIN 
  IF _id = 0 THEN
    INSERT INTO persons (nombre, apellido, telefono)
    VALUES (_nombre, _apellido, _telefono);

    SET _id = LAST_INSERT_ID();
  ELSE
    UPDATE persons
    SET
    nombre = _nombre,
    apellido = _apellido,
    telefono = _telefono
    WHERE id = _id;
  END IF;

  SELECT _id AS 'id';
END