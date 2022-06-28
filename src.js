let today = new Date();
let point1 = new Date('06/19/2022');
let convrt = 3600 * 24 * 1000;
let odd = Math.floor((today.getTime() - point1.getTime()) / convrt);
let id0 = document.getElementById("#0")
let id1 = document.getElementById("#1")
let id2 = document.getElementById("#2")
let id3 = document.getElementById("#3")

let kaizen1 = Math.pow(1.0125, odd).toFixed(2);
let kaizen = Math.pow(1.05, odd);
let CFproblem = `Do ${(kaizen).toFixed(2)} CF problems ${(1000 * kaizen1)} rating`
let run = `Run ${(kaizen1)} Km`
id0.innerText = `You last ${odd} days, today you do: `
id1.innerText = CFproblem
id2.innerText = run
