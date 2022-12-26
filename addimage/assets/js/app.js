let inpFile=document.querySelector("input");
let area = document.querySelector(".area");

area.addEventListener("click",function () {
    this.children[1].click();
})

inpFile.addEventListener("change",function () {
    [...this.files].forEach(file => {
        let reader= new FileReader();
        let tr=document.createElement("tr"),
        tdImg=document.createElement("td"),
        tdSize=document.createElement("td"),
        tdName=document.createElement("td"),
        tdType=document.createElement("td");
         reader.onload=function(){
            tdImg.innerHTML=`<img width="50" src="${this.result}" alt="">`;
            tdName.innerText=file.name;
            tdSize.innerText=(file.size/1024).toFixed(2) + "kb";
            tdType.innerText=file.type;
         }
         tr.append(tdImg,tdName,tdSize,tdType)
         reader.readAsDataURL(file);
         table.appendChild(tr);
    });
})