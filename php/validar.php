<?php 
    
    $nome = $_POST["nome"];
    $email = $_POST["email"];
    $msg = $_POST["msg"];
    
    if(empty($nome)){
    	header("Location: ../error.html");
    }

    if(empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)){
    	header("Location: ../error.html");
    }

    if(empty($msg)){
    	header("Location: ../error.html");
    }


    if(file_exists('../json/dados.json')) {
    	$current_data = file_get_contents('dados.json');
    	$array_data = json_decode($current_data,true);
    	$extra = array (
    		'nome' => $nome,
    		'email' => $email,
    		'msg' => $msg 
    	);
    	$array_data[] = $extra;
    	$final_data = json_encode($array_data);
    	echo $final_data;
    	if(file_put_contents('../json/dados.json', $final_data)){
    		header("Location: ../success.html"); 
    	}
    }

    
?>