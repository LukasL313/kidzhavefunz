


 // Sier at hvis jeg klikker sagt element, skal det elemente skrolle meg den til sagt element på samme HTML side // 

scrollTo = (element) => {
    console.log(element.offsetTop);
    window.scroll({
        behavior: 'smooth',
        left: 0,
        top: element.offsetTop
    })
}

document.getElementById("navGame").addEventListener('click', () => {
    console.log(document.getElementById("GameSection")); 
    scrollTo(document.getElementById("GameSection"))
})


// Tekst animasjon nedenfor//

const textAnimation = document.querySelector('.textAnimation'), 
      textConvertedToArray = textAnimation.innerText.split('');

      let letterIndex = 0,
      junctionOfLetters = '';

      textAnimation.innerText = '';
    
    const animationText = setInterval(() => {
        if(letterIndex <textConvertedToArray.length){
            junctionOfLetters+= textConvertedToArray[letterIndex];
            textAnimation.innerText = junctionOfLetters;
            letterIndex += 1;    
        } else{
            clearInterval(animationText);
        }
    }, 130);


    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            console.log(entry)
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');
            }
        })
    }) 
    
    
    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el))