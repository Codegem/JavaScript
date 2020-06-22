// const antraste = document.querySelector('#js-antraste');
//     antraste.textContent = " Labas ";

//     var element = document.getElementById("home");
//         element.style.color="red";

// const listas = document.querySelector('#todo-ul');
//     listas.innerHTML+="<li>Punktas1</li>";

//     let vieta = document.createElement('td');
//     let kur = document.getElementById('kurk');
//     kur.appendChild(vieta).innerHTML = "my Duom";

// let x = document.getElementsByTagName("p");
//     for(let i=0; x.length; i++){
//         x[i].style.color = "red";
//     }
// --------------------------------------------------------
// const butonas = document.getElementById("btn");
// butonas.addEventListener('click', ijunk)
// function ijunk (){
//     var img = document.getElementById("paveiksl");
//         if (img.style.display == "block"){
//             img.style.display = "none"; 
//         }
//         else 
//         img.style.display = "block";
// }
//----------------------------------------------------------

// const iraso = document.getElementById("inputas");
// const paspaudzia = document.getElementById("formosbutton");
// paspaudzia.addEventListener('click', imuvalue)
// function imuvalue(){
//     iraso.value;
//     for(let i=1; iraso.value>=i; i++){
//         let vieta = document.createElement('div');
//         let kur = document.getElementById('kurk');
//         kur.appendChild(vieta).innerHTML = i + "Textas";
//     }
// }
const geltonasbtn = document.getElementById("Geltonas");
const zaliasbtn = document.getElementById("Zalias");
const raudonasbtn = document.getElementById("Raudonas");
const text = document.getElementById("textas");
geltonasbtn.addEventListener('click', fgeltonas)
    function fgeltonas (){
         text.style.color = "yellow";
    }
    raudonasbtn.addEventListener('click', fraudonas)
    function fraudonas (){
         text.style.color = "red";
    }
    zaliasbtn.addEventListener('click', fzalias)
    function fzalias (){
         text.style.color = "green";
    }

// didina mazina paveiksliuka
const padidintibtn = document.getElementById("padidinti");
const sumazintibtn = document.getElementById("sumazinti");
const paveikslasimg = document.getElementById("paveikslas");

    padidintibtn.addEventListener('click', didinti)
        function didinti (){
            paveikslasimg.style.width = "600px";
            paveikslasimg.style.height = "600px";
        }
    sumazintibtn.addEventListener('click', mazinti)
        function mazinti (){
            paveikslasimg.style.width = "300px";
            paveikslasimg.style.height = "300px";
        }
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

const spalvotasbtn = document.getElementById("spalvotas");
const nespalvotasbtn = document.getElementById("nespalvotas");
const jspic = document.getElementById('container-black-color');
    nespalvotasbtn.addEventListener('click', nospalva)
    function nospalva (){
        document.getElementById('container-black-color').innerHTML=`
            <img src="img/js-dark.png" alt="" >
            `; 
    }
    spalvotasbtn.addEventListener('click', spalva)
    function spalva (){
        document.getElementById('container-black-color').innerHTML=`
            <img src="img/js-color.png" alt="" >
            `; 
    }
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

const tekstas = document.getElementById("textas2");
const okbuton = document.getElementById("btnok");
    okbuton.addEventListener('click', intarpas)
        function intarpas(){
            document.getElementById("headeris1").innerHTML=
            '<h1>Pavadinimas</h1>';
        }
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const komentas = document.getElementById("btnkoment")
const formosdiv = document.getElementById("forma")
        komentas.addEventListener('click', formosreveal)
        function formosreveal (){
            formosdiv.innerHTML='<label>Vardas</label><br><input type="text"><br><label>Komentaras</label><br><input type="textbox"><br><button type="button" id="pateikimas">Pateikti</button>';
            const pateikt = document.getElementById("pateikimas")
            pateikt.addEventListener('click', pateike)
            function pateike (){
                alert("Aciu uz nuomone!");
            }
        }
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const kairebtn = document.getElementById("kaire")
const desnebtn = document.getElementById("desne")
const pasleptibtn = document.getElementById("paslepti")
const nukeltibtn = document.getElementById("nukelti")
const atstatytbtn = document.getElementById("atstatyt")
const paveiksliukas = document.getElementById("paveik")
const pwrap = document.getElementById("p-wrap")
    kairebtn.addEventListener('click', atkaire)
        function atkaire(){
            paveiksliukas.style.display = "block";
            paveiksliukas.style.float = "left";
            paveiksliukas.style.margin = "0";
        }
    desnebtn.addEventListener('click', atdesne)
        function atdesne(){
            paveiksliukas.style.display = "block";
            paveiksliukas.style.float = "right";
            paveiksliukas.style.margin = "0";
        }
    pasleptibtn.addEventListener('click', paslepimas)
        function paslepimas(){
            paveiksliukas.style.display = "none";
        }
    nukeltibtn.addEventListener('click', kelimas)
        function kelimas(){
            paveiksliukas.style.display = "block";
        }
    atstatytbtn.addEventListener('click', atstatymas)
        function atstatymas(){
            paveiksliukas.style="clear";
        }
//----------------------------------------------------------     
// mygtukas parodo nuotraukas // kitas mygtukas sumaiso nuotraukas
   const rodymas = document.getElementById("parodobtn");
   const maisymas = document.getElementById("sumaisobtn");
   rodymas.addEventListener('click', parodymas)
   const paveiksliukai = document.getElementsByClassName("pav");
   function parodymas(array){
        for(let i = 0; i<paveiksliukai.length; i++){
            paveiksliukai == [];
            paveiksliukai.lenght=i;
            console.log(paveiksliukai[i] +i );
            if(paveiksliukai[i].style.display="none"){
                paveiksliukai[i].style.display="grid";
            }
            else
                paveiksliukai[i].style.display="none";
        }
        console.log(paveiksliukai.lenght);
   }

   maisymas.addEventListener('click', sumaiso);
   var j,rand;
   function sumaiso(){
               paveiksliukai.lenght.reverse();
   }

//    maisymas.addEventListener('click', sumaiso);
//     var j,rand;
//     function sumaiso(){
//         for(let i = 0; i < paveiksliukai.length; i++){
//             rand=Math.floor(Math.random()*paveiksliukai.lenght);
//             rand=paveiksliukai[i];
//             paveiksliukai[i]=paveiksliukai[j];
//             paveiksliukai[j]=rand;
//             document.getElementsByClassName("pav").innerHTML = rand;
//         }
//     }

// const maisyti = document.getElementById("sumaisobtn");
// maisyti.addEventListener('click', maisymas);
// function maisymas(){
//     var x = Math.floor((Math.random()*7)+1);
// document.getElementById('img-container').innerHTML=`
//     <img src="/img/img${x}.jpeg" alt="" >
//     <img src="/img/img${x+1}.jpeg" alt="" >
// `;
// }

// const paveiksliukai = [];
// let i=1;
// const kontikas = document.getElementById("img-container");
//         function parodymas(){
//             while(i <= 8){
//                 paveiksliukai[i];
//                 kontikas.innerHTML+=`<img src="/img/img${i}.jpeg" class="pav" alt="" >`;
//                 i++;
//             }
//     }
