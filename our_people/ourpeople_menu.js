
const objMenuLongOur = [
    { screen: 'one', childrenTriagle: 'triangle_one_our_people', elementToDisplay: 'yellow_body_first' },
    { screen: 'two', childrenTriagle: 'triangle_two_our_people', elementToDisplay: 'green_body_first' },
    { screen: 'three', childrenTriagle: 'triangle_three_our_people', elementToDisplay: 'red_body_first' },
    { screen: 'four', childrenTriagle: 'triangle_four_our_people', elementToDisplay: 'yellow_body_second' },
    { screen: 'five', childrenTriagle: 'triangle_five_our_people', elementToDisplay: 'green_body_second' },
    { screen: 'six', childrenTriagle: 'triangle_six_our_people', elementToDisplay: 'red_body_third' },
    { screen: 'seven', childrenTriagle: 'triangle_seven_our_people', elementToDisplay: 'yellow_body_third' }
]

function elementClickedOur(tag_name) {
    console.log(tag_name);
    document.querySelectorAll('.triangle_our_people').forEach(ele => {
        ele.style.display = 'none'
    });
    document.querySelectorAll('.body_our_people').forEach(ele => {
        console.log(ele)
        ele.style.display = 'none';
    });
    if (tag_name == 'one') {
        document.querySelector('.' + objMenuLongOur[0].childrenTriagle).style.display = 'block';
        document.querySelector('.' + objMenuLongOur[0].elementToDisplay).style.display = 'block';
    } else if (tag_name == 'two') {
        document.querySelector('.' + objMenuLongOur[1].childrenTriagle).style.display = 'block';
        document.querySelector('.' + objMenuLongOur[1].elementToDisplay).style.display = 'block';
    } else if (tag_name == 'three') {
        document.querySelector('.' + objMenuLongOur[2].childrenTriagle).style.display = 'block';
        document.querySelector('.' + objMenuLongOur[2].elementToDisplay).style.display = 'block';
    }else if(tag_name == 'four'){
        document.querySelector('.' + objMenuLongOur[3].childrenTriagle).style.display = 'block';
        document.querySelector('.' + objMenuLongOur[3].elementToDisplay).style.display = 'block';
    } else if(tag_name == 'five'){
        document.querySelector('.' + objMenuLongOur[4].childrenTriagle).style.display = 'block';
        document.querySelector('.' + objMenuLongOur[4].elementToDisplay).style.display = 'block';
    
    } else if(tag_name == 'six'){
        document.querySelector('.' + objMenuLongOur[5].childrenTriagle).style.display = 'block';
        document.querySelector('.' + objMenuLongOur[5].elementToDisplay).style.display = 'block';
    
    }else if(tag_name == 'seven'){
        document.querySelector('.' + objMenuLongOur[6].childrenTriagle).style.display = 'block';
        document.querySelector('.' + objMenuLongOur[6].elementToDisplay).style.display = 'block';
    
    }
}   