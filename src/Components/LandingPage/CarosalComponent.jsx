import React from 'react';
import Carousel from 'react-elastic-carousel';
import '../../style/slide.css'


const CarosalComponent = () => {
    const breakPoints = [
        {
            width: '100%', itemsToShow: 4, itemsToScroll: 1, activePage: false
        }
    ]
    const items = [
        { id: 1, title: 'item #1' },
        { id: 2, title: 'item #2' },
        { id: 3, title: 'item #3' },
        { id: 4, title: 'item #4' },
        { id: 1, title: 'item #1' },
        { id: 2, title: 'item #2' },
        { id: 3, title: 'item #3' },
        { id: 4, title: 'item #4' },
        { id: 5, title: 'item #5' }
    ]

    return (
        <div className="styling-example">
            <h1 className="h1-heading">Offers & deals</h1>
            <Carousel breakPoints={breakPoints} autoTabIndexVisibleItems={true} className="rec.rec-arrow" >
                {items.map(item => <div className='sliderDiv' key={item.id}>{item.title}</div>)}
            </Carousel>
        </div>
    )
}

export default CarosalComponent
