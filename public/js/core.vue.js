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
                path: 'https://icons.getbootstrap.com/icons/brightness-high-fill.svg',
                alt: 'light mode icon',
                class: 'light'
            },
            dark: {
                path: 'https://icons.getbootstrap.com/icons/moon.svg',
                alt: 'Dark mode icon',
                class: 'dark'
            }
        }
    }
})