import { useState } from 'react';
import CarouselItem from './CarouselItem';

// for use in with windows <= 300px
import beefWellington300 from './images/beefWellington300.png';
import crispySalmon300 from './images/crispySalmon300.png';
import scallopsAndRisotto300 from './images/scallopsAndRisotto300.png';
import blackForestCake300 from './images/blackForestCake300.png';

// for use in with windows >= 600px 
import beefWellington600 from './images/beefWellington600.png';
import crispySalmon600 from './images/crispySalmon600.png';
import scallopsAndRisotto600 from './images/scallopsAndRisotto600.png';
import blackForestCake600 from './images/blackForestCake600.png';

const carouselArr = [
  { id: 1, title: 'Beef Wellington', pic300: beefWellington300, pic600: beefWellington600 },
  { id: 2, title: 'Crispy Salmon', pic300: crispySalmon300, pic600: crispySalmon600 },
  { id: 3, title: 'Scallops & Risotto', pic300: scallopsAndRisotto300, pic600: scallopsAndRisotto600 },
  { id: 4, title: 'Black Forest Cake', pic300: blackForestCake300, pic600: blackForestCake600 },
];

function Carousel() {

  // sets number
  const [number, setNumber] = useState(1);

  // increases number,
  // also when the number equals carouselArr.length
  // then the number is set to 0
  const increaseNumber = () => {
    if (number < carouselArr.length) {
      setNumber(number + 1);
    }
    else if (number === carouselArr.length) {
      setNumber(1);
    }
  }

  // decreases number,
  // also when the number equals 1 the nuumber is set to carouselArr.length
  const decreaseNumber = () => {
    if (number > 1) {
      setNumber(number - 1);
    }
    else if (number === 1) {
      setNumber(carouselArr.length);
    }
  }

  return (
    <div className="carousel">
      <h1>Gordon Ramsey Carousel</h1>
      {carouselArr.map(picture => (
        picture.id === number ?
          <CarouselItem
            key={picture.id}
            picture={picture}
          />
          :
          ''
      ))}
      <button onClick={decreaseNumber}>Previous</button>
      <button onClick={increaseNumber}>Next</button>
    </div>
  );
}

export default Carousel;
