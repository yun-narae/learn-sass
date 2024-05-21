// HTML에서 버튼과 메뉴 요소를 선택합니다.
const openButton = document.querySelector('.menu--open');
const closeButton = document.querySelector('.menu--close');
const navigation = document.querySelector('.navigation');

// .menu--open 버튼 클릭 시 .navigation에 navigation--open 클래스 추가
openButton.addEventListener('click', () => {
  navigation.classList.add('navigation--open');
});

// .menu--close 버튼 클릭 시 .navigation에서 navigation--open 클래스 제거
closeButton.addEventListener('click', () => {
  navigation.classList.remove('navigation--open');
});