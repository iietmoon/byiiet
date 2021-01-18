//Cursor
const cursor = document.querySelector('.cursor-img');
document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: " + (e.pageY) + "px; left:" + (e.pageX) + "px;");
});

//Loader

function loader() {
    const load = document.getElementById('loader');
    const l1 = document.getElementById('l-1');
    const l2 = document.getElementById('l-2');
    const l3 = document.getElementById('l-3');
    const main = document.getElementById('main')

    function t1() {
        l1.classList.add('_l')
    }

    function t2() {
        l2.classList.add('_l');
    }

    function t3() {
        l3.classList.add('_l');
    }

    function t4() {
        l3.classList.remove('_l')
    }

    function t5() {
        l2.classList.remove('_l');
    }

    function t6() {
        l1.classList.remove('_l');
    }

    function t7() {
        load.classList.add('hide');
        main.classList.remove('hide');
    }
    setTimeout(t1, 1000);
    setTimeout(t2, 1500);
    setTimeout(t3, 2000);
    setTimeout(t4, 2500);
    setTimeout(t5, 3000);
    setTimeout(t6, 3500);
    setTimeout(t1, 4000);
    setTimeout(t2, 4500);
    setTimeout(t3, 5000);
    setTimeout(t4, 5500);
    setTimeout(t5, 6000);
    setTimeout(t6, 6500);
    setTimeout(t7, 7000);
}
loader();