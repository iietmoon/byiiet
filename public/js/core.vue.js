//navbar
var navbar = new Vue({
    el: '#navbar',
    data: {
        act: 'active',
        logo: {
            path: 'img/logo/full.png',
            alt: 'Logo',
            link: '/',
            size: 60,
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
    methods: {
        dark: function() {
            var dmode = document.getElementById('app');
            dmode.classList.remove('lm-body');
            dmode.classList.add('dm-body');
        }
    }
});

var mobnav = new Vue({
    el: '#navbar-mobile',
    data: {
        logo: {
            path: 'img/logo/full.png',
            alt: 'Logo',
            href: '/',
            size: 65
        },
        nav: {
            n1: {
                txt: 'About me',
                href: '#about'
            },
            n2: {
                txt: 'Projects',
                href: '#projects'
            },
            n3: {
                txt: 'Services',
                href: '#services'
            },
            n4: {
                txt: 'Latest Articles',
                href: '#articles'
            }
        },
        sm: {
            instagram: {
                icon: '<i class="fa fa-instagram" aria-hidden="true"></i>',
                href: ''
            },
            github: {
                icon: '<i class="fa fa-github-square" aria-hidden="true"></i>',
                href: '',
                repo: 'https://github.com/iietmoon/byiiet',
            },
            linkedin: {
                icon: '<i class="fa fa-linkedin-square" aria-hidden="true"></i>',
                href: ''
            },
            behance: {
                icon: '<i class="fa fa-behance-square" aria-hidden="true"></i>',
                href: ''
            },
            vue: {
                icon: '<img src="img/lang/vue.png" width="20">',
                href: ''
            },
            bootstrap: {
                icon: '<img src="img/lang/bootstrap.png" width="20">',
                href: ''
            },
            wp: {
                icon: '<img src="img/lang/WordPress.png" width="20">',
                href: ''
            },
        }
    },
    methods: {
        menushow: function() {
            var show = document.getElementById('nc-mob');
            show.classList.remove('hide')
        },
        menuhide: function() {
            var hide = document.getElementById('nc-mob');
            hide.classList.add('hide')
        }
    }
});

var content = new Vue({
    el: '#content',
    data: {
        headline: {
            text: '<h1>Curiosity about life in all of its aspects,<br>I think, is still the secret of great creative people.</h1>',
            c: 'headline'
        },
        img: {
            path: 'img/main-img.jpg',
            alt: 'Othmane N. picture',
            size: 500,
        },
        btn: {
            html: '<button><img src="icons/dash.svg">Explore</button><br><img src="icons/arrow-down.svg" class="a-icon">',
            href: '#',
            c: 'exp-btn'
        }
    },
})
var aboutme = new Vue({
    el: '#abm-sec',
    data: {
        headline: {
            mutedtxt: "ABOUT ME",
            txt: "Hello!",
            c: 'headline'
        },
        overview: {
            txt: '<p>I am Othmane N. a Full-stack & Mobile developer,<br>During this time I have worked on all layers of codes from the database to UI.<br>I have also been involved in all stages of a product life cycle from<br>conceptualization and design and up to deployment in production and support.</p>',
            c: 'overview'
        },
        icon: {
            left: {
                path: '<img src="icons/arrow-left.svg" width="25" class="float-start">'
            },
            right: {
                text: 'More',
                path: '<span>More   <img src="icons/arrow-right.svg" width="25" class="float-end"></span>'
            }
        },
        lang: {
            html: {
                path: 'img/lang/html.png',
                size: 70,
                alt: 'html'
            },
            css: {
                path: 'img/lang/css.png',
                size: 70,
                alt: 'css'
            },
            bootstrap: {
                path: 'img/lang/bootstrap.png',
                size: 70,
                alt: 'bootstrap'
            },
            js: {
                path: 'img/lang/js.png',
                size: 70,
                alt: 'javascript'
            },
            jquery: {
                path: 'img/lang/jquery.png',
                size: 70,
                alt: 'jquery'
            },
            scss: {
                path: 'img/lang/sass.png',
                size: 70,
                alt: 'sass'
            },
            bulma: {
                path: 'img/lang/bulma.png',
                size: 70,
                alt: 'bulma'
            },
            materialize: {
                path: 'img/lang/materialize.png',
                size: 70,
                alt: 'materialize'
            },
            react: {
                path: 'img/lang/React.png',
                size: 70,
                alt: 'React'
            },
            vue: {
                path: 'img/lang/vue.png',
                size: 70,
                alt: 'Vue'
            },
            node: {
                path: 'img/lang/Node.png',
                size: 70,
                alt: 'Node.js'
            },
            php: {
                path: 'img/lang/php.png',
                size: 70,
                alt: 'php'
            },
            sql: {
                path: 'img/lang/mysql.png',
                size: 70,
                alt: 'sql'
            },
            graphql: {
                path: 'img/lang/graphql.png',
                size: 70,
                alt: 'graphql'
            },
            mysql: {
                path: 'img/lang/MySQL-Logo.png',
                size: 70,
                alt: 'MySql'
            },
            mongodb: {
                path: 'img/lang/mongo.png',
                size: 70,
                alt: 'Mongodb'
            },
        }
    },
    methods: {
        next: function() {
            const langfirst = document.getElementById('lang-1');
            const langsecond = document.getElementById('lang-2');
            const backbtn = document.getElementById('back-btn');
            langfirst.classList.add('hide');
            langsecond.classList.remove('hide');
            backbtn.classList.remove('hide')
        },
        back: function() {
            const langfirst = document.getElementById('lang-1');
            const langsecond = document.getElementById('lang-2');
            const backbtn = document.getElementById('back-btn');
            langsecond.classList.add('hide');
            langfirst.classList.add('slide');
            langfirst.classList.remove('hide')
            backbtn.classList.add('hide')
        }
    }
})