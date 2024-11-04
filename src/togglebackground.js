
function togglebackground(event){
  const checkarea = event.target
  const tbody = checkarea.closest("tbody")

  if (checkarea.checked) {
    tbody.style.backgroundColor = '#FFA500'
    console.log(tbody.style.backgroundColor)
  } else {
    tbody.style.backgroundColor = ''
  }
}

document.addEventListener('DOMContentLoaded',() => {
const checkboxs = document.querySelectorAll('.checkmark');
  checkboxs.forEach((checkbox) => 
    (checkbox.addEventListener('click', togglebackground))
    )
})
