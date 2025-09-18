import firstImage from '@assets/ourstory1_1758185447881.png';
import proposalImage from '@assets/ourstory2_1758185447882.png';
import midImage from '@assets/ourstory3_1758185447883.png';
import loopImage from '@assets/loop_1758185447881.png';
import loop1Image from '@assets/loop1_1758185447876.png';
import loop2Image from '@assets/loop2_1758185447876.png';
import loop3Image from '@assets/loop3_1758185447876.png';
import loop4Image from '@assets/loop4_1758185447877.png';
import loop5Image from '@assets/cover1_1758185447878.png';
import { useAnimationContext } from '@/contexts/AnimationContext';

const ImageLoop = () => {
  const { animationsEnabled } = useAnimationContext();
  const images = [
    firstImage,
    proposalImage,
    midImage,
    loopImage,
    loop1Image,
    loop2Image,
    loop3Image,
    loop4Image,
    loop5Image
  ];

  return (
    <section id="slideshow" className="image-loop-section w-full overflow-hidden py-4">
      <div className="image-loop-container">
        <div className={`${animationsEnabled ? 'image-loop-track' : 'image-loop-track-static'}`}>
          {/* First set of images */}
          {images.map((image, index) => (
            <div key={`set1-${index}`} className="image-loop-item">
              <img
                src={image}
                alt={`Andrei & Sam moment ${index + 1}`}
                className="image-loop-img"
                loading="lazy"
                data-testid={`img-loop-${index + 1}`}
              />
            </div>
          ))}
          {/* Duplicate set for seamless looping */}
          {images.map((image, index) => (
            <div key={`set2-${index}`} className="image-loop-item">
              <img
                src={image}
                alt={`Andrei & Sam moment ${index + 1} duplicate`}
                className="image-loop-img"
                loading="lazy"
                data-testid={`img-loop-dup-${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageLoop;