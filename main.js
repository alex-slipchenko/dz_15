
const out = document.querySelector('.bringOut');
const MyDiv = document.querySelectorAll('.form_input');
document.querySelector('.buy').onclick = () => {
    document.querySelector('#myForm').style.display = 'flex';
}

vol.addEventListener('input', () => rangeCount.value = `${vol.value}${': Кількість продукції'}`);
function myValid(form) {
    let rezult = true;
    // ===============================================================
    function removeError(input) {
        const parent = input.parentNode;
        if (parent.classList.contains('error')) {

            parent.querySelector('.error-lable').remove();
            parent.classList.remove('error');

        }
    }
    // ===============================================================
    function createError(input, text) {
        const parent = input.parentNode;
        const errorLable = document.createElement('lable');
        errorLable.classList.add('error-lable');
        errorLable.textContent = text;

        parent.classList.add('error');
        parent.append(errorLable);
    }
    // ===============================================================

    const allInputs = form.querySelectorAll('[name]');
    const myBio = form.querySelector('input');
    // const myRange = document.querySelector('#vol');
    // const myTextArea = document.querySelector('#story');
    // console.log(myBio);
    for (const input of allInputs) {
        removeError(input);

        if (input.value === '' || /^\s+$/.test(input.value) || input.value === '0') {
            createError(input, 'Поле не заполнено');
            rezult = false;
        }
        // проверка на нечисло в ФИО=============
        if (!isNaN(myBio.value) && myBio.value) {
            removeError(myBio);
            createError(myBio, 'Введите пожалуста свои данные вы ввели число');
            rezult = false;
        }
        if (myRange.value == '0') {
            removeError(myRange);
            createError(myRange, 'Выберите пожалуйста количество');
            rezult = false;
        }
        if (myTextArea.value.length < 10 && myTextArea.value.length > 0) {
            removeError(myTextArea);
            createError(myTextArea, `Минимальная длинна от 10 символов,Вы ввели всего: ${myTextArea.value.length}`);
            rezult = false;
        }

    }

    return rezult;
}


const myFio = document.querySelector('input');
const mySelect = document.querySelector('.form_input select');
const myPost = document.querySelector('.form_input input[name="number"]');
const myRadioBut = document.querySelectorAll('.form_input input[name="myMethod"]');
const myRange = document.querySelector('#vol');
const myTextArea = document.querySelector('#story');

myForm.addEventListener('submit', function (event) {
    event.preventDefault();
    if (myValid(this) == true) {

        out.innerHTML = `Все гуд!`;
        const fio = document.createElement('p');
        fio.innerHTML = `ФИО: ${myFio.value}`;
        out.append(fio);

        const myCity = document.createElement('p');
        myCity.innerHTML = `Город: ${mySelect.value}`;
        out.append(myCity);

        const newPost = document.createElement('p');
        newPost.innerHTML = `Номер почты: ${myPost.value}`;
        out.append(newPost);

        const myRadio = document.createElement('p');
        for (const input of myRadioBut) {
            if (input.checked) {
                myRadio.innerHTML = `Какая оплата: ${input.value}`;
            }
        }
        out.append(myRadio);

        const neeRange = document.createElement('p');
        neeRange.innerHTML = `Количество: ${myRange.value}`;
        out.append(neeRange);
    }


});