window.onload = function () {
    var sapn = document.querySelector('.item21').children
    // console.log(sapn.children);
    var box = document.querySelectorAll('.box')
    console.log(box);
    var num = 0
    for (var i = 0; i < sapn.length; i++) {
        console.log(sapn[i]);
        sapn[i].setAttribute('index', num)
        num++
        sapn[i].onclick = function () {
            var ind = this.getAttribute('index')
            // console.log(ind);
            for (var j = 0; j < sapn.length; j++) {
                sapn[j].id = ''
                sapn[ind].id = 'xuanz'
            }

            for (var k = 0; k < sapn.length; k++) {
                box[k].style.display = 'none'
                box[ind].style.display = 'block'
            }
        }
    }

}