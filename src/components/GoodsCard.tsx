import { GoodsGalleryItem } from '../types';
import './GoodsCard.css';

export default function GoodsCard({
  imageUrl,
  itemName,
  cost,
}: GoodsGalleryItem) {
  return (
    <div className="goodsCard">
      <div className="img-container">
        <img className="goodsImage" src={imageUrl} alt={itemName} />
        <p>{itemName}</p>
      </div>
      <p className="cost">Cost: {cost} grn</p>
    </div>
  );
}
