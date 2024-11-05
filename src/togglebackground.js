
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

document.addEventListener("DOMContentLoaded", function() {
  const darkIcon = document.querySelector(".dark-icon");

  if (darkIcon) {
    // 綁定點擊事件
    darkIcon.addEventListener("click", toggleDarkMode);
  } else {
    console.error("未找到 .dark-icon 元素");
  }

  //被點擊後要做什麼
  function toggleDarkMode(){
    const body = document.querySelector("body")
    if (body.hasAttribute("data-mode")){
      body.removeAttribute("data-mode")
    } else {
    body.setAttribute("data-mode","dark")
    }
  }
})