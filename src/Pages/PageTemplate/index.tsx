import React from 'react';
import Header from './Header';

interface Props { };

const PageTemplate = (props: React.PropsWithChildren<Props>) => {
    const { children } = props;
    return <div className='page-container'>
        <div className="header-container">
            <Header/>
        </div>
        <div className="body-container">
            {children}
        </div>
    </div>
}

export default PageTemplate;