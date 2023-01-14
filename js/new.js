let selected = [];

const display = () => {
  document.querySelector(".emi-details-box-receit").innerHTML = "";
  let totalCost = 0;
  selected.forEach((i) => {
    // console.log(i);
    if (i[0] != undefined) {
      totalCost += Number(i[1]);

      document
        .querySelector(".emi-details-box-receit")
        .insertAdjacentHTML(
          "beforeend",
          `<div><p>${i[0]}</p>  <p>${i[1]}</p></div>`
        );
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
      selected[j] = [i.dataset.name, i.dataset.price];
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
extras(document.querySelectorAll(".extra .srv-btn"), 3);
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
