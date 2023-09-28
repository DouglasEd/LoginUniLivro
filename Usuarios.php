<?php
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');
    header('Access-Control-Allow-Methods: POST, GET, PUT, DELETE');
    header('Access-Control-Allow-Headers: Access-Control-Allow-Headers, Content-Type,
    Access-Control-Allow-Methods, Authorization, X-Request-With');

    $conn = new mysqli('localhost','root','','unilivro'); ////////////////////////////BOTAR A POHA DO NOME DO BD

    if($_SERVER['REQUEST_METHOD'] === 'GET'){
        if(isset($_GET['id'])){
            $id = $conn->real_escape_string($_GET['id']);
            $sql = $conn->query("select * from Alunos where ID_Aluno = '$id'");
            $data = $sql->fetch_assoc();
        }   
        else{
            $data = array();
            $sql = $conn->query('select * from Alunos');
            while($d = $sql->fetch_assoc()){
                $data[] = $d;
            }
        }
        exit(json_encode($data));
    }
?>