// 1. У нас есть массив ["Banana", "Cola", "Cat"] вывести их на страницу в виде карточек.

let first = ["Banana", "Cola", "Cat"];
let example5 = document.createElement("card");
document.body.append(example5);
for (let i = 0; i < first.length; i++) {
  let cardText = document.createElement("card-text")
  cardText.textContent = first [i];
  cardText.style.padding = "50px"
  cardText.style.border = "3px solid gray"
  cardText.style.margin = "20px 30px"
  cardText.style.boxShadow = "0 0 5px black"
  example5.append(cardText);
  
}



// 2. У нас есть массив ["hand", "leg", "head", "finger", "eye"] вывести элементы массива в виде списка.

let second = ["hand", "leg", "head", "finger", "eye"];
let example2 = document.createElement("ul");
example2.style.marginTop = "80px";
document.body.append(example2);
for (let i =0; i < second.length; i++) {
    let listEl = document.createElement("li");
    listEl.textContent = second[i];
    listEl.style.paddingTop =" 20px";
    listEl.style.listStyleType = "none";
    listEl.style.backgroundColor = "yellow";
    listEl.style.border = "3px solid gray";
    listEl.style.borderCollapse = "collapse";
    listEl.style.display = "block";
    example2.append(listEl);

}

// const box = document.createElement("div");
// box.id = "box";
// document.body.appendChild(box);

// const button = document.createElement("button");
// button.innerText = "Button";
// button.id = "button-1";
// box.appendChild(button);

// 3. У нас есть массив ["hi", "hello", "bonjour"] вывести элементы массива в виде кнопок.

let button = ["hi", "hello", "bonjour"];
let example0 = document.createElement("row");
example0.className = "button3";
document.body.append(example0);
for( let i =0; i< button.length; i ++) {
  let example1 = document.createElement("button")
  example1.textContent = button[i];
  example1.style.border = "2px solid black";
  example1.style.margin = "10px";
  example0.append(example1);
}
// У нас есть массив [["1", "2", "3", "4", "5", "6"], ["7", "8", "9", "10", "11", "12"], ["13", "14", "15", "16", "17", "18"], ["19", "20", "21", "22", "23", "24"], ["25", "26", "27", "28", "29", "30"]] вывести этот массив в виде таблицы.

let tab = [["1", "2", "3", "4", "5", "6"], ["7", "8", "9", "10", "11", "12"], ["13", "14", "15", "16", "17", "18"], ["19", "20", "21", "22", "23", "24"], ["25", "26", "27", "28", "29", "30"]];
let example3 = document.createElement("table");
example3.className = "table1";
document.body.append(example3);
for( let i =0; i < tab.length; i ++) {
  let tr = document.createElement("tr");
  tr.textContent = tab[i];
  for( j = 0; j < tab[i].length; j ++) {
    let td = document.createElement("td");
    td.textContent = tr[i];

  }
  example3.appendChild(tr);
}


// BoomBam! - 2 У нас есть массив [["Table", "2", "3", "4", "5"], ["2", "4", "6", "8", "10"], ["3", "6", "9", "12", "15"], ["4", "8", "12", "16", "20"], ["5", "10", "15", "20", "25"]] вывести этот массив в виде таблицы.
let tab2 = [["Table", "2", "3", "4", "5"], ["2", "4", "6", "8", "10"], ["3", "6", "9", "12", "15"], ["4", "8", "12", "16", "20"], ["5", "10", "15", "20", "25"]];
let example = document.createElement("table");
example.className = "table2";
document.body.append(example);
for( let i =0; i < tab2.length; i ++) {
  let elem = tab2[i]
  let tr = document.createElement("tr");
  for( j = 0; j < elem.length; j++) {
    let td = document.createElement("td");
    td.textContent = elem[j];
    td.style.border = "2px  solid black";
    tr.append(td)
  }
  example.appendChild(tr);
}