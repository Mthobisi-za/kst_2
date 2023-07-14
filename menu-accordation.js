const objMenu = [
    { screen: 'yellow', childrenTriagle: 'triangle_1_forward ', elementToDisplay: 'yellow-content' },
    { screen: 'green', childrenTriagle: 'triangle_2_forward ', elementToDisplay: 'green-content' },
    { screen: 'red', childrenTriagle: 'triangle_3_forward ', elementToDisplay: 'red-content' }

]

function elementClickedTab(color) {
    console.log(color);
    document.querySelectorAll('.triangle_forward').forEach(ele => {
        ele.style.display = 'none'
    });
    document.querySelectorAll('.body_forward').forEach(ele => {
        console.log(ele)
        ele.style.display = 'none';
    });
    if (color == 'yellow') {
        document.querySelector('.' + objMenu[0].childrenTriagle).style.display = 'block';
        document.querySelector('.' + objMenu[0].elementToDisplay).style.display = 'block';
    } else if (color == 'green') {
        document.querySelector('.' + objMenu[1].childrenTriagle).style.display = 'block';
        document.querySelector('.' + objMenu[1].elementToDisplay).style.display = 'block';
    } else if (color == 'red') {
        document.querySelector('.' + objMenu[2].childrenTriagle).style.display = 'block';
        document.querySelector('.' + objMenu[2].elementToDisplay).style.display = 'block';
    }
}
