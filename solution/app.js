const accordionTitles = document.querySelectorAll('.question');

accordionTitles.forEach(accordionTitle => {
    const height = accordionTitle.nextElementSibling.scrollHeight;
    accordionTitle.addEventListener('click', function () {
        accordionTitle.classList.toggle('active')
        
        if(accordionTitle.classList.contains('active')){
            accordionTitle.nextElementSibling.style.maxHeight = `${height}px` } else {
            accordionTitle.nextElementSibling.style.maxHeight = '0px'
            }
        })
    });



