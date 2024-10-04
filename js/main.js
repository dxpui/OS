"use strict";

function searchIcon() {
    $('#search-icon').click(function () {
        $('#search-icon i').toggleClass("fa-times");
        $('.search-form').toggleClass("active");
        $(".menu").removeClass("fa-times");
    })
    $('.search-icons').keypress(function (event) {
        var id = event.keyCode;
        if (id == 13) {
            $('#search-icon').trigger('click');
        }
    });
}

$(document).ready(function () {
    if ($('#search-icon').length > 0) {
        searchIcon()
    }
});

$(document).ready(function () {
    $('.checker-container').each(function () {
        $(this).parents().addClass('height-100');
    });

    if ($('.checker-container').length) {
        $('header').addClass('position-absolute');
    }
});

$(document).ready(function () {
    function checkScroll() {
        $('.checker-container').each(function () {
            var topHeader = $('.header').height();
            var footerHeight = $('.qn-stepper').height();
            var checkerContainer = $('.checker-container').height();

            var $firstDiv = $(this);
            var $secondDiv = $firstDiv.find('.checker-container-left-inner');

            if (($(document).height() - 10) < (topHeader + footerHeight + checkerContainer) && $(window).width() < 1280) {
                $secondDiv.addClass('height-auto');
            } else {
                $secondDiv.removeClass('height-auto');
            }
        });
    }

    checkScroll();

    $(window).resize(function () {
        checkScroll();
    });
});

$(document).ready(function () {
    $('#right-container').hide();
    //set initial state.
    $('#exampleCheck5').val(this.checked);

    $('#exampleCheck5').change(function () {
        if (this.checked) {
            $('#right-container').show();
        } else {
            $('#right-container').hide();
        }
        $('#exampleCheck5').val(this.checked);
    });

    $('#flexRadioDefault1').change(function () {
        if (this.checked) {
            $('#right-container').show();
        } else {
            $('#right-container').hide();
        }
        $('#flexRadioDefault1').val(this.checked);
    });

    $('#flexRadioDefault2').change(function () {
        if (this.checked) {
            $('#right-container').hide();

        } else {
            $('#right-container').show();
        }
        $('#flexRadioDefault2').val(this.checked);
    });

    $('#exampleCheck2').change(function () {
        if (this.checked) {
            $('#right-container').show();
        } else {
            $('#right-container').hide();
        }
        $('#exampleCheck2').val(this.checked);
    });
});

//     $(".accordian-panel").click(function () {
//         var acc = document.getElementsByClassName("accordian-panel");
//         var panel = document.getElementsByClassName('accordion-collapse');

//         for (var i = 0; i < acc.length; i++) {
//             acc[i].onclick = function () {
//                 var setClasses = !this.classList.contains('active');
//                 setClass(acc, 'active', 'remove');
//                 setClass(panel, 'show', 'remove');

//                 if (setClasses) {
//                     this.classList.toggle("active");
//                     if (this.nextElementSibling) this.nextElementSibling.classList.toggle("show");
//                 }
//             }
//         }

//         function setClass(els, className, fnName) {
//             for (var i = 0; i < els.length; i++) {
//                 els[i].classList[fnName](className);
//             }
//         }
//     })

// });