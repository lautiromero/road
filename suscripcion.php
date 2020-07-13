<?php
    if (!isset($pdo)) {
      require("dbconfig.php");
    }


    $email1 = $_POST['email1'];
    $opcion = "";

    if (filter_var($email1, FILTER_VALIDATE_EMAIL)) {

      $repetido = $pdo->query("SELECT * FROM suscriptores WHERE mail = '".$email1."' ");
      $mailRep = "";
      foreach ($repetido as $mail1) {
        $mailRep = $mail1['mail'];
      }
      if($mailRep == "" || $mailRep == "NULL"){
          $sqlS = $pdo->query("INSERT INTO suscriptores (mail, fecha) VALUES
          ('".$_POST['email1']."', NOW())");
      }
      if($sqlS == true){
          $opcion = "1";
      } else{
          $opcion = "2";
      }

    } else{
        $opcion = "3";
    }

    echo $opcion;



 ?>
