function upperCase(){
    const mai = document.querySelector('#txt')
    mai.value = mai.value.toUpperCase()
}
function lowerCase(){
    const min = document.querySelector('#txt')
    min.value = min.value.toLowerCase()
}
function color(){
    const txt = document.querySelector('#txt')
    const inputValue = document.querySelector('#inp').value
    txt.style.color = inputValue
}
function inputVisible(){       
    const input = $('#inp')
    input.toggle(500,() => {
        input.css({background:'#D9D9D9'})
    })
}
function fontSans(){
    const font = document.querySelector('#txt')
    font.style.fontFamily = 'sans-serif'
}
function fontFantasy(){
    const font = document.querySelector('#txt')
    font.style.fontFamily = 'fantasy'
}
function fontRoboto(){
    const font = document.querySelector('#txt')
    font.style.fontFamily = 'Roboto Condensed'
}
function fontGirassol(){
    const font = $('#txt')
    font.css({fontFamily:'Girassol'})
}
function fontKdam(){
    const font = $('#txt')
    font.css({fontFamily:'Kdam Thmor'})
}
function fontItim(){
    const font = $('#txt')
    font.css({fontFamily:'Itim'})
}