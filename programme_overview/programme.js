
const objMenuLongProgramme = [
    { screen: 'one', childrenTriagle: 'triangle_one_r', elementToDisplay: 'green_programme' },
    { screen: 'two', childrenTriagle: 'triangle_two_r', elementToDisplay: 'yellow_programme' },
    { screen: 'three', childrenTriagle: 'triangle_three_r', elementToDisplay: 'red_programme' },
]

function elementClickedProgramm(tag_name) {
    console.log(tag_name);
    document.querySelectorAll('.triangle').forEach(ele => {
        ele.style.display = 'none'
    });
    document.querySelectorAll('.body').forEach(ele => {
        console.log(ele)
        ele.style.display = 'none';
    });
    if (tag_name == 'one') {
        document.querySelector('.' + objMenuLongProgramme[0].childrenTriagle).style.display = 'block';
        document.querySelector('.' + objMenuLongProgramme[0].elementToDisplay).style.display = 'block';
    } else if (tag_name == 'two') {
        document.querySelector('.' + objMenuLongProgramme[1].childrenTriagle).style.display = 'block';
        document.querySelector('.' + objMenuLongProgramme[1].elementToDisplay).style.display = 'block';
    } else if (tag_name == 'three') {
        document.querySelector('.' + objMenuLongProgramme[2].childrenTriagle).style.display = 'block';
        document.querySelector('.' + objMenuLongProgramme[2].elementToDisplay).style.display = 'block';
    }else if(tag_name == 'fProgramme'){
        document.querySelector('.' + objMenuLongProgramme[3].childrenTriagle).style.display = 'block';
        document.querySelector('.' + objMenuLongProgramme[3].elementToDisplay).style.display = 'block';
    } else if(tag_name == 'five'){
        document.querySelector('.' + objMenuLongProgramme[4].childrenTriagle).style.display = 'block';
        document.querySelector('.' + objMenuLongProgramme[4].elementToDisplay).style.display = 'block';
    
    } else if(tag_name == 'six'){
        document.querySelector('.' + objMenuLongProgramme[5].childrenTriagle).style.display = 'block';
        document.querySelector('.' + objMenuLongProgramme[5].elementToDisplay).style.display = 'block';
    
    }else if(tag_name == 'seven'){
        document.querySelector('.' + objMenuLongProgramme[6].childrenTriagle).style.display = 'block';
        document.querySelector('.' + objMenuLongProgramme[6].elementToDisplay).style.display = 'block';
    
    }
}   