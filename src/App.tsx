import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import ImagesBox from './components/ImagesBox';
import GoodsGallery from './components/GoodsGallery';

const goods = [
  {
    imageUrl: '/src/assets/pear.png',
    itemName: 'Pear',
    cost: 40,
  },
  {
    imageUrl: '/src/assets/grape.png',
    itemName: 'Grape',
    cost: 100,
  },
  {
    imageUrl: '/src/assets/peach.png',
    itemName: 'Peach',
    cost: 50,
  },
  {
    imageUrl: '/src/assets/apple.png',
    itemName: 'Apple',
    cost: 30,
  },
  {
    imageUrl: '/src/assets/cherry.png',
    itemName: 'Cherry',
    cost: 100,
  },
  {
    imageUrl: '/src/assets/kiwi.png',
    itemName: 'Kiwi',
    cost: 88,
  },
  {
    imageUrl: '/src/assets/orange.png',
    itemName: 'Orange',
    cost: 79,
  },
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
