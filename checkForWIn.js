class CheckForWin{

checkit(exe){
let counter;
let counteranah;
let counteralahson;
let counteralahson1;

  let tr=document.getElementsByClassName('tr');
for (var i = 0; i < tr.length; i++) {
  counter=0;
  counteranah=0;
  counteralahson1=0;
  counteralahson=0;
 

for (var j = 0; j < tr[i].children.length; j++) {

  


if (tr[i].children[j].innerText==exe) {
counter++
}
if (tr[j].children[i].innerText==exe) {
counteranah++
}
if (tr[0].children[0].innerText==exe&& tr[1].children[1].innerText==exe&&tr[2].children[2].innerText==exe) {
counteralahson++
}
if (tr[0].children[2].innerText==exe&& tr[1].children[1].innerText==exe&&tr[2].children[0].innerText==exe) {
counteralahson1++
}

}

if (counter==3||counteranah==3||counteralahson==3||counteralahson1==3) {
  let head1=document.getElementById('head1');
  head1.innerHTML=`${exe}- win `
  setTimeout(()=>{
  let win=new Win;
  win.winner()
  return
  },2000)
}

}

return "ok"

}


}
