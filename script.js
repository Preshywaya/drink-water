const smallcups = document.querySelectorAll('.cup-small')
const listers = document.getElementById('liters')
const percentage = document.getElementById('percentage')
const remained = document.getElementById('remained')

updateBigcup()
smallcups.forEach((cup, idx) => {
    cup.addEventListener('click',() => highlightcups(idx))
})

function  highlightcups(idx) {

    if(smallcups[idx].classList.contains('full') && !smallcups
[idx].nextElementSibling.classList.contains('full')) {
        idx--
    }
    smallcups.forEach((cup, idx2) => {
        if(idx2 <= idx) {
            cup.classList.add('full')
        } else {
            cup.classList.remove('full')
        }
    })

    updateBigcup()
}

function updateBigcup() {
    const fullcups = document.querySelectorAll('.cup-small.full').length


    const totalCups =  smallcups.length
    

    if(fullcups === 0){
        percentage.style.visibility = 'hidden'
        percentage.style.height = 0
    } else {
        percentage.style.visibility = 'visible'
        percentage.style.height = `${fullcups/ totalCups * 330}px`
        percentage.innerText =`${fullcups/ totalCups * 100}%`
    }

    if(fullcups=== totalCups){
        remained.style.visibility = 'hidden'
        remained.style.height = 0
    } else {
        remained.style.visibility = 'visible'
        listers.innerText = `${2 - (250 * fullcups / 1000)}L`
    }
}

