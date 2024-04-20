let seemorebutton = document.querySelector(".seemorebutton");
let slidingrow = document.querySelector(".slidingrow");
let hiddencards = slidingrow.querySelectorAll(".card");

seemorebutton.addEventListener("click", () => {
  if (hiddencards[0].style.height === "0px") {
    slidingrow.style.height = "600px";
    hiddencards.forEach((card) => {
      card.style.height = "540px";
      card.style.opacity = "100%";
      seemorebutton.style.top = "1170px";
    });
    seemorebutton.value = "See Less";
  } else {
    slidingrow.style.height = "0px"; // Reset the height to its default value
    hiddencards.forEach((card) => {
      card.style.height = "0px";
      card.style.opacity = "0%";
      seemorebutton.style.top = "600px";
    });

    seemorebutton.value = "See More";
  }
});
