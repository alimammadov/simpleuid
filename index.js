const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
const charactersLength = characters.length;

const createUid = () => {
  let uid = '';
  for (let i = 0; i < 6; i++) {
    if (i % 2 === 0) {
      uid += Math.floor(Math.random() * 10); // number
    } else {
      uid += characters.charAt(Math.floor(Math.random() * charactersLength)); // letter
    }
  }
  return uid;
};

export default createUid;

// document.getElementById("orderId").innerHTML = "Order number: " + createUid;
console.log('Order number: ' + createUid(6).toUpperCase());
