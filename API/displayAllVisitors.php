<?php

    include "./databaseconn.php";
    
    $result = array('error'=>false);
    $action = '';

    if(isset($_GET['action'])){
        $action = $_GET['action'];
    }

    //display all database query GET methods
    if($action == 'read'){
        $sql = $conn->query("SELECT * FROM visitors");
        $visitors = array();
        
        while($row = $sql->fetch_assoc()){
            array_push($visitors, $row);
        }
        $result['visitors'] = $visitors;        
    }
    //use to see the data on the page
    echo json_encode($result);

    //not sure if this close is needed enligth me please
    //$conn->close();

?>