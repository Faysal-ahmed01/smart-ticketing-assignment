const seats = document.querySelectorAll('.seat span');
const coupons = document.getElementsByClassName('coupon');
const seatLists = document.getElementById('seatLists');
const couponsArray = [];

console.log(seatLists);



for(coupon of coupons){
    couponsArray.push(coupon.innerText);
}


for(seat of seats){
    seat.addEventListener('click', function(){
        this.classList.toggle('click');
    })
}

