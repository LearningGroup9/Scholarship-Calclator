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
    if(crse=="btech"||crse=="mtech"){
      document.getElementById(course).style.display="block";
    }
  }, 1000);

  let sem= document.getElementById("sem");

  sem.addEventListener("keydown",function(e){
    if(crse=="btech"){
      if((e.keyCode>49&&e.keyCode<57)||(e.keyCode>97&&e.keyCode<105)){
        document.getElementById("prev-sem").style.display="block";
      }
      else{
        document.getElementById("prev-sem").style.display="none";
      }
    }
    else if(crse=="mba"||crse=="mca"||crse=="mtech"){
      if((e.keyCode>49&&e.keyCode<53)||(e.keyCode>97&&e.keyCode<101)){
        document.getElementById("prev-sem").style.display="block";
      }
      else{
        document.getElementById("prev-sem").style.display="none";
      }
    }
    else{
      if((e.keyCode>49&&e.keyCode<55)||(e.keyCode>97&&e.keyCode<103)){
        document.getElementById("prev-sem").style.display="block";
      }
      else{
        document.getElementById("prev-sem").style.display="none";
      }
    }
  });

  function show_scholarship(){
    document.getElementById("show").style.display="block";
  }

  function validation(){
    let tn_val= document.getElementById("tenth").value;
    let tw_val= document.getElementById("twelth").value;
    let tn= document.getElementById('10th');
    let tw= document.getElementById('12th');
    let check=0;
    tn.style.color="red";
    tw.style.color="red";
    if(tn_val<0 ||tn_val>100 || isNaN(tn_val)){
      tn.innerHTML ="**Invalid Entry";
      check=1;
      return false;
    }
    if(tw_val<0 ||tw_val>100 || isNaN(tw_val)){
      tw.innerHTML ="**Invalid Entry";
      check =1;
      return false
    }
    if(check!=1){
      return true;
    }
  }
}
