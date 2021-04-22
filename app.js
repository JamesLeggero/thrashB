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
    area.scrollIntoView({behavior: 'smooth'})
}

document.getElementById('scroll-manifesto').addEventListener('click', event => {
    goToSection(event, 'manifesto')
})

document.getElementById('scroll-news').addEventListener('click', event => {
    goToSection(event, 'news')
})

document.getElementById('scroll-music').addEventListener('click', event => {
    goToSection(event, 'music')
})

document.getElementById('scroll-media').addEventListener('click', event => {
    goToSection(event, 'media')
})

document.getElementById('scroll-links').addEventListener('click', event => {
    goToSection(event, 'links')
})