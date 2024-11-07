const antrian = ["Ray", "Fiki", "Fadhilla", "Fara"]
console.log("antrian pertama : " + antrian);

//nambah orang
antrian.push("kak Nabila");
antrian.push("kak elsi", "kak Letty", "kak maza")
console.log(antrian);

//yang udah beli pertama
antrian.pop();
console.log(antrian);

//yang udah beli
antrian.shift();
antrian.shift();
console.log(antrian);

//yang nyelak
antrian.unshift("kak thomi");
console.log(antrian);