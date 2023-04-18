const link = document.getElementById('image-link')
const visibility = document.getElementById('visible')
const link2 = document.getElementById('image-link1')
const visibility2 = document.getElementById('visible2')
const link3 = document.getElementById('image-link2')
const visibility3 = document.getElementById('visible3')
const link4 = document.getElementById('image-link3')
const visibility4 = document.getElementById('visible4')
const link5 = document.getElementById('image-link4')
const visibility5 = document.getElementById('visible5')
const link6 = document.getElementById('image-link5')
const visibility6 = document.getElementById('visible6')
link.addEventListener('mouseover', () => {
    visibility.classList.remove('invisibility')
    visibility.classList.add('visible')

});
link.addEventListener('mouseout', () => {
    visibility.classList.add('invisibility')
    visibility.classList.remove('visible')

});
link2.addEventListener('mouseover', () => {
    visibility2.classList.remove('invisibility')
    visibility2.classList.add('visible')
});
link2.addEventListener('mouseout', () => {
    visibility2.classList.add('invisibility')
    visibility2.classList.remove('visible')

});
link3.addEventListener('mouseover', () => {
    visibility3.classList.remove('invisibility')
    visibility3.classList.add('visible')
});
link3.addEventListener('mouseout', () => {
    visibility3.classList.add('invisibility')
    visibility3.classList.remove('visible')

});
link4.addEventListener('mouseover', () => {
    visibility4.classList.remove('invisibility')
    visibility4.classList.add('visible')
});
link4.addEventListener('mouseout', () => {
    visibility4.classList.add('invisibility')
    visibility4.classList.remove('visible')

});
link5.addEventListener('mouseover', () => {
    visibility5.classList.remove('invisibility')
    visibility5.classList.add('visible')
});
link5.addEventListener('mouseout', () => {
    visibility5.classList.add('invisibility')
    visibility5.classList.remove('visible')
});
link6.addEventListener('mouseover', () => {
    visibility6.classList.remove('invisibility')
    visibility6.classList.add('visible')
});
link6.addEventListener('mouseout', () => {
    visibility6.classList.add('invisibility')
    visibility6.classList.remove('visible')
});