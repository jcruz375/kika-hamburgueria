import React, { useState } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from 'reactstrap';


//import carrousselImg01 from '../../assets/images/carroussel.png'
//import carrousselImg02 from '../../assets/images/carroussel02.jpeg'//editar imagem (quebrou o layout)
//import carrousselImg03 from '../../assets/images/carroussel03.jpeg'//editar imagem (quebrou o layout)


const items = [
    {
        src: 'https://instagram.fcgh38-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/117431032_358578725134947_3738019891416613084_n.jpg?_nc_ht=instagram.fcgh38-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=9nH_XWJRNn4AX8CHQPX&oh=aedc24197a6cc0793e07c048366e4c88&oe=5F64F3A7',
        altText: 'Slide 1',
        caption: 'Slide 1'
    },
    {
        src: 'https://instagram.fcgh38-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.101.1440.1440a/s640x640/117222865_215714896513114_8251206031881118660_n.jpg?_nc_ht=instagram.fcgh38-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=HQgOkBLFDE8AX8BLyiW&oh=82d3c7c81ca414953a0a8a39d2cab3a9&oe=5F6541E5',
        altText: 'Slide 2',
        caption: 'Slide 2'
    },
    {
        src: 'https://instagram.fcgh38-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.179.1440.1440a/s640x640/116874628_2711902729094747_5760585771853528550_n.jpg?_nc_ht=instagram.fcgh38-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=xZMYwuLVEfUAX_HeoMD&oh=67a5b4df315c06b3d801a8392a3a3ef4&oe=5F636FB8',
        altText: 'Slide 3',
        caption: 'Slide 3'
    }
];


const Slider = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }

    const slides = items.map((item) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.src}
            >
                <img src={item.src} alt={item.altText} />
                <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
            </CarouselItem>
        );
    });

    return (
        <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous}
        >
            <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
            {slides}
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
        </Carousel>
    );
}

export default Slider;