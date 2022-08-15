class Control {


controlGame(callback,computer){

  let game=new Game;
  game.showPage(callback,computer);
  
  
  let div = document.querySelectorAll('.div');
  let check=new CheckForWin;
    check.checkit(callback);
  
  
  div.forEach((item, i) => {
  
    item.addEventListener('click',mafunc);
  
  });
   
  function mafunc(e){
    div.forEach((val,index)=>{
      val.removeEventListener('click',mafunc);
  
    })
  
    if (e.target.innerText=='') { 
      e.target.innerText=callback;
     check.checkit(callback);
      let randomplayer=new Random;
      randomplayer.putxo(computer,callback)
      setTimeout(()=>{
        div.forEach((item, i) => {
      
          item.addEventListener('click',mafunc);
        
        });
      },1000)
    
  }
  
  
  }

  
}


}
