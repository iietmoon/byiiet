//navbar
var navbar = new Vue({
    el: '#navbar',
    data: {
        act: 'active',
        logo: {
            path: 'img/logo/250.png',
            alt: 'Logo',
            link: '/',
            size: 100,
        },
        nav: {
            n1: 'About me',
            n2: 'Projects',
            n3: 'Services',
            n4: 'Latest Articles',
        },
        navLinks: {
            l1: '#about',
            l2: '#projects',
            l3: '#services',
            l4: '#articles',
        },
        navClass: {
            c1: 'about',
            c2: 'projects',
            c3: 'services',
            c4: 'articles',
        },
        searchIcon: {
            path: '<i class="fa fa-search" aria-hidden="true" alt="search icon"></i>',
            href: '#',
            c: 'search'
        },
        contactBtn: {
            text: 'Let\'s Talk!',
            href: '#',
            c: 'c-btn'
        },
        modeBtn: {
            light: {
                path: '<i class="fa fa-sun-o" aria-hidden="true"></i>',
                alt: 'light mode icon',
                class: 'light',
                href: '#'
            },
            dark: {
                path: '<i class="fa fa-moon-o" aria-hidden="true"></i>',
                alt: 'Dark mode icon',
                class: 'dark',
                href: '#',
            }
        }
    },
    methods:{
        dark: function () {
            var dmode = document.getElementById('app');
            dmode.classList.remove('lm-body');
            dmode.classList.add('dm-body');
        }
    }
});


var content =new Vue({
    el: '#content',
    data: {
        headline:{
            text: '<h1>Curiosity about life in all of its aspects,<br>I think, is still the secret of great creative people.</h1>',
            c: 'headline'
        },
        img:{
            path: 'img/main-img.jpg',
            alt: 'Othmane N. picture',
            size: 500,
        },
        btn: {
            text: '<p>Explore</p>',
            bIcon: {
                path: '<i class="fa fa-minus" aria-hidden="true"></i>'
            },
            aIcon: {
                path: '<i class="fa fa-long-arrow-right" aria-hidden="true"></i>'
            },
            href: '#',
            c: 'exp-btn'
        }
    },
})
