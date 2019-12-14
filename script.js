
const $doc = $(document);
const $header = $('header');
const $main = $('main');
const $body = $('body');

$doc.on("scroll", function () {
    $header.css({
        'background-color': 'black'
    })
    //aktualna wartość scrolla
    const scrollPos = $doc.scrollTop();
    //gdzie (ile pikseli) jest dany element od początku strony.
    const sectionOffset = $main.offset().top;
    // Jaka jest wysokość elementu
    const headerHeight = $header.outerHeight();

    if (scrollPos < sectionOffset) {
        $main.css({
            'opacity': 0 + scrollPos / headerHeight
        });
        $header.css({
            'opacity': 0 + scrollPos / headerHeight
        })
    }
    // console.log(1 - scrollPos / headerHeight)
})