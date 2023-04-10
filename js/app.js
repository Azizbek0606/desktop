function plus(){
    let e = document.querySelector("#myInput").value;
    let one =  document.querySelector("#one0");
    let two =  document.querySelector("#two");
    let three = document.querySelector("#three");
    let four = document.querySelector("#four");
    let five = document.querySelector("#five");
    let six = document.querySelector("#six");
    let exampleNum = "123456789";
      if (exampleNum.includes(e[0]) && e.length <= 7) {
            let first = document.createElement("p");
            first.textContent = e;
            one.append(first);
        }else if(exampleNum.includes(e[0]) && e.length > 7){
            let sixth = document.createElement("p");
            sixth.textContent = e;
            six.append(sixth);
        }else if(typeof e == "string" && e !== "true" && e !== "false" && e !== "null" && e !== "underfined"){
            let second = document.createElement("p");
            second.textContent = e;
            two.append(second)
        }else if(typeof e == "string" && e == "true" || e == "false"){
            let third = document.createElement("p");
            third.textContent = e;
            three.append(third)
        }else if(typeof e == "string" && e == "null"){
            let fourth = document.createElement("p");
            fourth.textContent = e;
            four.append(fourth)
        }else if(typeof e == "string" && e == "underfined"){
            let fiveth = document.createElement("p");
            fiveth.textContent = e;
            five.append(fiveth)
        }
}

window.addEventListener("keydown" , (elem)=>{
    if (elem.key == "Enter") {
        plus()
    }
})