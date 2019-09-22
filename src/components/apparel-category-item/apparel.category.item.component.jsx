import React from 'react';
import './apparel.category.item.styles.scss';

const ApparelCategoryItem = ({title, imageUrl, size}) => (
    <div className={`${size} apparel-category-item`}>
        <div className="background-image" style={{
            backgroundImage: `url(${imageUrl})`
        }}/>
        <div className='item-content'>
            <h1 className='item-title'>{title.toUpperCase()}</h1>
            <span className='item-subtitle'>SHOP NOW</span>
        </div>
    </div>
);

export default ApparelCategoryItem;