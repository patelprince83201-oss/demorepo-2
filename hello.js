
function factoeial() {
    let facto = 1;
    let num = 3
    for(let i=1; i<=num; i++){
        facto = facto * i;
    }
// console.log(`factorial of ${num} is : ${facto}`);
document.querySelector("body").innerText=`factorial of ${num} is : ${facto}`
}



