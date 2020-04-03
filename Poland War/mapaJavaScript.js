function wypisywanieDanychF(idWojPodbijajacego, idWojPodbitego)
{
    let idWojKonPodbijajacego = nazwyT[idWojPodbijajacego].idWojKontrolujacego[1];
    let nazwaWojPodbijajacego = nazwyT[idWojKonPodbijajacego].nazwaMowiona;
    let nazwaWojPodbitego = nazwyT[idWojPodbitego].nazwaMowiona;
    let nazwaWojPodbitegoPoprzedniego = nazwyT[nazwyT[idWojPodbitego].idWojKontrolujacego[0]].nazwaMowiona;
    let caleZdanie;
    
    if(idWojPodbitego == nazwyT[idWojPodbitego].idWojKontrolujacego[0])
        caleZdanie = "Województwo " + nazwaWojPodbijajacego + " podbiło województwo " + nazwaWojPodbitego;
    else
        caleZdanie = "Województwo " + nazwaWojPodbijajacego + " podbiło teren województwa " + nazwaWojPodbitego + "go" + " poprzednio należącego do województwa " + nazwaWojPodbitegoPoprzedniego + "go";
        
    document.getElementById("info").innerHTML = caleZdanie;
    
    historia.push(lp + ". " + caleZdanie);
    document.getElementById("historia").innerHTML = historia.join("<br/>");
    
    lp++;
}

function ileRuchowF()
{
    ileRuchow++;
    document.getElementById("info2").innerHTML = "Ruchów: " + ileRuchow;
}

function zamianaDanychF(IDWojPodbijajacego, IDWojPodbitego)
{
    nazwyT[IDWojPodbitego].idWojKontrolujacego[0] = nazwyT[IDWojPodbitego].idWojKontrolujacego[1];
    nazwyT[IDWojPodbitego].idWojKontrolujacego[1] = nazwyT[IDWojPodbijajacego].idWojKontrolujacego[1];
    nazwyT[IDWojPodbitego].kolorWoj = nazwyT[IDWojPodbijajacego].kolorWoj;
}

function losowaLiczbaKlasaF(ileLiczb)
{
    return Math.floor(Math.random() * ileLiczb); 
}

function klasaWojPodbitegoF(lidwp)
{
    var tabela = [];
    
    for(var i=1; i<=16; i++)
    {
        if(nazwyT[i].idWojKontrolujacego[1] == nazwyT[lidwp].idWojKontrolujacego[1])
        {
            tabela = tabela.concat(nazwyT[i].wojSasiadujaceID);
        }
    }
    
    var o=0;
    
    while(o<tabela.length)
    {
        if(nazwyT[tabela[o]].idWojKontrolujacego[1] == nazwyT[lidwp].idWojKontrolujacego[1])
        {
            tabela.splice(o, 1);
            continue;
        }
        o++;
    }
    
    var ll = losowaLiczbaKlasaF(tabela.length);
    return tabela[ll];
}

function losoweIdPodbijajacegoF()
{
    return Math.ceil(Math.random() * 16);
}

function klik()
{
    var idWojPodbijajacego = losoweIdPodbijajacegoF();
    var idWojPodbitego = klasaWojPodbitegoF(idWojPodbijajacego);
    var zamianaDanych = zamianaDanychF(idWojPodbijajacego, idWojPodbitego);
    
    wypisywanieDanychF(idWojPodbijajacego,idWojPodbitego);
    ileRuchowF();
    
    document.getElementsByClassName(nazwyT[idWojPodbitego].klasaWoj)[0].style.filter = nazwyT[idWojPodbijajacego].kolorWoj;
}

function woj(id, idWojKontrolujacego, wojSasiadujaceID, klasaWoj, nazwaMowiona, kolorWoj)
{
    this.id = id;
    this.idWojKontrolujacego = idWojKontrolujacego;
    this.wojSasiadujaceID = wojSasiadujaceID;
    this.klasaWoj = klasaWoj;
    this.kolorWoj = kolorWoj;
    this.nazwaMowiona = nazwaMowiona;
}

let woj0 = new woj(0,[0,0],[0],"0","0","0","0");
let woj1 = new woj(1,[1,1],[2,5,6],"wZachodnio-pomorskie","Zachodniopomorskie","hue-rotate(0deg)");
let woj2 = new woj(2,[2,2],[1,3,6,7],"wPomorskie","Pomorskie","hue-rotate(50deg)");
let woj3 = new woj(3,[3,3],[2,4,7,8],"wWarminsko-mazurskie","Warmińsko-mazurskie","hue-rotate(90deg)");
let woj4 = new woj(4,[4,4],[3,8,11],"wPodlaskie","Podlaskie","hue-rotate(200deg)");
let woj5 = new woj(5,[5,5],[1,6,9],"wLubuskie","Lubuskie","hue-rotate(160deg)");
let woj6 = new woj(6,[6,6],[1,2,5,7,9,10,12],"wWielkopolskie","Wielkopolskie","hue-rotate(250deg)");
let woj7 = new woj(7,[7,7],[2,3,6,8,10],"wKujawsko-pomorskie","Kujawsko-pomorskie","hue-rotate(300deg)");
let woj8 = new woj(8,[8,8],[3,4,7,10,11,14],"wMazowieckie","Mazowieckie","hue-rotate(25deg");
let woj9 = new woj(9,[9,9],[5,6,12],"wDolnoslaskie","Dolnośląskie","opacity(.7) drop-shadow(0 0 0 blue)");
let woj10 = new woj(10,[10,10],[6,7,8,12,13,14],"wLodzkie","Łódzkie","opacity(.1) drop-shadow(0 0 0 blue)");
let woj11 = new woj(11,[11,11],[4,8,14,16],"wLubeleskie","Lubelskie","opacity(.4) drop-shadow(0 0 0 black) hue-rotate(160deg)");
let woj12 = new woj(12,[12,12],[6,9,10,13],"wOpolskie","Opolskie","opacity(.5) drop-shadow(0 0 0 blue)");
let woj13 = new woj(13,[13,13],[10,12,14,15],"wSlaskie","Śląskie","hue-rotate(120deg)");
let woj14 = new woj(14,[14,14],[8,10,11,13,15,16],"wSwietokrzyskie","Świętokrzyskie","opacity(.3) drop-shadow(0 0 0 black) hue-rotate(250deg)");
let woj15 = new woj(15,[15,15],[13,14,16],"wMalopolskie","Małopolskie","opacity(.9) drop-shadow(0 0 0 black)");
let woj16 = new woj(16,[16,16],[11,14,15],"wPodkarpackie","Podkarpackie","opacity(.3) drop-shadow(0 0 0 black) hue-rotate(50deg)");

let nazwyT = [woj0, woj1, woj2, woj3, woj4, woj5, woj6, woj7, woj8, woj9, woj10, woj11, woj12, woj13, woj14, woj15, woj16];

let ileRuchow = 0;
let historia = [];
let lp = 1;