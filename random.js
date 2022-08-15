class Random {
  putxo(computer, exe) {
    function getRndInteger(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }

    let div = document.querySelectorAll(".div");
   


    let num = getRndInteger(0, 9);

    // setTimeout(() => {

    //   for (var i = 0; i < div.length; i++) {
    //     if (div[i].innerText == "X" &&div[num].innerText == "X"|| div[i].innerText == "O"||div[num].innerText == "O") {
    //       console.log(num)
    //       num = getRndInteger(0, 9);
    //       console.log(num)
    //       continue;
        
    //     } else if(div[i].innerText == "" &&div[num].innerText == ""){
    //       div[num].innerText = computer;
    //       let check = new CheckForWin();
    //       check.checkit(computer);
    //       return;
         
    //     }else{
    //       console.log("canot")
    //       num = getRndInteger(0, 9);
    //       continue
    //     }
    //   }
    // }, 1000);


    setTimeout(() => {

      for (var i = 0; i < div.length; i++) {

        if(div[0].innerText == exe && div[1].innerText == exe && div[2].innerText =="" ){
          div[2].innerText = computer;
          let check = new CheckForWin();
          check.checkit(computer);
          return;
        }
        if(div[1].innerText == exe && div[2].innerText == exe && div[0].innerText =="" ){
          div[0].innerText = computer;
          let check = new CheckForWin();
          check.checkit(computer);
          return;
        }
        if(div[0].innerText == exe && div[2].innerText == exe && div[1].innerText =="" ){
          div[1].innerText = computer;
          let check = new CheckForWin();
          check.checkit(computer);
          return;
        }


        if(div[5].innerText == exe && div[4].innerText == exe && div[3].innerText =="" ){
          div[3].innerText = computer;
          let check = new CheckForWin();
          check.checkit(computer);
          return;
        }
        if(div[3].innerText == exe && div[4].innerText == exe && div[5].innerText =="" ){
          div[5].innerText = computer;
          let check = new CheckForWin();
          check.checkit(computer);
          return;
        }
        if(div[5].innerText == exe && div[3].innerText == exe && div[4].innerText =="" ){
          div[4].innerText = computer;
          let check = new CheckForWin();
          check.checkit(computer);
          return;
        }

        if(div[6].innerText == exe && div[7].innerText == exe && div[8].innerText =="" ){
          div[8].innerText = computer;
          let check = new CheckForWin();
          check.checkit(computer);
          return;
        }
        if(div[7].innerText == exe && div[8].innerText == exe && div[6].innerText =="" ){
          div[6].innerText = computer;
          let check = new CheckForWin();
          check.checkit(computer);
          return;
        }
        if(div[6].innerText == exe && div[8].innerText == exe && div[7].innerText =="" ){
          div[7].innerText = computer;
          let check = new CheckForWin();
          check.checkit(computer);
          return;
        }

        
        if(div[6].innerText == exe && div[8].innerText == exe && div[7].innerText =="" ){
          div[7].innerText = computer;
          let check = new CheckForWin();
          check.checkit(computer);
          return;
        }

        if(div[0].innerText == exe && div[3].innerText == exe && div[6].innerText =="" ){
          div[6].innerText = computer;
          let check = new CheckForWin();
          check.checkit(computer);
          return;
        }
        if(div[6].innerText == exe && div[3].innerText == exe && div[0].innerText =="" ){
          div[0].innerText = computer;
          let check = new CheckForWin();
          check.checkit(computer);
          return;
        }
        if(div[0].innerText == exe && div[6].innerText == exe && div[3].innerText =="" ){
          div[3].innerText = computer;
          let check = new CheckForWin();
          check.checkit(computer);
          return;
        }



        if(div[1].innerText == exe && div[4].innerText == exe && div[7].innerText =="" ){
          div[7].innerText = computer;
          let check = new CheckForWin();
          check.checkit(computer);
          return;
        }
        if(div[7].innerText == exe && div[4].innerText == exe && div[1].innerText =="" ){
          div[1].innerText = computer;
          let check = new CheckForWin();
          check.checkit(computer);
          return;
        }
        if(div[7].innerText == exe && div[1].innerText == exe && div[4].innerText =="" ){
          div[4].innerText = computer;
          let check = new CheckForWin();
          check.checkit(computer);
          return;
        }


        if(div[2].innerText == exe && div[5].innerText == exe && div[8].innerText =="" ){
          div[8].innerText = computer;
          let check = new CheckForWin();
          check.checkit(computer);
          return;
         
        }
        if(div[2].innerText == exe && div[8].innerText == exe && div[5].innerText =="" ){
          div[5].innerText = computer;
          let check = new CheckForWin();
          check.checkit(computer);
          return;
         
        }
        if(div[5].innerText == exe && div[8].innerText == exe && div[2].innerText =="" ){
          div[2].innerText = computer;
          let check = new CheckForWin();
          check.checkit(computer);
          return;
         
        }



        if(div[0].innerText == exe && div[4].innerText == exe && div[8].innerText =="" ){
          div[8].innerText = computer;
          let check = new CheckForWin();
          check.checkit(computer);
          return;
         
        }
        if(div[8].innerText == exe && div[4].innerText == exe && div[0].innerText =="" ){
          div[0].innerText = computer;
          let check = new CheckForWin();
          check.checkit(computer);
          return;
         
        }
        if(div[0].innerText == exe && div[8].innerText == exe && div[4].innerText =="" ){
          div[4].innerText = computer;
          let check = new CheckForWin();
          check.checkit(computer);
          return;
         
        }


        if(div[2].innerText == exe && div[4].innerText == exe && div[6].innerText =="" ){
          div[6].innerText = computer;
          let check = new CheckForWin();
          check.checkit(computer);
          return;
         
        }
        if(div[4].innerText == exe && div[6].innerText == exe && div[2].innerText =="" ){
          div[2].innerText = computer;
          let check = new CheckForWin();
          check.checkit(computer);
          return;
         
        }
        if(div[2].innerText == exe && div[6].innerText == exe && div[4].innerText =="" ){
          div[4].innerText = computer;
          let check = new CheckForWin();
          check.checkit(computer);
          return;
         
        }
       

        if ( div[num].innerText == "") {

          div[num].innerText = computer;
          let check = new CheckForWin();
          check.checkit(computer);
          return;
        } else{
          num = getRndInteger(0, 9);
          continue;
        }
      }
      let check = new CheckForWin();
      check.checkit(computer);
      return;
    }, 1000);

  }
}

