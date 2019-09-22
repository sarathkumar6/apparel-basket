import React from 'react';
import { withRouter } from 'react-router-dom';
import './apparel.category.item.styles.scss';

const ApparelCategoryItem = ({title, imageUrl, size, history, linkUrl, match}) => (
    <div className={`${size} apparel-category-item`}
         onClick={() => history.push(`${match.url}${linkUrl}`)}>
        <div className="background-image" style={{
            backgroundImage: `url(${imageUrl})`
        }}/>
        <div className='item-content'>
            <h1 className='item-title'>{title.toUpperCase()}</h1>
            <span className='item-subtitle'>SHOP NOW</span>
        </div>
    </div>
);

export default withRouter(ApparelCategoryItem);