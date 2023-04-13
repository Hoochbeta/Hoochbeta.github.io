document.getElementById('radio0').checked = true;
setInterval(function(){
    for (let i = 0; i < 7; i++){
      if (document.getElementById('radio'+ String(i)).checked == true){
        document.getElementById('radio'+ String(i)).checked = false;
        document.getElementById('radio'+ String((i + 1) % 7)).checked = true;
        break
      }
    }
}, 5000);

document.querySelectorAll(".subnavbtn").forEach(function(btn) {
    btn.addEventListener("click", function() {
      var subnavContent = this.nextElementSibling;
      if (subnavContent.style.display === "block") {
        subnavContent.style.display = "none";
      } else {
        subnavContent.style.display = "block";
      }
    });
  });
  
  document.querySelector(".menu-btn").addEventListener("click", function() {
    var navbar = document.querySelector(".navbar");
    navbar.classList.add("active");
    this.style.visibility = "hidden";
  });
  
  document.querySelector(".close-btn").addEventListener("click", function() {
    var navbar = document.querySelector(".navbar");
    navbar.classList.remove("active");
    document.querySelector(".menu-btn").style.visibility = "visible";
  });
  
