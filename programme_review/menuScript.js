const objMenuover = [
    { screen: 'one', childrenTriagle: 'triangle_one_re', elementToDisplay: 'yellow_pg_first' },
    { screen: 'two', childrenTriagle: 'triangle_two_re', elementToDisplay: 'green_pg_second' },
    { screen: 'three', childrenTriagle: 'triangle_three_re', elementToDisplay: 'red_pg_third' },
    { screen: 'four', childrenTriagle: 'triangle_four_re', elementToDisplay: 'yellow_pg_fourth' },
    { screen: 'five', childrenTriagle: 'triangle_five_re', elementToDisplay: 'green_pg_fifth' },
]

function elementClickedTabLongover(tag_name) {
    console.log(tag_name);
    document.querySelectorAll('.triangle_rw').forEach(ele => {
        ele.style.display = 'none'
    });
    document.querySelectorAll('.body_rp').forEach(ele => {
        console.log(ele)
        ele.style.display = 'none';
    });
    if (tag_name == 'one') {
        document.querySelector('.' + objMenuover[0].childrenTriagle).style.display = 'block';
        document.querySelector('.' + objMenuover[0].elementToDisplay).style.display = 'block';
    } else if (tag_name == 'two') {
        document.querySelector('.' + objMenuover[1].childrenTriagle).style.display = 'block';
        document.querySelector('.' + objMenuover[1].elementToDisplay).style.display = 'block';
    } else if (tag_name == 'three') {
        document.querySelector('.' + objMenuover[2].childrenTriagle).style.display = 'block';
        document.querySelector('.' + objMenuover[2].elementToDisplay).style.display = 'block';
    } else if (tag_name == 'four') {
        document.querySelector('.' + objMenuover[3].childrenTriagle).style.display = 'block';
        document.querySelector('.' + objMenuover[3].elementToDisplay).style.display = 'block';
    } else if (tag_name == 'five') {
        document.querySelector('.' + objMenuover[4].childrenTriagle).style.display = 'block';
        document.querySelector('.' + objMenuover[4].elementToDisplay).style.display = 'block';

    } else if (tag_name == 'six') {
        document.querySelector('.' + objMenuover[5].childrenTriagle).style.display = 'block';
        document.querySelector('.' + objMenuover[5].elementToDisplay).style.display = 'block';

    } else if (tag_name == 'seven') {
        document.querySelector('.' + objMenuover[6].childrenTriagle).style.display = 'block';
        document.querySelector('.' + objMenuover[6].elementToDisplay).style.display = 'block';

    }
}