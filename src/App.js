import React, { useRef } from 'react';
import './App.css';

function App() {

  const firstContentItem = useRef(null);
  const secondContentItem = useRef(null);
  const thirdContentItem = useRef(null);
  const fourthContentItem = useRef(null);

  const calcScrollHeight = React.useRef(0);
  const phonePicture = useRef(null);

  const hideAllContent = () => {
    console.log('hideAllContent');
    firstContentItem.current.style.color = '#212121';
    secondContentItem.current.style.color = '#212121';
    thirdContentItem.current.style.color = '#212121';
    fourthContentItem.current.style.color = '#212121';
  }
  
  const handleScroll = () => {
    const position = window.pageYOffset;
    calcScrollHeight.current = position;

    if(calcScrollHeight.current >= 0 && calcScrollHeight.current < 400) {
      hideAllContent();
      firstContentItem.current.style.color = 'white';
      phonePicture.current.style.backgroundImage = 'url(https://m.media-amazon.com/images/I/61V5dqKDaRL._SL1500_.jpg)';
    } else if(calcScrollHeight.current >= 400 && calcScrollHeight.current < 800) {
      hideAllContent();
      secondContentItem.current.style.color = 'white';
      phonePicture.current.style.backgroundImage = 'url(https://i.pinimg.com/564x/a6/7b/40/a67b4082507af475093efbc66ed6a435.jpg)';
    } else if(calcScrollHeight.current >= 800 && calcScrollHeight.current < 1200) {
      hideAllContent();
      thirdContentItem.current.style.color = 'white';
      phonePicture.current.style.backgroundImage = 'url(https://i.pinimg.com/originals/72/45/fb/7245fb0ca786bb4a98fb8465e437c5bb.jpg)';
    } else if(calcScrollHeight.current >= 1200 && calcScrollHeight.current < 1600) {
      hideAllContent();
      fourthContentItem.current.style.color = 'white';
      phonePicture.current.style.backgroundImage = 'url(https://i1.sndcdn.com/artworks-KxnTr8Nn2hHhjiFS-CsTeQg-t500x500.jpg)';
    }

    console.log(calcScrollHeight.current);
  };

  React.useEffect(() => {
    hideAllContent();
    firstContentItem.current.style.color = 'white';
    phonePicture.current.style.backgroundImage = `url("https://m.media-amazon.com/images/I/61V5dqKDaRL._SL1500_.jpg")`;
    console.log(phonePicture.current.style.backgroundImage)
    document.addEventListener('scroll', function(e) {
      handleScroll();
    });
  }, []);

  return (
    <>
      <div className='app-container'>
        <div className='app-content'>
          <div className='' ref={firstContentItem} >
            Doraemon
          </div>
          <div className='' ref={secondContentItem}>
            Shinchan
          </div>
          <div className='' ref={thirdContentItem}>
            Oggy
          </div>
          <div className='' ref={fourthContentItem}>
            bob
          </div>
        </div>
        <div className='app-phone'>
          <div className='phone-container'>
            <div className='phone-image-container' ref={phonePicture}>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}

export default App;
