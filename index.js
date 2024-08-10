let h=document.getElementById('h');
let m=document.getElementById('m');
let s=document.getElementById('s');
let a_p=document.getElementById('a_p');
let ans=true;
setInterval(()=>{
      h.innerHTML=new Date().getHours();
      if(new Date().getHours()===12){
        if(ans==true){
            a_p.innerHTML='AM';
            ans=false;
        }else{
            a_p.innerHTML='PM';
            ans=true;
        }
      }
      m.innerHTML=new Date().getMinutes();
      s.innerHTML=new Date().getSeconds();    
},1000);     
     