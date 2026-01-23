$(function () {
    $('#header').load('/Samdasoo/common/header.html');
    $('#footer').load('/Samdasoo/common/footer.html');
});
/* 깃허브 업로드 시 common 앞부분에 폴더 경로 추가 */

/* 스크롤 부드럽게 */
const lenis = new Lenis({
    duration: 1.2,   // 스크롤 속도
    smooth: true,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
})

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)