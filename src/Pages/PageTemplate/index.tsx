import React from 'react';
import Header from './Header';
import Style from './style.module.scss';

interface Props { };

const PageTemplate = (props: React.PropsWithChildren<Props>) => {
    const { children } = props;
    return <div className={Style["page-container"]}>
        <div className={Style["header-container"]}>
            <Header/>
        </div>
        <div className={Style["body-container"]}>
            {children}
        </div>
    </div>
}

export default PageTemplate;