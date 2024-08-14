// jQuery(document).ready(function (jQuery) {
//     // Banner carousel
//     var $banner_carousel = jQuery('.skills-block-5d134f2aee467'),
//         $banner_imgs = $banner_carousel.find('.banner-carousel-imgs'),
//         $banner_h = $banner_carousel.find('.banner-carousel-h');
//     var $banner_imgs_swiper = new Swiper($banner_imgs, {
//         loop: true,
//         direction: 'vertical',
//         slidesPerView: 1,
//         loopAdditionalSlides: 3,
//         watchSlidesVisibility: true,
//         watchSlidesProgress: true,
//         breakpointsInverse: true,
//         speed: 500,
//     });
//     var $banner_h_swiper = new Swiper($banner_h, {
//         loop: true,
//         centeredSlides: true,
//         slidesPerView: 'auto',
//         speed: 500,
//         loopAdditionalSlides: 3,
//         thumbs: {
//             swiper: $banner_imgs_swiper
//         },
//         autoplay: {
//             delay: 5000,
//         },
//     });
//     $banner_h.on('click', '.swiper-slide', function () {
//         var index = jQuery(this).attr('data-swiper-slide-index');
//         $banner_imgs_swiper.slideTo(index);
//         $banner_h_swiper.slideTo(index);
//     });

//     // Event carousel 1
//     var $event_carousel = jQuery('.events-block-5d4e8a1237d0a'),
//         $event_carousel_swiper = new Swiper($event_carousel.find('.swiper-container'), {
//             loop: false,
//             spaceBetween: 30,
//             watchSlidesVisibility: true,
//             loopAdditionalSlides: 2,
//             navigation: {
//                 nextEl: $event_carousel.find('.next'),
//                 prevEl: $event_carousel.find('.prev'),
//             },
//             breakpointsInverse: true,
//             breakpoints: {
//                 200: {
//                     slidesPerView: 1
//                 },
//                 576: {
//                     slidesPerView: 2
//                 }
//             }
//         });

//     // Event carousel 2
//     var $event_carousel = jQuery('.events-block-5d1494b2a2fd7'),
//         $event_carousel_swiper = new Swiper($event_carousel.find('.swiper-container'), {
//             loop: false,
//             spaceBetween: 30,
//             watchSlidesVisibility: true,
//             loopAdditionalSlides: 2,
//             navigation: {
//                 nextEl: $event_carousel.find('.next'),
//                 prevEl: $event_carousel.find('.prev'),
//             },
//             breakpointsInverse: true,
//             breakpoints: {
//                 200: {
//                     slidesPerView: 1
//                 },
//                 576: {
//                     slidesPerView: 2
//                 },
//                 768: {
//                     slidesPerView: 4
//                 },
//             }
//         });

//     // Circle Progress
//     jQuery('.skills-item-5d3836c457031 .circle').each(function () {
//         jQuery(this).circleProgress({
//             emptyFill: '#bbbbbb',
//             fill: '#000',
//             thickness: 5,
//             startAngle: -190
//         });
//     });
//     jQuery('.skills-item-5d3836d85dd1f .circle').each(function () {
//         jQuery(this).circleProgress({
//             emptyFill: '#bbbbbb',
//             fill: '#000',
//             thickness: 5,
//             startAngle: -190
//         });
//     });
//     jQuery('.skills-item-5d3836e20f151 .circle').each(function () {
//         jQuery(this).circleProgress({
//             emptyFill: '#bbbbbb',
//             fill: '#000',
//             thickness: 5,
//             startAngle: -190
//         });
//     });
// });
