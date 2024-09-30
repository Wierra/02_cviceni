//ÚKOL č. 1: Příjem divadla
document.body.innerHTML += "<p>" + "ÚKOL: Příjem divadla" + "</p>"

const listek = 12
const navstevnik = 174
const predstaveni = 15
const prijem = (listek * navstevnik * predstaveni)
const cenaS = 12 * 0.65
const prijemS = Math.ceil((cenaS * (0.4 * navstevnik))* 15) + Math.ceil((listek * (0.6 * navstevnik))*15)

document.body.innerHTML += "<p>" + "Příjem divadla Pěst je " + prijem + " EUR" + "</p>"

document.body.innerHTML += "<p>" + "Příjem divadla se studentskou slevou činí " + prijemS + " EUR" + "</p>"


//ÚKOL č. 2: Házení kostkou
document.body.innerHTML += "<p>" + "ÚKOL: Házení kostkou" + "</p>"

const hod = Math.floor(Math.random() * 6) + 1

document.body.innerHTML += "<p>" + "Na kostce padlo číslo " + hod + "</p>"