<?php
$usuarioPrEmail = "";
$usuarioPruebaPas = "";
$conn = conexion();

if ($_SERVER["REQUEST_METHOD"] == 'POST') {
    $nombre = htmlspecialchars($_POST['name']);
    $apellido = htmlspecialchars($_POST['lastname']); // corregido a $apellido
    $email = htmlspecialchars($_POST['email']);
    $password = htmlspecialchars($_POST['password']);

};


  // Verificar si el correo ya existe
  $stmt = $conn->prepare("SELECT correo FROM usuarios WHERE correo = ?");
  $stmt->bind_param("s", $email);
  $stmt->execute();
  $stmt->store_result();

  if ($stmt->num_rows > 0) {
      // El correo ya existe
      echo "El correo ya está registrado.";
      $stmt->close();
      $conn->close();
      exit();
  } else {
    guardar();
  };


function guardar(){
    $passwordHash = password_hash($password, PASSWORD_DEFAULT);
    $stmt = $conn->prepare("INSERT INTO usuarios (nombre, apellido, correo, contrasena) VALUES (?, ?, ?, ?)");
    $stmt->bind_param("ssss", $nombre, $apellido, $email, $passwordHash);

     // Ejecutar la consulta
      if ($stmt->execute()) {
        echo "Nuevo registro creado exitosamente";
        // header("Location: index1.php");
        exit(); // Asegurarse de que el script se detenga
      } else {
        echo "Error: " . $stmt->error;
      }
    // Cerrar la conexión
      $stmt->close();
      $conn->close();
};

// Función de conexión
function conexion(){
    $server = "localhost";
    $user = "root";
    $pas = "";
    $db = "utp";

    $conexion = new mysqli($server, $user, $pas, $db);

    if ($conexion->connect_errno) {
        die("Conexión fallida: " . $conexion->connect_error);
    } else {
        return $conexion;}
};
?>