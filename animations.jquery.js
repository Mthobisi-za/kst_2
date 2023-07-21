// var collection = document.querySelectorAll('.animate__animated');

// function isInViewport(el) {
//     const rect = el.getBoundingClientRect();
//     return (
//         rect.top >= 0 &&
//         rect.left >= 0 &&
//         rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//         rect.right <= (window.innerWidth || document.documentElement.clientWidth)

//     );
// }
// collection.forEach(element => {
//     function getRandomInt(max) {
//         return Math.floor(Math.random() * max);
//     }
//     console.log(isInViewport(element));
//     var animationsFull = ['animate__headShake', 'animate__backInDown', 'animate__bounceIn', 'animate__fadeIn', 'animate__fadeInDown', 'animate__fadeInLeft', 'animate__flipInX', 'animate__lightSpeedInRight', 'animate__zoomIn']
//     if (isInViewport(element)) {
//         var cl = getRandomInt(animationsFull.length + 1);
//         element.classList.add(animationsFull[cl]);
//     }
// })