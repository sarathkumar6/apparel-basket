import React from 'react';
import './apparel.category.styles.scss';
import ApparelCategoryItem from '../apparel-category-item/apparel.category.item.component';

class ApparelCategory extends React.Component {
    constructor() {
        super();

        this.state = {
            apparelSections: [
                {
                    title: 'hats',
                    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                    id: 1,
                    linkUrl: 'shop/hats'
                  },
                  {
                    title: 'jackets',
                    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                    id: 2,
                    linkUrl: 'shop/jackets'
                  },
                  {
                    title: 'sneakers',
                    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                    id: 3,
                    linkUrl: 'shop/sneakers'
                  },
                  {
                    title: 'womens',
                    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                    size: 'large',
                    id: 4,
                    linkUrl: 'shop/womens'
                  },
                  {
                    title: 'mens',
                    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                    size: 'large',
                    id: 5,
                    linkUrl: 'shop/mens'
                  }
            ]
        }
    }

    render() {
        return (
            <div className='apparel-category'>
                {
                    // Loop through the sections array and render apparel category item
                    this.state.apparelSections.map(({title, imageUrl, id, size}) => (
                        <ApparelCategoryItem title={title}
                                             imageUrl={imageUrl}
                                             key={id} 
                                             size={size}/>
                    ))
                }
            </div>
        )
    }
}

export default ApparelCategory;