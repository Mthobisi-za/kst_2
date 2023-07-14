
const objMenuLong = [
    { screen: 'one', childrenTriagle: 'triangle_one', elementToDisplay: 'yellow_first' },
    { screen: 'two', childrenTriagle: 'triangle_two', elementToDisplay: 'green_first' },
    { screen: 'three', childrenTriagle: 'triangle_three', elementToDisplay: 'red_first' },
    { screen: 'four', childrenTriagle: 'triangle_four', elementToDisplay: 'yellow_second' },
    { screen: 'five', childrenTriagle: 'triangle_five', elementToDisplay: 'green_second' },
    { screen: 'six', childrenTriagle: 'triangle_six', elementToDisplay: 'red_second' },
    { screen: 'seven', childrenTriagle: 'triangle_seven', elementToDisplay: 'yellow_third' }
]

function elementClickedTabLong(tag_name) {
    console.log(tag_name);
    document.querySelectorAll('.triangle_overview').forEach(ele => {
        ele.style.display = 'none'
    });
    document.querySelectorAll('.body_overview').forEach(ele => {
        console.log(ele)
        ele.style.display = 'none';
    });
    if (tag_name == 'one') {
        document.querySelector('.' + objMenuLong[0].childrenTriagle).style.display = 'block';
        document.querySelector('.' + objMenuLong[0].elementToDisplay).style.display = 'block';
    } else if (tag_name == 'two') {
        document.querySelector('.' + objMenuLong[1].childrenTriagle).style.display = 'block';
        document.querySelector('.' + objMenuLong[1].elementToDisplay).style.display = 'block';
    } else if (tag_name == 'three') {
        document.querySelector('.' + objMenuLong[2].childrenTriagle).style.display = 'block';
        document.querySelector('.' + objMenuLong[2].elementToDisplay).style.display = 'block';
    }else if(tag_name == 'four'){
        document.querySelector('.' + objMenuLong[3].childrenTriagle).style.display = 'block';
        document.querySelector('.' + objMenuLong[3].elementToDisplay).style.display = 'block';
    } else if(tag_name == 'five'){
        document.querySelector('.' + objMenuLong[4].childrenTriagle).style.display = 'block';
        document.querySelector('.' + objMenuLong[4].elementToDisplay).style.display = 'block';
    
    } else if(tag_name == 'six'){
        document.querySelector('.' + objMenuLong[5].childrenTriagle).style.display = 'block';
        document.querySelector('.' + objMenuLong[5].elementToDisplay).style.display = 'block';
    
    }else if(tag_name == 'seven'){
        document.querySelector('.' + objMenuLong[6].childrenTriagle).style.display = 'block';
        document.querySelector('.' + objMenuLong[6].elementToDisplay).style.display = 'block';
    
    }
}   