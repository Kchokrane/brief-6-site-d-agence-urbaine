
function myFunction (name){
  var x = document.getElementById("a1"),
      y = document.getElementById("a2"),
      z = document.getElementById("a3"),
      t = document.getElementById("a4");
  if(window.innerWidth > 600){
    switch (name) {
      case 0:
        x.className = "cl1 ";
        y.className = "cl1c ";
        z.className = "cl1c ";
        t.className = "cl1c ";
         break;
      case 1:
        x.className = "cl1c";
        y.className = "cl1 ";
        z.className = "cl1c ";
        t.className = "cl1c ";
         break;
      case 2:
       x.className = "cl1c ";
       y.className = "cl1c ";
       z.className = "cl1 ";
       t.className = "cl1c ";
         break;  
      case 3:
        x.className = "cl1c ";
        y.className = "cl1c ";
        z.className = "cl1c ";
        t.className = "cl1 ";
         break;    
      default:
        x.className = "col-3 cl";
        y.className = "col-3 cl";
        z.className = "col-3 cl top";
        t.className = "col-3 cl";
        break;
    }
  }else{
    x.className = "col-12 cll";
    y.className = "col-12 cll";
      z.className = "col-12 cll";
      t.className = "col-12 cll";
  }
}
