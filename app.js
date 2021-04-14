// $(()=>{
//     console.log('jQ up')

//     const scrollTo = (section) => {
        
//     }

//     $('.scroll-manifesto').on('click', ()=>{
//         scrollTo('.music' )
//     })


// })

const goToSection = (event, section) => {
    event.preventDefault()
    // console.log(section)
    const area = document.getElementById(section)
    area.scrollIntoView()
}

document.getElementById('scroll-manifesto').addEventListener('click', event => {
    // event.preventDefault()
    // console.log('mnifesto')
    goToSection(event, 'manifesto')
})

document.getElementById('scroll-news').addEventListener('click', event => {
    // event.preventDefault()
    // console.log('mnifesto')
    goToSection(event, 'news')
})