const btn = document.querySelector('button.arrow')
const arrow = document.querySelector('.fas.fa-arrow-down')
const img = document.querySelector('div.item1')
function hiding()
{
    img.classList.toggle('hide')
    if(img.classList.contains('hide'))
    {
        arrow.style.transform = "rotate(180deg)"
    }
    else
    {
        arrow.style.transform = "rotate(0deg)"
    }
}
btn.addEventListener('click', hiding)