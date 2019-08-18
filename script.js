$("#carousel").owlCarousel({
    autoplay: false,
    lazyLoad: true,
    loop: true,
    margin: 20,
    /*
   animateOut: 'fadeOut',
   animateIn: 'fadeIn',
   */
    responsiveClass: true,
    autoHeight: true,
    autoplayTimeout: 7000,
    smartSpeed: 800,
    nav: true,
    responsive: {
        0: {
            items: 1
        },

        600: {
            items: 3
        },

        1024: {
            items: 6
        },

        1366: {
            items: 6
        }
    }
});


$("#carousel-2").owlCarousel({
    autoplay: false,
    lazyLoad: true,
    loop: true,
    margin: 20,
    /*
   animateOut: 'fadeOut',
   animateIn: 'fadeIn',
   */
    responsiveClass: true,
    autoHeight: true,
    autoplayTimeout: 7000,
    smartSpeed: 800,
    nav: true,
    responsive: {
        0: {
            items: 1
        },

        600: {
            items: 3
        },

        1024: {
            items: 6
        },

        1366: {
            items: 6
        }
    }
});



$("#carousel-3").owlCarousel({
    autoplay: false,
    lazyLoad: true,
    loop: true,
    margin: 20,
    /*
   animateOut: 'fadeOut',
   animateIn: 'fadeIn',
   */
    responsiveClass: true,
    autoHeight: true,
    autoplayTimeout: 7000,
    smartSpeed: 800,
    nav: true,
    responsive: {
        0: {
            items: 1
        },

        600: {
            items: 3
        },

        1024: {
            items: 6
        },

        1366: {
            items: 6
        }
    }
});



$("#carousel-4").owlCarousel({
    autoplay: false,
    lazyLoad: true,
    loop: true,
    margin: 20,
    /*
   animateOut: 'fadeOut',
   animateIn: 'fadeIn',
   */
    responsiveClass: true,
    autoHeight: true,
    autoplayTimeout: 7000,
    smartSpeed: 800,
    nav: true,
    responsive: {
        0: {
            items: 1
        },

        600: {
            items: 3
        },

        1024: {
            items: 6
        },

        1366: {
            items: 6
        }
    }
});



/*next-prev-block-style*/
function asArr(arrayLike) {
    return [].slice.call(arrayLike, 0)
}

function setActiveArticle(articlesNodes, activeArticleNode) {
    articlesNodes.forEach(function(articleNode) {
        if (articleNode === activeArticleNode) {
            articleNode.classList.add('current')
        } else {
            articleNode.classList.remove('current')
        }
    })
}

function getNextArticle(articlesNodes, articleNode) {
    var articleIndex = articlesNodes.indexOf(articleNode)
    var totalArticlesIndexes = articlesNodes.length - 1
    if (articleIndex === totalArticlesIndexes) {
        return articlesNodes[0]
    } else {
        return articlesNodes[articleIndex + 1]
    }
}

function getPrevArticle(articlesNodes, articleNode) {
    var articleIndex = articlesNodes.indexOf(articleNode)
    var totalArticlesIndexes = articlesNodes.length - 1
    if (articleIndex === 0) {
        return articlesNodes[totalArticlesIndexes]
    } else {
        return articlesNodes[articleIndex - 1]
    }
}

var ACTIVE_ARTICLE_DEFAULT_INDEX = 0
function main() {
    var articlesNodes = asArr(document.querySelectorAll('.news li'))
    var nextNode = document.querySelector('.next')
    var prevNode = document.querySelector('.prev')

    console.log('got', articlesNodes)
    var currentlyActiveArticle = articlesNodes[ACTIVE_ARTICLE_DEFAULT_INDEX]

    setActiveArticle(articlesNodes, currentlyActiveArticle)

    nextNode.addEventListener('click', function () {
        var nextArticle = getNextArticle(articlesNodes, currentlyActiveArticle)
        setActiveArticle(articlesNodes, nextArticle)
        currentlyActiveArticle = nextArticle
    })

    prevNode.addEventListener('click', function () {
        var prevArticle = getPrevArticle(articlesNodes, currentlyActiveArticle)
        setActiveArticle(articlesNodes, prevArticle)
        currentlyActiveArticle = prevArticle
    })
}

main();
/*next-prev-block-style-end*/





/*tab-style-active*/
function triggerTab($tabId) {
    $('.nav-link.active').each(function (index) {
        $(this).removeClass('active');
    });
    $tabId.addClass('active');
}
/*tab-style-active-end*/
