import React, { useEffect,  useState } from "react";
import Style from './style.module.scss';
import { Icon } from 'semantic-ui-react';

interface SliderItemProps {
    visible?: boolean
};

const SliderItem = (props: React.PropsWithChildren<SliderItemProps>) => {
    const { visible, children } = props;
    return (
        <div style={{ width: '100%', height: '100%', visibility: visible ? 'visible' : 'hidden' }}>
            {children}
        </div>
    )
}

interface SliderProps {
    key?: any;
    items: Array<React.ReactNode>,
    width?: string;
    height?: string;
    delay?: number;
}

const Slider = (props: SliderProps) => {
    const {key, width, height, delay, items } = props;

    const createTimeout = () => setTimeout(() =>  onRight(), delay? delay: 3000);
    const deleteTimeout = (instance: NodeJS.Timeout) => clearTimeout(instance);
    const updateTimeout = (instance: NodeJS.Timeout) => {
        deleteTimeout(instance);
        return createTimeout();
    }

    const [contentChanger, setContentChanger] = useState(createTimeout());
    const [activeKey, setActiveKey] = useState(0);

    const onLeft = () => setActiveKey(activeKey - 1 < 0 ? items.length - 1 : activeKey - 1);
    const onRight = () => setActiveKey(activeKey + 1 > items.length - 1 ? 0 : activeKey + 1);

    useEffect(() => {
        setContentChanger((prev) => updateTimeout(prev));
        return () => deleteTimeout(contentChanger);
    }, [activeKey]);

    return (
        <div key={key} className={Style.container} style={{ width: width? width : '100%', height: height? height: '100%' }}>
            <div className={Style.content} style={{width: '100%', height: '100%', color: 'white'}}>
                <SliderItem visible={true}>
                    {items[activeKey]}
                </SliderItem>
            </div>
            <div className={Style.buttons}>
                <Icon size='large' className={Style.button} name='arrow left' onClick={onLeft}/>
                <Icon size='large' className={Style.button} name='arrow right' onClick={onRight}/>
            </div>
        </div>
    )
}


export default Slider;