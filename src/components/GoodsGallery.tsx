import { GoodsGalleryItem } from '../types';
import GoodsCard from './GoodsCard';

interface IGoodsGalleryProps {
  goods: GoodsGalleryItem[];
}

export default function GoodsGallery({ goods }: IGoodsGalleryProps) {
  return (
    <div>
      <h2>Завдання 2</h2>
      <div
        style={{ width: '410px', display: 'flex', flexWrap: 'wrap', gap: '10px' }}
      >
        {goods.map(item => (
          <GoodsCard
            key={item.imageUrl}
            cost={item.cost}
            imageUrl={item.imageUrl}
            itemName={item.itemName}
          />
        ))}
      </div>
    </div>
  );
}
