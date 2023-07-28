window.onload = function () {
    var sapn = document.querySelector('.item21').children
    // console.log(sapn.children);
    var box = document.querySelectorAll('.box')
    // console.log(box);
    var num = 0
    for (var i = 0; i < sapn.length; i++) {
        // console.log(sapn[i]);
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
    var ul1 = document.querySelector('.ul1')
    // console.log(ul_);?
    axios.get('http://127.0.0.1:3000/guid/new').then(res => {
        console.log(res.data);
        var str = res.data
        var arr = ``
        for (var item of str) {
            arr += ` <li><a href="#">
            <img src="${item.img}" alt="">
            <div class="item31">
                <p>${item.text}</p>
                <div>
                      <span>${item.like}</span>
                      <span>${item.words} </span>
                </div>
            </div>
            </a>
            </li> `
            ul1.innerHTML = arr
        }
    })
    var ul2 = document.querySelector('.ul2')
    // console.log(ul_);
    axios.get('http://127.0.0.1:3000/guid/hot').then(res => {
        // console.log(res);
        var str = res.data
        var arr = ``
        for (var item of str) {
            arr += ` <li><a href="#">
        <img src="${item.img}" alt="">
        <div class="item31">
            <p>${item.text}</p>
            <div>
                  <span>${item.like}</span>
                  <span>${item.words} </span>
            </div>
        </div>
        </a>
        </li> `
            ul2.innerHTML = arr
        }
    })

}

