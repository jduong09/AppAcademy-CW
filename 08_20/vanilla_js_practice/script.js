document.addEventListener("DOMContentLoaded", () => {
  // toggling restaurants

  const toggleLi = (e) => {
    const li = e.target;
    if (li.className === "visited") {
      li.className = "";
    } else {
      li.className = "visited";
    }
  };

  document.querySelectorAll("#restaurants li").forEach((li) => {
    li.addEventListener("click", toggleLi);
  });



  // adding SF places as list items

  // --- your code here!

  
  const addLocation = (e) => {
    e.preventDefault();

    const favInput = document.querySelector(".favorite-input");
    const favorite = favInput.value;
    favInput.value = "";

    const newLi = document.createElement("li");
    newLi.textContent = favorite;

    const list = document.getElementById("sf-places");
    list.appendChild(newLi);
  };

  const btn = document.querySelector(".favorite-submit");
  btn.addEventListener("click", addLocation);

  // adding new photos

  // --- your code here!

  const showButton = e => {
    e.preventDefault();
    const div = document.querySelector(".photo-form-container");
    if (div.classList.contains("hidden")) {
      div.classList.remove("hidden");
    } else {
      div.classList.add("hidden");
    }
  };

  const addImage = e => {
    e.preventDefault();

    const input = document.querySelector(".photo-url-input");
    const url = input.value;
    input.value = "";

    const newLi = document.createElement("li");
    const newImg = document.createElement("img");
    newImg.setAttribute("src", url);
    newLi.appendChild(newImg);

    const list = document.querySelector(".dog-photos");
    list.appendChild(newLi);
  };

  const toggleBtn = document.querySelector(".photo-show-button");
  toggleBtn.addEventListener("click", showButton);

  const photoSubmit = document.querySelector(".photo-url-submit");
  photoSubmit.addEventListener("click", addImage);



});
