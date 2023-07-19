const addIncomeBtn = document.querySelector(".ingreso-presupuesto__btn");
const presupuesto = document.querySelector(".presupuesto");
const addExpense = document.querySelector(".gasto");
const addExpenseName = document.querySelector(".nombreGasto");
const addExpenseBtn =document.querySelector(".ingreso-gasto__btn");
var incomeData = [];
var incomeTable = document.querySelector(".table-datos");


addIncomeBtn.addEventListener('click', () => { 
    incomeData.push(presupuesto.value)
    console.log(incomeData);

    // incomeTable.append(presupuesto.value)

        let tr = document.createElement('tr');
    
        let td1 = document.createElement('td');
        td1.textContent = presupuesto.value;
        tr.appendChild(td1);
        incomeTable.appendChild(tr);
});

addExpenseBtn.addEventListener('click', () =>{
console.log(addExpense.value,addExpenseName.value);}
);



