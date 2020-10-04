<?php
  require_once "./conn.php";
  $course= $_POST["course"];
  if($course=="btech" || $course=="mtech"){
    $branch= $_POST["branch"];
  }
  $sql =`select * from btech_cs`;
  try{
    $sql="SELECT * FROM btech_cs WHERE Semester=1";
    $stmt=$pdo->query($sql);
    $result=$stmt->fetch(PDO::FETCH_ASSOC);
    echo $result["fees"];
  }
  catch(PDOException $e){
    echo "Some error in fetching info->".$e;
  }
 ?>
