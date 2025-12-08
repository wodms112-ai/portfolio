$(document).ready(function () {
    const myFullpage = new fullpage('#fullpage', {

        navigation: false,
        navigationPosition: 'right',
        navigationTooltips: ['첫번째', '두번째', '세번째', '네번째'],
        showActiveTooltip: true,

        lockAnchors: false,
        anchors: ['link1', 'link2', 'link3', 'link4', 'link5'], // 섹션 5개니까 5개로 맞춰줘도 좋아!

        autoScrolling: true,
        scrollHorizontally: true,
        verticalCentered: true,
        scrollOverflow: false,

        afterLoad: function (origin, destination, direction, trigger) {
            const idx   = destination.index;           // 0~4
            const $head = $('header');
            const $gnbU = $('header .gnb ul');
            const $gnbL = $('header .gnb li');

            // 공통 초기화
            $head.removeClass('dark');
            $gnbU.show();
            $gnbL.removeClass('active');

            // 1번(visual) & 5번(thanks) : 헤더 메뉴 숨김
            if (idx === 0 || idx === 4) {
                console.log((idx + 1) + '번째 섹션 - gnb 숨김');
                $gnbU.hide();
                return; // 여기서 끝
            }

            // 2번(profile)
            if (idx === 1) {
                console.log('2번째 섹션 - profile active');
                $gnbL.eq(0).addClass('active');
            }

            // 3번(project01)
            else if (idx === 2) {
                console.log('3번째 섹션 - 1st project active + dark');
                $head.addClass('dark');
                $gnbL.eq(1).addClass('active');
            }

            // 4번(project02)
            else if (idx === 3) {
                console.log('4번째 섹션 - 2nd project active + dark');
                $head.addClass('dark');
                $gnbL.eq(2).addClass('active');
            }
        },

        responsiveWidth: 640
    });
});