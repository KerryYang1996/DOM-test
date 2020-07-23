const findDiv = dom.find("#f>.red")[0];
console.log(findDiv);

dom.style(findDiv, "color", "red");
// dom.style(f2, { color: "red" });
// console.log(dom.style(f2, "color"));

const t = dom.find(".red");
dom.each(t, (n) => {
  dom.style(n, "color", "yellow");
});
