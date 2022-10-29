<?php 

    $con = new mysqli("localhost", "root", "root", "batch5_php");

    $action = $_POST['action'];     // Recieve Data from ajax action 
    $action();                      //action();

    function insertData(){
        global $con;
        $student_name = $_POST['student_name'];
        $f_name = $_POST['f_name'];
        $m_name = $_POST['m_name'];
        $email = $_POST['email'];
        $status = $_POST['status'];

        $result = $con->query("INSERT INTO `tbl_student`(`student_name`, `f_name`, `m_name`, `email`, `status`) VALUES ('$student_name','$f_name','$m_name','$email','$status')");

        if($result){
            echo '<div class="alert alert-success">
                     <strong>Success:</strong> Student Info Successfully Added!
                  </div>';
        }
    }

    // SHOW DATA
    function show(){
        global $con;

        $obj =  $con->query("SELECT * FROM `tbl_student`");
        if($obj-> num_rows>0){
            $tdata = "";
            $sl = 1;
            
            while($student = $obj->fetch_assoc()){

                // Status Dynamic
                if($student['status'] == 1){
                    $status = '<button class="btnActive btn btn-success btn-sm" value="'.$student['student_id'].'">
                        <i class="fa-solid fa-user-check"></i>
                    </button>';
                }
                else{
                    $status = '<button class="btnInactive btn btn-danger btn-sm" value="'.$student['student_id'].'">
                        <i class="fa-solid fa-user-xmark"></i>
                    </button>';
                }

                $tdata .= '<tr class="text-center">
                              <td>'. $sl++ .'</td>
                              <td>'.$student['student_name'].'</td>
                              <td>'.$student['f_name'].'</td>
                              <td>'.$student['m_name'].'</td>
                              <td>'.$student['email'].'</td>
                              <td>'.$status.'</td>
                              <td>
                                <button class="btnEdit btn btn-warning btn-sm" value="'.$student['student_id'].'"><i class="fa-solid fa-pen-to-square"></i></button>

                                <button data-bs-toggle="modal" data-bs-target="#forDelete" class="btnDelete btn btn-danger btn-sm" value="'.$student['student_id'].'"><i class="fa-solid fa-trash"></i></button>
                              </td>
                            </tr>';
            }
            echo $tdata;
        }else{
            echo '
                <tr>
                    <td colspan="7">
                        <div class="alert alert-primary text-center">
                            <strong>Fill Data:</strong> Empty Student Info!
                        </div>
                    </td>
                </tr>
            ';
        }
    }

    // ACTIVE TO INACTIVE
    function active(){
        global $con;
        $id =  $_POST['id'];
        $result = $con->query("UPDATE tbl_student SET status = '2' WHERE student_id = '$id'");
    }

    // INACTIVE TO ACTIVE
    function inactive(){
        global $con;
        $id =  $_POST['id'];
        $result = $con->query("UPDATE tbl_student SET status = '1' WHERE student_id = '$id'");
    }

    //DELETE DATA
    function delete(){
        global $con;
        $id = $_POST['id'];
        $result = $con->query("DELETE FROM `tbl_student` WHERE student_id = '$id' ");
    }
?>
