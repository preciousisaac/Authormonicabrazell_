const buyBtn = document.querySelector('.buy-btn');
const buySection = document.querySelector('#buy');

if (buyBtn && buySection) {
  buyBtn.addEventListener('click', function (e) {
    e.preventDefault();
    buySection.scrollIntoView({ behavior: 'smooth' });
  });
}
