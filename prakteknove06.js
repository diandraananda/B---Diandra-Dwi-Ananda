function setTime() {
    const header = document.getElementById("header");
    header.textContent = new Date().toString();
}

setInterval(setTime, 1800);
console.log("Program Finish")



// function dividenumber(a, b) {
//     try {
//         if (isNaN(a) || isNaN(b)) {
//             throw new Error("input harus berupa angka");
//         }

//         if (b === 0) {
//             throw new Error("pembagian dengan nol tidak di perbolehkan");
//         }

//         return a / b;

//       }  catch (error) {
//             return error.massage;
//         }
//     }

//     function handleDivision() {
//         const num1 = parseFloat(document.getElementById("number1").value);
//         const num2 = parseFloat(document.getElementById("number2").value);

//         const result = dividenumber(num1, num2);

//         document.getElementById("result").textContent = `Hasil: $(result)`;
//     }

