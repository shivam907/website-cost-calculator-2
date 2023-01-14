let selected = [];
const selectOneButton = (data, j) => {
  data.forEach((i) => {
    i.addEventListener("click", (el) => {
      el.preventDefault();
      data.forEach((i) => i.classList.remove("btnFocus"));
      i.classList.toggle("btnFocus");
      console.log(i.dataset.price);
      selected[j] = [i.dataset.name, i.dataset.price];
      document.querySelector(".emi-details-box-receit").innerHTML = "";
      //   console.log(i.dataset.name);
      let totalCost = 0;
      selected.forEach((i) => {
        // console.log(i);
        totalCost += Number(i[1]);
        document
          .querySelector(".emi-details-box-receit")
          .insertAdjacentHTML(
            "beforeend",
            `<div><p>${i[0]}</p>  <p>${i[1]}</p></div>`
          );
      });

      document.querySelector(
        ".emi-details-box-receit h5"
      ).textContent = `₹ ${totalCost}`;
    });
  });
};

selectOneButton(document.querySelectorAll(".type .srv-btn"), 0);
selectOneButton(document.querySelectorAll(".multi .srv-btn"), 1);
