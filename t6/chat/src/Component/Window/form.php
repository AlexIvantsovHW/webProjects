<?php 
header('Access-Control-Allow-Origin:*', "Refresh: 2");
header('Access-Control-Allow-Methods:POST,GET,OPTIONS,PUT,DELETE');
header('Access-Control-Allow-Headers:Content-Type, X-Auth-Token, Origin,Authorization');
    
    // Server
    $server="localhost";
	$user="root";
	$password="";
	$db="id21139145_ichat";

    //------------------
    /* $server="localhost";
	$user="id21139145_ichat";
	$password="Qwerty1!";
	$db="id21139145_ichat"; */ 
    //-------------------

    if(isset($_POST["name"])){$name=$_POST['name'];}else{$name= "";}
    if(isset($_POST["text"])){$text=$_POST['text'];}else{$text= "";}

    $conn=new mysqli($server,$user,$password,$db);

    if(mysqli_connect_error()){
        echo mysqli_connect_error();
        exit();
    }else{
    
        $conn->query("INSERT INTO `chat`(`name`,`text`) VALUES('$name','$text')"); 
    }  
    $conn->close();
?>