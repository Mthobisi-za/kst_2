const objMenu = [
    { screen: 'yellow', childrenTriagle: 'triangle_1', elementToDisplay: 'yellow-content' },
    { screen: 'green', childrenTriagle: 'triangle_2', elementToDisplay: 'green-content' },
    { screen: 'red', childrenTriagle: 'triangle_3', elementToDisplay: 'red-content' }

]

function elementClickedTab(color) {
    console.log(color);
    document.querySelectorAll('.triangle').forEach(ele => {
        ele.style.display = 'none'
    });
    document.querySelectorAll('.content-section').forEach(ele => {
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