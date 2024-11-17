import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import ImagesBox from './components/ImagesBox';
import GoodsGallery from './components/GoodsGallery';
import pearImage from './assets/pear.png';
import grapeImage from './assets/grape.png';
import peachImage from './assets/peach.png';
import appleImage from './assets/apple.png';
import cherryImage from './assets/cherry.png';
import kiwiImage from './assets/kiwi.png';
import orangeImage from './assets/orange.png';

const goods = [
  { imageUrl: pearImage, itemName: 'Pear', cost: 40 },
  { imageUrl: grapeImage, itemName: 'Grape', cost: 100 },
  { imageUrl: peachImage, itemName: 'Peach', cost: 50 },
  { imageUrl: appleImage, itemName: 'Apple', cost: 30 },
  { imageUrl: cherryImage, itemName: 'Cherry', cost: 100 },
  { imageUrl: kiwiImage, itemName: 'Kiwi', cost: 88 },
  { imageUrl: orangeImage, itemName: 'Orange', cost: 79 },
];

export default function App() {
  return (
    <div>
      <Header />
      <Content />
      <ImagesBox />
      <GoodsGallery goods={goods} />
    </div>
  );
}
