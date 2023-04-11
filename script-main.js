let contactsBtn = document.querySelector('.contacts-link');
let paymentsBtn = document.querySelector('.payments-link');
let deliveryBtn = document.querySelector('.delivery-link');
let refundBtn = document.querySelector('.refund-link');
let closeBtn = document.querySelector('.close');
let modalTitle = document.querySelector('.modal__title');
let modalText = document.querySelector('.modal__text');

let modal = document.querySelector('.modal');


    contacts = {
        title: 'Контактная информация',
        text: 'Тут будут контакты'
    },
    payment = {
        title: 'Способы оплаты',
        text: 'Тут будут cпособы оплаты'
    },
    delivery = {
        title: 'Условия доставки',
        text: 'Тут будут условия доставки'
    },
    refund = {
        title: 'Возврат товара',
        text: 'Тут будут условия возврата'  
    }


document.addEventListener('click', (e) => {
    if(e.target == contactsBtn) {
        modal.classList.toggle('invisible');
        modalTitle.textContent = contacts.title;
        modalText.textContent = contacts.text;
    } else if(e.target == paymentsBtn) {
        modal.classList.toggle('invisible');
        modalTitle.textContent = payment.title;
        modalText.textContent = payment.text;
    } else if(e.target == deliveryBtn) {
        modal.classList.toggle('invisible');
        modalTitle.textContent = delivery.title;
        modalText.textContent = delivery.text;
    } else if(e.target == refundBtn) {
        modal.classList.toggle('invisible');
        modalTitle.textContent = refund.title;
        modalText.textContent = refund.text;
    } else if(e.target == closeBtn || e.target.classList.contains('modal')) {
        modal.classList.toggle('invisible');
    }
})
