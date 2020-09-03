const toggleSwitch = document.querySelector('input[type="checkbox"]');

if(localStorage.getItem('darkModeEnabled')){
  document.body.className = 'dark';
  toggleSwitch.checked = true;
} 

toggleSwitch.addEventListener('click', (e) => {
  // const checked = toggleSwitch.checked;
  const {checked} = toggleSwitch;
  checked ? localStorage.setItem('darkModeEnabled', true) : localStorage.removeItem('darkModeEnabled');
  document.body.className = checked ? 'dark' : '';
  // if the toggleSwitch is checked set classname to dark otherwise nothing
  //toggleSwitch.checked ? document.body.className = 'dark' : document.body.className = '';

});