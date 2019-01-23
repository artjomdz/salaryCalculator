let total = document.querySelectorAll('input');
console.log(total[0]);
let h4total = document.querySelector('h4 span');
let comments = document.querySelector('.comments');
let holidays = document.createElement('p');
comments.appendChild(holidays)

const calculateSalary = () => {
   let days = total[0].value;
   let hours = total[1].value;
   let pay = total[2].value;
   let totalPay = days * hours * pay;
   h4total.textContent = " " + totalPay + " euro";
   if(days >= 30 && days <= 59){
    holidays.style.color = "red";
    holidays.textContent = `You have 1 holiday as you worked ${days}`
   } else if (days >= 60){
    holidays.style.color = "green";
    holidays.textContent = `You have 2 holiday as you worked ${days}`
   } else { holidays.textContent = `You don't have any holidays`}
   
}

total[3].addEventListener('click', calculateSalary);
