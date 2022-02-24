let obj_para = document.getElementById("para_counter_id");
function increase_btn()
{
    let a=obj_para.textContent;
    let b=parseInt(a)+1;
    obj_para.textContent=b;
    if (b > 0) 
    {
        obj_para.style.color = "green";
    }
    else if (b < 0) 
    {
        obj_para.style.color = "red";
    }
    else 
    {
        obj_para.style.color = "black";
    }
}
function decrease_btn()
{
    let a=obj_para.textContent;
    let b=parseInt(a)-1;
    obj_para.textContent=b;
    if (b > 0) 
    {
        obj_para.style.color = "green";
    }
    else if (b < 0) 
    {
        obj_para.style.color = "red";
    }
    else 
    {
        obj_para.style.color = "black";
    }
}
function reset_btn()
{
    obj_para.textContent=0;
    obj_para.style.color = "black";
}