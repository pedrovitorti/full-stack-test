<?php 
    
    // $nome = $_POST["nome"];
    // $email = $_POST["email"];
    // $msg = $_POST["msg"];
    
    // echo $nome;
    // echo $email;
    // echo $msg;

    $values = json_encode($_POST);


    file_put_contents('../json/dados.json', $values, FILE_APPEND);
?>