let selected = [];
var a = [
  "",
  "one ",
  "two ",
  "three ",
  "four ",
  "five ",
  "six ",
  "seven ",
  "eight ",
  "nine ",
  "ten ",
  "eleven ",
  "twelve ",
  "thirteen ",
  "fourteen ",
  "fifteen ",
  "sixteen ",
  "seventeen ",
  "eighteen ",
  "nineteen ",
];
var b = [
  "",
  "",
  "twenty",
  "thirty",
  "forty",
  "fifty",
  "sixty",
  "seventy",
  "eighty",
  "ninety",
];

function inWords(num) {
  if ((num = num.toString()).length > 9) return "overflow";
  n = ("000000000" + num)
    .substr(-9)
    .match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
  if (!n) return;
  var str = "";
  str +=
    n[1] != 0
      ? (a[Number(n[1])] || b[n[1][0]] + " " + a[n[1][1]]) + "crore "
      : "";
  str +=
    n[2] != 0
      ? (a[Number(n[2])] || b[n[2][0]] + " " + a[n[2][1]]) + "lakh "
      : "";
  str +=
    n[3] != 0
      ? (a[Number(n[3])] || b[n[3][0]] + " " + a[n[3][1]]) + "thousand "
      : "";
  str +=
    n[4] != 0
      ? (a[Number(n[4])] || b[n[4][0]] + " " + a[n[4][1]]) + "hundred "
      : "";
  str +=
    n[5] != 0
      ? (str != "" ? "and " : "") +
        (a[Number(n[5])] || b[n[5][0]] + " " + a[n[5][1]]) +
        "only "
      : "";
  return str;
}

const display = () => {
  document.querySelector(".emi-details-box-receit").innerHTML = "";
  document.querySelector(".freeItems").innerHTML = "";
  let totalCost = 0;
  let freeCost = 0;
  let actualCost = 0;
  selected.forEach((i) => {
    // console.log(i);
    if (i[0] != undefined) {
      totalCost += Number(i[1]);
      freeCost += Number(i[4]);
      actualCost += Number(i[2]);
      document
        .querySelector(".emi-details-box-receit")
        .insertAdjacentHTML(
          "beforeend",
          `<div><p>${i[0]}</p>  <p>${i[1]}</p></div>`
        );
      document.querySelector(".freeItems").insertAdjacentHTML(
        "beforeend",
        `
      <p>${i[3]} worth ₹${i[4]}</p>
      `
      );
      document.querySelector(".inWords").textContent = inWords(totalCost);
      document.querySelector(".discount").textContent = (25 * totalCost) / 100;
      document.querySelectorAll(".freePrice").forEach((i) => {
        i.textContent = freeCost;
      });
      document.querySelector(".savings").textContent = actualCost - totalCost;
    }
  });

  document.querySelector(
    ".emi-details-box-receit h5"
  ).textContent = `₹ ${totalCost}`;
};
const selectOneButton = (data, j) => {
  data.forEach((i) => {
    i.addEventListener("click", (el) => {
      el.preventDefault();
      data.forEach((i) => i.classList.remove("btnFocus"));
      i.classList.toggle("btnFocus");
      console.log(i.dataset.price);
      selected[j] = [
        i.dataset.name,
        i.dataset.price,
        i.dataset.marketPrice,
        i.dataset.freeItemTite,
        i.dataset.freeItemPrice,
      ];
      //   console.log(i.dataset.name);
      display();
    });
  });
};
let select = [];
const extras = (data, j) => {
  //   data.forEach((i) => {
  // let a = 0;
  data.addEventListener("click", (el) => {
    el.preventDefault();
    data.classList.toggle("btnFocus");
    if (selected[j] == "" || selected[j] == undefined) {
      selected[j] = [data.dataset.name, data.dataset.price];
    } else {
      selected[j] = "";
    }
    display();
    console.log(select);
    // a += 1;
  });
  //   });
};

extras(document.querySelector(".extra1"), 3);
extras(document.querySelector(".extra2"), 4);
extras(document.querySelector(".extra3"), 5);
extras(document.querySelector(".extra4"), 6);
// let select = [];

selectOneButton(document.querySelectorAll(".type .srv-btn"), 0);
selectOneButton(document.querySelectorAll(".multi .srv-btn"), 1);
selectOneButton(document.querySelectorAll(".multi2 .srv-btn"), 2);
// extras(document.querySelectorAll(".extra .srv-btn"), 3);
// const extras = (data, j) => {
//   let a = 0;
//   data.forEach((i) => {
//     i.addEventListener("click", (el) => {
//       el.preventDefault();
//       i.classList.toggle("btnFocus");
//       select[a] = [i.dataset.name, i.dataset.price];
//       a += 1;
//       document.querySelector(".emi-details-box-receit").innerHTML = "";
//       let totalCost = 0;
//       selected.forEach((i) => {
//         totalCost += Number(i[1]);
//         document
//           .querySelector(".emi-details-box-receit")
//           .insertAdjacentHTML(
//             "beforeend",
//             `<div><p>${i[0]}</p>  <p>${i[1]}</p></div>`
//           );
//       });
//       select.forEach((i) => {
//         totalCost += Number(i[1]);
//         document
//           .querySelector(".emi-details-box-receit")
//           .insertAdjacentHTML(
//             "beforeend",
//             `<div><p>${i[0]}</p>  <p>${i[1]}</p></div>`
//           );
//       });
//       //   a = 0;
//       select[a] = "";

//       document.querySelector(
//         ".emi-details-box-receit h5"
//       ).textContent = `₹ ${totalCost}`;
//     });
//   });
// };
