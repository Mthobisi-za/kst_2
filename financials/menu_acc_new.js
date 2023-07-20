const objMenuFinance = [
    { screen: 'green', childrenTriagle: 'triangle_1_financials', elementToDisplay: 'financials_green' },
    { screen: 'red', childrenTriagle: 'triangle_2_financials', elementToDisplay: 'financials_red' },
    { screen: 'yellow', childrenTriagle: 'triangle_3_financials', elementToDisplay: 'financials_yellow' }

]

function elementClickedFinance(color) {
    console.log(color);
    document.querySelectorAll('.triangle_financials').forEach(ele => {
        ele.style.display = 'none'
    });
    document.querySelectorAll('.body_financials').forEach(ele => {
        console.log(ele)
        ele.style.display = 'none';
    });
    if (color == 'green') {
        document.querySelector('.' + objMenuFinance[0].childrenTriagle).style.display = 'block';
        document.querySelector('.' + objMenuFinance[0].elementToDisplay).style.display = 'block';
    } else if (color == 'red') {
        document.querySelector('.' + objMenuFinance[1].childrenTriagle).style.display = 'block';
        document.querySelector('.' + objMenuFinance[1].elementToDisplay).style.display = 'block';
    } else if (color == 'yellow') {
        document.querySelector('.' + objMenuFinance[2].childrenTriagle).style.display = 'block';
        document.querySelector('.' + objMenuFinance[2].elementToDisplay).style.display = 'block';
    }
}