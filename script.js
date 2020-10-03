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
  }, 1000);
  let sem= document.getElementById("sem");
  sem.addEventListener("keydown",function(e){
    if((e.keyCode>49&&e.keyCode<53)||(e.keyCode>97&&e.keyCode<101)){
      document.getElementById("prev-sem").style.display="block";
    }
    else{
      document.getElementById("prev-sem").style.display="none";
    }
  });
  function show_scholarship(){
    document.getElementById("show").style.display="block";
  }
}
