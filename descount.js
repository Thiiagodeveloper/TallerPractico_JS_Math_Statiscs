const btnDiscount = document.querySelector("#btn");
const result = document.querySelector("#total");
const inputPrice = document.querySelector("#price");
const inputCoupon = document.querySelector("#coupon");

btnDiscount.addEventListener("click", calcularCupones);

couponList.push({
    name: 'pikachu',
    discount: 10,
});
couponList.push({
    name: 'charizad',
    discount: 50,
});
couponList.push({
    name: 'empolion',
    discount: 70,
});

// const couponsObj = {
//     'pikachu': 10,
//     'charizad': 30,
//     'empolion': 50,
//     'chikorita': 70

// }
// console.log(Coupons[0]);

function calcularCupones(){
    const price = Number(inputPrice.value)
    const coupon = inputCoupon.value;

    if (!price || !coupon) {
        result.innerText = "Por favor llena el formulario";
        return;
    }
    
    let discount;

    function search(couponElement){ //{name, discount}
       return couponElement.name == coupon;
    }

    // const couponInArray = couponList.filter(search) [{}]
    const couponInArray = couponList.find(search) // {}

    if (couponInArray){
        discount = couponInArray.discount;
    }else{
        result.innerText = "El cupon no es valido";
    //   return;
    }


    // if(couponsObj[coupon]){
    //     discount = couponsObj[coupon]
    // }else{
    //     result.innerText = "El cupon no es valido";
    //   return;
    // }
    
    const total = (price * (100 - discount)) / 100;
    document.getElementById("total").innerHTML = total;

}


function calcularPrecioConCoupon() {
  const price = Number(inputPrice.value);
  const coupon = inputDiscount.value;

  if (!price || !coupon) {
    result.innerText = "Por favor llena el formulario";
    return;
  }
  

  let discount;

  switch (coupon) {
    case "Pikachu":
      discount = 20;
      break;
    case "Pinguin":
      discount = 50;
      break;
    case "Chikorita":
      discount = 70;
      break;

    default:
      result.innerText = "El cupon no es valido";
      return;
      break;
  }

  const total = (price * (100 - discount)) / 100;
  document.getElementById("total").innerHTML = total;
}

function calcularPrecioConDescuento() {
  //variables
  const price = Number(inputPrice.value);
  const discount = Number(inputDiscount.value);
  const total = (price * (100 - discount)) / 100;

  if (!price || !discount) {
    result.innerText = "Por favor llena el formulario";
    return;
  }

  if (discount > 100) {
    result.innerText = "El descuento no puede ser mayor a 100";
    return;
  }

  //Agreamos el total al tag que tiene clase total en html
  document.getElementById("total").innerHTML = total;
}