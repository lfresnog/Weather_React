import React from 'react';
import './Styles.css';

const SearchFilter = (props) => {
    return (
        <div className='SearchFilter'>
            <input
                className="filter_input"
                type="text"
                placeholder="Search"
                onChange={e =>props.onClick.onLocation(e.target.value)}  
            />
        </div>
    );
};

export {SearchFilter as default}