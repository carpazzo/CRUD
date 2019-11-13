<?php

    include "./databaseconn.php";
    
    $result = array('error'=>false);
    $action = '';

    if(isset($_GET['action'])){
        $action = $_GET['action'];
    }

    //Delete User
    if($action == 'delete'){
        
        $id = $_POST['id'];
        
        $sql = $conn->query("DELETE FROM visitors WHERE id='$id'");
        
        if($sql){
            return $result['message'] = "Deleted";   
        }else{
            $result['error'] = true;
            return  $result['message'] = "Can't Be deleted!";
        }
    }
?>