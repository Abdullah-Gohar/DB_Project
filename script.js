
function toggleEco() {
    document.getElementById("dropdownEco").classList.toggle("show");
  }
  function toggleLux() {
    document.getElementById("dropdownLux").classList.toggle("show");
  }
  function toggleSuite() {
    document.getElementById("dropdownSuite").classList.toggle("show");
  }
  function togglePh() {
    document.getElementById("dropdownPh").classList.toggle("show");
  }
  function toggleroom(id){
  
    let content = document.getElementById(id).innerHTML = "<a id =id onclick='toggleBack(this.id)'> Staus : Free <br> Rating : 4.2</a>";
    
  }
  function toggleBack(id){
    
    
  }

