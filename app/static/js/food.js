let list_length = document.querySelectorAll(".truck-box").length;
let open = new Array();

for (let i = 0; i < list_length; i++) {
  open.push(false);
}

const onClickEvent = (id) => {
  let target = document.getElementById(id);

  console.log(target.children);

  if (open[id - 1]) {
    target.children[0].children[1].className =
      "material-symbols-outlined icon-down";

    target.children[1].style.display = "none";
  } else {
    target.children[0].children[1].className =
      "material-symbols-outlined icon-up";

    target.children[1].style.display = "block";
  }

  open[id - 1] = !open[id - 1];
  console.log(open[id - 1]);
};
