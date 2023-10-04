function DeleteClick() {
  flag = confirm ("Delete\nRecord will be deleted");
 if(flag==true){
    document.querySelector("p").outerHTML ="<h2>Delete Confirmed </h2>";
 } else {
    alert("You cancelled...");
 }

}