const contain = document.querySelector('.container')

function makeGrid(num) {
    for (var r = 0; r < num; r++) {
        for (var c = 0; c < num; c++) {
            /*
            console.log('makeGrid called')
            var square = document.createElement('div')
            square.classList.add('square')
            contain.append(square)
            */

            $(".container").append("<div class = 'square'></div>")
        }
    }

    $('.square').width(960 / num)
    $('.square').height(960 / num)

}

function refreshGrid() {
    console.log('refreshGrid called')
    var p = prompt("How many boxes on each side?")
    resetGrid()
    makeGrid(p)
}

function resetGrid() {
    console.log('resetGrid called')
    $('.square').remove()
}

$(document).ready(function() {
    console.log('document ready function called')
    makeGrid(16)

    $('.square').mouseover(function() {
        var r = Math.floor(Math.random() * 256)
        var g = Math.floor(Math.random() * 256)
        var b = Math.floor(Math.random() * 256)
        $(this).css('background-color', `rgb(${r}, ${g}, ${b})`)
    })

    $('.new-grid').click(function() {
        refreshGrid()

        $('.square').mouseover(function() {
            $(this).css('background-color', `rgb(${r}, ${g}, ${b})`)
        })
    })
})