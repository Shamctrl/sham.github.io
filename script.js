
let achievementSound = new Audio('https://www.youtube.com/watch?v=MaPDKHgGpEg')
let achievementSoundRare = new Audio('https://www.youtube.com/watch?v=MaPDKHgGpEg')
const achievement = () => {
    let title = document.getElementById('a_title').value
    let score = document.getElementById('a_score').value
    let rare = document.getElementById('a_rare').checked
    document.querySelector('.achiev_name').innerText = title
    document.querySelector('.acheive_score').innerText = score
    document.getElementById("a_trigger").disabled = true
    document.querySelector('.unlocked').innerText = rare ? 'Rare achievement unlocked' : 'Achievement unlocked'
    if (rare) {
        achievementSoundRare.play()
        document.querySelector('.achievement').classList.add('rare')
    } else {
        achievementSound.play()
    }
    document.querySelector('.circle').classList.add('circle_animate')
    document.querySelector('.banner').classList.add('banner-animate')
    document.querySelector('.achieve_disp').classList.add('achieve_disp_animate')
    setTimeout(() => {
        document.querySelector('.circle').classList.remove('circle_animate')
        document.querySelector('.banner').classList.remove('banner-animate')
        document.querySelector('.achieve_disp').classList.remove('achieve_disp_animate')
        document.getElementById("a_trigger").disabled = false
        if (rare) {
            document.querySelector('.achievement').classList.remove('rare')
        }
    }, 12000)
}

document.getElementById('a_trigger').addEventListener('click', () => {
    achievement()
})
