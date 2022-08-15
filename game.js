class Game {



showPage(exe,computer){
  let main =document.getElementById('main');

  while (main.firstChild) {
    main.removeChild(main.firstChild)
  }

  main.innerHTML=`<h1 class="head1" id="head1"></h1>
  <table class="divtable" id="table">
  <tr class="tr">
      <td class="div" id="1"></td>
      <td class="div" id="2"></td>
      <td class="div" id="3"></td>
  </tr>
  <tr class="tr">
      <td class="div" id="4"></td>
      <td class="div" id="5"></td>
      <td class="div" id="6"></td>
  </tr>
  <tr class="tr">
      <td class="div" id="7"></td>
      <td class="div" id="8"></td>
      <td class="div" id="9"></td>
  </tr>
    </table> `

// let div = document.querySelectorAll('.div');
// let check=new CheckForWin;
//   check.checkit(exe);


// div.forEach((item, i) => {

//   item.addEventListener('click',mafunc);

// });  
 
// function mafunc(e){
//   div.forEach((val,index)=>{
//     val.removeEventListener('click',mafunc);

//   })

//   if (e.target.innerText=='') { 
//     e.target.innerText=exe;
//    check.checkit(exe);
//     let randomplayer=new Random;
//     randomplayer.putxo(computer,exe)
  
// }


// }


console.log("hay")

}
}
