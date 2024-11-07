<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $user = $_POST["id_usuario"];
    $password = $_POST["contrasena"];

    $conexion = conexion();

    $sql = "SELECT id_usuario, nombre FROM usuarios WHERE correo = '$user' AND password = '$contrasena'";
    $result = $conexion->query($sql);

    if ($result->num_rows > 0) {
        session_start();
        $row = $result->fetch_assoc();
        $_SESSION["id_usuario"] = $row["id_usuario"];
        $_SESSION["nombre"] = $row["nombre"];
        header("Location: home.html");
    } else {
        echo "Credenciales incorrectas. Por favor, inténtelo de nuevo.";
    }

    $conexion->close();
};

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