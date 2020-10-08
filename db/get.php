<?php
  require_once "./conn.php";
  $course= $_POST["course"];
  if($course=="btech" || $course=="mtech"){
    $branch= $_POST["branch"];
  }
  try{
    $sql="SELECT * FROM btech_cs";
    $stmt=$pdo->query($sql);
    $result=$stmt->fetchAll(PDO::FETCH_ASSOC);
    foreach($result as $data){
      echo $data["Semester"]."&nbsp;".$data["fees"]."<br>";
    }
  }
  catch(PDOException $e){
    echo "Some error in fetching info : ".$e;
  }
 ?>
