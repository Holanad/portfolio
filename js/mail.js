const scrollUp = document.querySelector('.scroll-up');

window.onscroll = () => {
    if (window.scrollY > 300) {
        scrollUp.classList.add('scroll-up__active');
    } else if (window.scrollY < 300) {
        scrollUp.classList.remove('scroll-up__active');
    }
}

$(document).ready(function () {
    $('.bt__mysite').click(function () {
        $('.t__mysite').slideToggle(300, function () {
            if ($(this).is(':hidden')) {
                $('.bt__mysite').html('Показать описание проекта');
            } else {
                $('.bt__mysite').html('Скрыть описание проекта');
            }
        });
        return false;
    });
});
$(document).ready(function () {
    $('.bt__build-control').click(function () {
        $('.t__build-control').slideToggle(300, function () {
            if ($(this).is(':hidden')) {
                $('.bt__build-control').html('Показать описание проекта');
            } else {
                $('.bt__build-control').html('Скрыть описание проекта');
            }
        });
        return false;
    });
});
$(document).ready(function () {
    $('.bt__the-witcher').click(function () {
        $('.t__the-witcher').slideToggle(300, function () {
            if ($(this).is(':hidden')) {
                $('.bt__the-witcher').html('Показать описание проекта');
            } else {
                $('.bt__the-witcher').html('Скрыть описание проекта');
            }
        });
        return false;
    });
});
$(document).ready(function () {
    $('.bt__picadu').click(function () {
        $('.t__picadu').slideToggle(300, function () {
            if ($(this).is(':hidden')) {
                $('.bt__picadu').html('Показать описание проекта');
            } else {
                $('.bt__picadu').html('Скрыть описание проекта');
            }
        });
        return false;
    });
});
$(document).ready(function () {
    $('.bt__underwater').click(function () {
        $('.t__underwater').slideToggle(300, function () {
            if ($(this).is(':hidden')) {
                $('.bt__underwater').html('Показать описание проекта');
            } else {
                $('.bt__underwater').html('Скрыть описание проекта');
            }
        });
        return false;
    });
});