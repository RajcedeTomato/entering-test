
      function openSection(event,...names){
            closeAll();
            removeActiveClass();
            addActiveClass(event);
            let sections=names;
            sections.map((section)=>{
                  if(section != "contact"){
                  document.getElementById(section).style.display="initial";}
                  else {
                        document.getElementById(section).style.display="flex";  
                  }
            });
}

      function closeAll(){
           let contents= document.getElementsByClassName('content')
           for(let i=0;i<contents.length;i++){
                 contents[i].style.display="none";
           }
      }

      function removeActiveClass(){
      let buttons=document.getElementsByClassName('nav-link');
      for(let i=0;i<buttons.length;i++){
            buttons[i].className=buttons[i].className.replace("active","");
      }
      }

      function addActiveClass(event){
            event.currentTarget.className+=" active";
      }

      function scrollToTop(){
            document.body.scrollTop = 0; 
            document.documentElement.scrollTop = 0;
      }

      window.onscroll=function(){
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("topButton").style.display = "block";
    document.getElementById("topButton").style.transition = "display 1s";
   
  
  } else {
      document.getElementById("topButton").style.transition = "display 1s";
    document.getElementById("topButton").style.display = "none";
  }
      }
