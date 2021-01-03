//navbar
var navbar = new Vue({
    el: '#navbar',
    data: {
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
        }
    }
})