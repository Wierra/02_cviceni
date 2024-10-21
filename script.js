//ÚKOL č. 1: Příjem divadla
document.body.innerHTML += "<p>" + "ÚKOL: Příjem divadla" + "</p>"

const listek = 12
const navstevnik = 174
const predstaveni = 15
const prijem = (listek * navstevnik * predstaveni)
const cenaS = listek * 0.65
const prijemS = Math.ceil((cenaS * (0.4 * navstevnik))* 15) + Math.ceil((listek * (0.6 * navstevnik))*15)

document.body.innerHTML += "<p>" + "Příjem divadla Pěst je " + prijem + " EUR" + "</p>"
document.body.innerHTML += "<p>" + "Příjem divadla se studentskou slevou činí " + prijemS + " EUR" + "</p>"


document.body.innerHTML += "<br>"
//řešení Michal
//const plnaCena = 12
//const pocetNavstevnikuNaPredstaveni = 174
//const pocetPredstaveniZaMesic = 15
//const prijem1 = plnaCena * pocetNavstevnikuNaPredstaveni * pocetPredstaveniZaMesic
//document.body.innerHTML += '<p>Příjem divadla: ' + prijem1 + ' Kč</p>'

//const studentskaCena = 0.65 * plnaCena
//const studenti = 0.4
//const prijmySeStudenty = (plnaCena * (1 - studenti) + studentskaCena * studenti) * pocetNavstevnikuNaPredstaveni * pocetPredstaveniZaMesic
//document.body.innerHTML += '<p>Příjem divadla se slevou pro studenty: ' + prijmySeStudenty + ' Kč</p>'

//-----------------

document.body.innerHTML += "<br>"
//ÚKOL č. 2: Házení kostkou
document.body.innerHTML += "<p>" + "ÚKOL: Házení kostkou" + "</p>"
const hod = Math.floor(Math.random() * 6) + 1
document.body.innerHTML += "<p>" + "Na kostce padlo číslo " + hod + "</p>"

document.body.innerHTML += "<br>"

//řešení Michal
//const cisloNaKostce = 1 + Math.floor(Math.random() * 6)