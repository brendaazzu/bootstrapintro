
var cards = [
  {
      title: 'Rosa Vermelha',
      text: 'Representa amor verdadeiro e paixão',
      img: 'https://images.pexels.com/photos/15239/flower-roses-red-roses-bloom.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
      title: 'Rosa Cor-de-Rosa',
      text: 'Representa o amor romântico e a gratidão',
      img: 'https://images.pexels.com/photos/65619/roses-pink-family-rose-family-65619.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
      title: 'Rosa Amarela',
      text: 'Representa as virtudes da amizade e da lealdade',
      img: 'https://images.pexels.com/photos/68681/rose-orange-flowers-flower-68681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
      title: 'Rosa Branca',
      text: 'Representa as virtudes da pureza e da inocência',
      img: 'https://images.pexels.com/photos/36420/rose-plant-tender-nature.jpg?auto=compress&cs=tinysrgb&w=600'
  },
  {
      title: 'Rosa Azul',
      text: 'Representa tranquilidade e harmonia',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGwzPHSUxES1-HyAfd2fwOuYFzjtqn5s4HLbOp1kI3r8BPu0GUgYNdI3h7ohPk3b_B4zg&usqp=CAU'
  }
];

var index = 0;
var lastCardShown = false;

document.querySelector('.btn.btn-primary').addEventListener('click', function() {
    if (lastCardShown) {
        location.reload();
    } else {
        var card = cards[index];
        var cardTitle1 = document.querySelector('.card-title1');
        cardTitle1.textContent = card.title;

        var cardText1 = document.querySelector('.card-text1');
        cardText1.textContent = card.text;

        var cardImgTop1 = document.querySelector('.card-img-top1');
        cardImgTop1.src = card.img;

        index++;
        if (index === cards.length) {
            lastCardShown = true;
            index = 0;
        }
    }
});

window.onload = function() {

    var textElement1 = document.querySelector('.lt1');

    textElement1.style.display = 'none';

    var words1 = textElement1.textContent.split(' ');

    textElement1.textContent = '';

    function showWordByWord1(i) {
        if (i < words1.length) {

            textElement1.textContent += words1[i] + ' ';
            textElement1.style.display = 'block';

            setTimeout(function() {
                showWordByWord1(i + 1);
            }, 500); 
        }
    }

    setTimeout(function() {
        showWordByWord1(0);
    }, 500);
};


