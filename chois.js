class Choise {



  choseOneOf(callBack){
    let main=document.getElementById('main');
    while (main.firstChild) {
      main.removeChild(main.firstChild)
    }

    main.innerHTML=`  <div class="chose">
        <h1 class="headertt">you'r choiseiso</h1>
      <div class="choisexo">
        <div class="X" fofo="X"  id="X">
      X
        </div>
        <div class="X" fofo="O"  id="O">
      O
        </div>
        </div>
      </div>
`
let player;
let computer;
let div=document.querySelectorAll('.X');

div.forEach((item, i) => {
  item.addEventListener('click',(e)=>{
    let control=new Control;


    if (e.target.id=='X') {
      player='X'
      computer='O'
      control.controlGame(player,computer)

    }else if (e.target.id=='O')  {
        player='O'
        computer='X'

        control.controlGame(player,computer)
    }
  })
});



  }

}
