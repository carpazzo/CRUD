<?php

$conn = new mysqli("localhost","root","","crud_database");
    if($conn->connect_error){
    die("Connection Failed!".$conn->connect_error); 
    }
    //echo("database connection,good to go");

?>