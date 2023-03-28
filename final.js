const imageres= document.querySelectorAll(".nevergiveup")[0];
const imageres1= document.querySelectorAll(".nevergiveup")[1];
const imageres2= document.querySelectorAll(".nevergiveup")[2];

function sizeres()
{
    let innerwidth=window.innerWidth;
    imageres.setAttribute("width",innerwidth);
    imageres1.setAttribute("width",innerwidth);
    imageres2.setAttribute("width",innerwidth);

}
sizeres();
window.onresize=sizeres;