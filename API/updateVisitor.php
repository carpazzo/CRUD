<?php

    include "./databaseconn.php";
 
    $result = array('error'=>false);
    $action = '';

    if(isset($_GET['action'])){
        $action = $_GET['action'];
    }
    
    //Update a visitor 
    if($action == 'update'){

        $id = $_POST['id'];
        $name = $_POST['name'];
        $surname = $_POST['surname'];
        $phone = $_POST['phone'];
        $email = $_POST['email'];
        $temp = $_FILES['image'];
        $filename = $_FILES['image']['name'];
        //encode the file in to base64 and store in the database, but its not saving on the database as base64 string*
        $image = base64_encode($filename);
        
        $sql = $conn->query("UPDATE visitors SET name='$name', surname='$surname',phone='$phone',email='$email', image='$image' WHERE id='$id'");
        
        if($sql){
            $result['message'] = "Visitor Updated";   
        }else{
            $result['error'] = true;
            $result['message'] = "Something Wrong!";
        }
    }

?>