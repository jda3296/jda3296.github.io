document.getElementById("edad").addEventListener("click", function (){
    var hoy = new Date();
    var nacimiento = new Date(document.getElementById("fnac").value);
    var años = hoy.getFullYear() - nacimiento.getFullYear();
    var m = hoy.getMonth() - nacimiento.getMonth();

if ((hoy.getMonth() - nacimiento.getMonth()) < 0 || (m === 0 && hoy.getDate() < nacimiento.getDate())) {
        años--;
}
document.getElementById("años").innerHTML = años+" años";
document.getElementById("laedades").style.display = "block";
});
