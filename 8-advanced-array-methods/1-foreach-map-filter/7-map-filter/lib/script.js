const checkboxes = document.querySelectorAll('input[type="checkbox"]');

const checked = Array.from(checkboxes).filter((checkbox) => {
  return checkbox.checked;
});

const completedItems = checked.map((checkbox) => {
  return checkbox.parentElement.innerText;
});

// console.log(checked);
// console.log(completedItems);

function extractCompletedItems(){
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  return Array.from(checkboxes)
  .filter((checkbox) => {
    return checkbox.checked;
  })
  .map((checkbox) => {
    return checkbox.parentElement.innerText;
  });
}

console.log(extractCompletedItems());

