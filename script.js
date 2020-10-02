{
  let crse=document.querySelector("#course").value;
  setInterval(function(){
    let course=document.querySelector("#course").value;
    if(crse!=course){
      crse=course;
      let arr=document.getElementsByClassName("hide");
      for(let i=0;i<arr.length;i+=1){
        arr[i].style.display="none";
      }
    }
    document.getElementById(course).style.display="block";
    let sem=document.getElementById("sem").value;
    console.log(sem);
  }, 500);


}
