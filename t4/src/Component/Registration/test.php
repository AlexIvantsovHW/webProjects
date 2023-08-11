<?php 
    header('Access-Control-Allow-Origin:*', "Refresh: 3");
    header('Access-Control-Allow-Methods:POST,GET,OPTIONS,PUT,DELETE');
header('Access-Control-Allow-Headers:Content-Type, X-Auth-Token, Origin,Authorization');
    // * (Имя хоста, Пользователь в phpAdmin, пароль в phpAdmin, имя БД)
    $server="localhost";
	$user="root";
	$password="";
	$db="id21119780_4tsk";
    $method=$_SERVER['REQUEST_METHOD'];

    $conn=new mysqli($server,$user,$password,$db);

    if(mysqli_connect_error()){
        echo mysqli_connect_error();
        exit();
    }else{
    $conn->query("INSERT INTO `dataTable`(`name`,`email`,`tReg`,`status`) VALUES('Alina','Alina@mail.ru','2023-08-08 17:05:32','Active')"); 
}

   ?>