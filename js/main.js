// NAV-BAR RESPONSIVE HAMBURGER MENU
function navBar() {
  var x = document.querySelector(".nav-bar"); // have to find a way to change id on index
  if (x.className === "nav-bar") {
    x.className += " responsive";
  } else {
    x.className = "nav-bar";
  }
}

// GALLERY CAROUSEL BUTTON HIGHLIGHT
var btnContainer = document.querySelector('.myBtnContainer');
var btns = btnContainer.querySelectorAll('.list');
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

// GALLERY FILTER JS
var btnContainer = document.querySelector('.myBtnContainer');
var itemBoxNodes = document.querySelectorAll('.itemBox');
var itemBoxes = Array.from(itemBoxNodes);

function onMyBtnContainerClick(event) {
  var target = event.target;
  var filterName = target.dataset.filter; // for example urban, people etc
  var length = itemBoxes.length; // store array length to not calculate it every iteration

  for (var i = 0; i < length; i++) {
    var itemBox = itemBoxes[i]; // now we now what we have in here, its itemBox!
    var itemBoxName = itemBox.dataset.filterTarget; // look at the notation, despite that attribute is data-filter-target i use the camelCase notation, filterTarget. You omit data

    if (filterName === itemBoxName) {
      itemBox.style.display = 'block';
    } else if(filterName === 'all') {
      itemBox.style.display = 'block';
    } else {
      itemBox.style.display = 'none';
    }
  }
}

btnContainer.addEventListener('click', onMyBtnContainerClick);
