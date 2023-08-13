<?php 
header('Access-Control-Allow-Origin:*', "Refresh: 2");
header('Access-Control-Allow-Methods:POST,GET,OPTIONS,PUT,DELETE');
header('Access-Control-Allow-Headers:Content-Type, X-Auth-Token, Origin,Authorization');
    
    // Server
   /* $server="localhost";
	$user="root";
	$password="";
	$db="id21119780_4tsk"; */

    //------------------
    $server="localhost";
	$user="id21130992_itaske";
	$password="Qwerty1!";
	$db="id21130992_itaske"; 
    if(isset($_POST["tLog"])){$tLog=$_POST['tLog'];}else{$tLog= "";}
    if(isset($_POST["name"])){$name=$_POST['name'];}else{$name= "";}
    if(isset($_POST["password"])){$pass=$_POST['password'];}else{$pass= "";}

    $conn=new mysqli($server,$user,$password,$db);
    if(mysqli_connect_error()){
        echo mysqli_connect_error();
        exit();
    }else{
    
        $conn->query("UPDATE `dataTable` SET `tLog`='$tLog' WHERE `name`='$name' AND `password`='$pass' "); 
    }  
    $conn->close();
?>