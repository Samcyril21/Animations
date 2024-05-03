// eslint-disable-next-line
const swiper = new Swiper('.swiper', {
  // pass EffectSlicer module to modules
  modules: [EffectSlicer],
  // specify "slicer" effect
  effect: 'slicer',
  slicerEffect: {
    split: 5,
  },
  direction: 'vertical',
  speed: 600,
  grabCursor: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
