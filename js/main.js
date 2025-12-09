$(document).ready(function () {
    const myFullpage = new fullpage('#fullpage', {
        navigation: false,
        navigationPosition: 'right',
        navigationTooltips: ['첫번째', '두번째', '세번째', '네번째'],
        showActiveTooltip: true,
        lockAnchors: false,
        anchors: ['link1', 'link2', 'link3', 'link4', 'link5'],
        autoScrolling: true,
        scrollHorizontally: true,
        verticalCentered: true,
        scrollOverflow: false,
        afterLoad: function (origin, destination, direction, trigger) {
            const idx   = destination.index;         
            const $head = $('header');
            const $gnbU = $('header .gnb ul');
            const $gnbL = $('header .gnb li');

            $head.removeClass('dark');
            $gnbU.show();
            $gnbL.removeClass('active');

            if (idx === 0 || idx === 4) {
                $gnbU.hide();
                return;
            }

            if (idx === 1) {
                $gnbL.eq(0).addClass('active');
            } else if (idx === 2) {
                $head.addClass('dark');
                $gnbL.eq(1).addClass('active');
            } else if (idx === 3) {
                $head.addClass('dark');
                $gnbL.eq(2).addClass('active');
            }
        },
        responsiveWidth: 640
    });

    /* ==========================
       mouse_cursor 동그라미 커서
       ========================== */

    const $box = $('.mouse_cursor');

    // 1) 박스 안에서 마우스 따라다니기
    $box.on('mousemove', function(e) {
        const $this  = $(this);
        const offset = $this.offset();
        const x = e.pageX - offset.left;
        const y = e.pageY - offset.top;

        $this.find('.cursor').css({
            left: x + 'px',
            top:  y + 'px'
        });
    });

    // 2) 들어오면 보이기
    $box.on('mouseenter', function() {
        $(this).find('.cursor').addClass('on');
    });

    // 3) 나가면 숨기기
    $box.on('mouseleave', function() {
        $(this).find('.cursor').removeClass('on');
    });

});
