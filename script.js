// Lynn Owen
// Expanding Cards


const panels = document.querySelectorAll('.panel')

function removeActiveClassess() {
    panels.forEach((panel) => {
        panel.classList.remove('active')
    })
}

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        console.log(panel)
        removeActiveClassess()
        panel.classList.add('active')
    })
})

