let nam = "Aditya Tiwari";
let counter = 0;

for (let i = 0; i < nam.length; i++) {
    if(nam[i]=="a" || nam[i]=="A" || nam[i]=="e" || nam[i]=="E" || nam[i]=="i" || nam[i]=="I" || nam[i]=="o" || nam[i]=="O" || nam[i]=="u" || nam[i]=="U"){
        counter++;
    }
}

console.log(counter);