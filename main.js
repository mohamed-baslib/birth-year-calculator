const inputAge = document.getElementById("input-age");
const btnCount = document.querySelector(".btn1");
const btnDelete = document.querySelector(".btn2");
const result1 = document.querySelector(".res1");
const result2 = document.querySelector(".res2");

btnCount.addEventListener('click', (e) => {
    if (inputAge.value.trim() == ""){
        e.preventDefault();
    }

    else if (Number.isInteger(+inputAge.value.trim()) ){
        result1.textContent = result2.textContent =  "";
        let date = new Date().getFullYear();
        let hijriYear = new Intl.DateTimeFormat('en-TN-u-ca-islamic', {year: 'numeric'}).format(new Date()).replace(/\D/g,'');
        result1.append(date - inputAge.value.trim());
        result2.append(hijriYear - inputAge.value.trim());
    }

    else {
        result1.textContent = result2.textContent =  "خطأ"
    }
});

btnDelete.addEventListener('click', () => {
    inputAge.value = "";
    result1.textContent = result2.textContent = "0";
})