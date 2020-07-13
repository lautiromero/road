<?php
require("class.phpmailer.php");
require("class.smtp.php");
// Valores enviados desde el formulario
if ( !isset($_POST["nombre"]) || !isset($_POST["email"]) || !isset($_POST["telefono"]) || !isset($_POST["mensaje"]) ) {
    die ("Es necesario completar los datos requeridos del formulario");
}
$nombre = $_POST['nombre'];
$email = $_POST['email'];
$telefono = $_POST['telefono'];
$consulta = $_POST['mensaje'];

$mensaje = "Nombre: $nombre.  \n\n E-mail: $email.  \n\n Teléfono: $telefono.  \n\n Consulta: $consulta.";

// Datos de la cuenta de correo utilizada para enviar vía SMTP
$smtpHost = "smtp.gmail.com";  // Dominio alternativo brindado en el email de alta
$smtpUsuario = "agenciaroadinfo@gmail.com";  // Mi cuenta de correo
$smtpClave = "Ventasroad";  // Mi contraseña

// Email donde se enviaran los datos cargados en el formulario de contacto
$emailDestino = "info@agenciaroad.com";

$mail = new PHPMailer();
// $mail->SMTPDebug = 2;
$mail->IsSMTP();
$mail->SMTPAuth = true;
$mail->Port = 587;
$mail->SMTPSecure = 'tls';
$mail->IsHTML(true);
$mail->CharSet = "utf-8";


// VALORES A MODIFICAR //
$mail->Host = $smtpHost;
$mail->Username = $smtpUsuario;
$mail->Password = $smtpClave;

$mail->From = $smtpUsuario; // Email desde donde envío el correo.
// $mail->FromName = $nombre;
$mail->AddAddress($emailDestino); // Esta es la dirección a donde enviamos los datos del formulario

$mail->Subject = "Consulta de ".$nombre; // Este es el titulo del email.
$mensajeHtml = nl2br($mensaje);
$mail->Body = $mensajeHtml; // Texto del email en formato HTML
$mail->AltBody = "{$mensaje} \n\n Active el formato html"; // Texto sin formato HTML
// FIN - VALORES A MODIFICAR //

// $estadoEnvio = ;
if($mail->Send()){
    echo "Gracias por comunicarte. Un asesor se pondrá en contacto.";
} else {
     // echo "error".$mail->ErrorInfo;
     echo "Ocurrió un error inesperado.";
}
