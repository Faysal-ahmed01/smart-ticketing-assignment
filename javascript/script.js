const seats = document.querySelectorAll('.seat span');
const seatLists = document.getElementById('seatLists');

const couponInput = document.getElementById('couponInput');
const couponBtn = document.getElementById('coupon-btn');
const couponDiv = document.getElementById('coupon-div');

const nameIn = document.getElementById('name').value;
const email = document.getElementById('email');

const successPage = document.getElementById('success-page');



const coupons = document.getElementsByClassName('coupon');
const couponsArray = [];
for (coupon of coupons) {
    couponsArray.push(coupon.innerText.toLowerCase());
}



const submitBtn = document.getElementById('submit-btn');

submitBtn.addEventListener('click', function (event) {
    const phone = document.getElementById('phone');
    if (phone.value == '' || count < 1) {
        event.preventDefault();
    }
    else {

        successPage.classList.remove('hidden');
    }
});









let seatNumber = parseInt(document.getElementById('seat-number').innerText);

const ticketPrice = parseInt(document.getElementById('ticket-price').innerText);

let count = 0;
let total = 0;
let Gtotal = 0;
let offer = 0;




//-----------seat click event----------------//
for (seat of seats) {
    seat.addEventListener('click', function () {



        if (this.classList.contains('click')) {
            this.classList.remove('click');
            removeChildById(this.innerText);
            count--;
            seatNumber++;
        } else {
            if (count < 4) {
                this.classList.add('click');
                seatLists.appendChild(addChild(this.innerText));
                count++;
                seatNumber--;
            }
        }
        total = count * ticketPrice;
        setInnerTextById('count', count);
        setInnerTextById('seat-number', seatNumber);
        setInnerTextById('total', total);
        coupunImpliment();

    })
}


// -----------coupon impliment----------------//
function coupunImpliment() {
    Gtotal = total;
    couponInput.addEventListener('keyup', function () {
        if (couponsArray.includes(couponInput.value.toLowerCase())) {
            couponBtn.disabled = false;
            couponBtn.addEventListener('click', function () {
                if (couponInput.value.toLowerCase() == 'new15') {
                    offer = 0.15;
                }
                else if (couponInput.value.toLowerCase() == 'couple 20') {
                    offer = 0.20;
                }
                else {
                    offer = 0;
                }
                console.log(offer);
                Gtotal = total - (total * offer);
                setInnerTextById('Gtotal', Gtotal);
                couponDiv.style.display = 'none';
            })

        } else {
            Gtotal = total;
        }
    });
    Gtotal = total - (total * offer);
    setInnerTextById('Gtotal', Gtotal);

}


function addChild(seatName) {
    let li = document.createElement('li');
    li.classList.add('flex', 'justify-between', 'items-center', 'w-full');
    li.innerHTML = `<p>${seatName}</p><p>Economy</p><p>${ticketPrice}</p>`;
    li.id = seatName;
    return li;
}


function removeChildById(seatName) {
    let li = document.getElementById(seatName);
    li.remove();
}


function setInnerTextById(id, text) {
    let li = document.getElementById(id);
    li.innerText = text;
}