import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Menu } from 'semantic-ui-react';
import { IStoreState } from '../../Store';
import Style from './style.module.scss';
import Loading from '../Loading/Loading.component';
import Group from './Group';
import Categories from './Categories';


const groupItems = [
    {
        id: 1,
        name: 'Computers',
        categories: [
            {
                id: 1,
                name: 'cpu'
            },
            {
                id: 2,
                name: 'gpu'
            }
        ]
    },
    {
        id: 2,
        name: 'Vehicles',
        categories: [
            {
                id: 1,
                name: 'cars'
            },
            {
                id: 2,
                name: 'tractors'
            }
        ]
    }
]


/**
 * @important This is a [Richfull] component. It means, that you can use it only for a main catalogue
 * @description Catalogue component that renders all groups and categories.
 * @returns JSX.Element
 */
const Catalogue = () => {
    //useSelector((state: IStoreState) => state.catalogue.groups);
    const groups = groupItems;
    const [loading, setLoading] = useState(true);
    const [activeGroup, setActiveGroup] = useState('1');

    const onGroupChanged = (e: React.MouseEvent<HTMLAnchorElement>, id: number) => setActiveGroup(`${id}`);

    useEffect(() => {
        if (groups.length > 0) {
            setLoading(false);
            setActiveGroup(`${groups[0].id}`);
        }
    }, [groups])

    useEffect(() => {
        setTimeout(() => setLoading(false), 2000);
    }, [])

    if (loading) {
        return <Loading/>
    } else {
        return (
            <div className={Style.container}>
                <div className={Style.groups}>
                    <Menu fluid vertical tabular activeIndex={activeGroup}>
                        {
                            groups.map((e, i) =>
                                <Group
                                    key = {i + 1}
                                    id={e.id}
                                    name={e.name}
                                    activeGroup={activeGroup}
                                    onGroupChanged={onGroupChanged}
                                />
                            )
                        }
                    </Menu>
                </div>
                <div className={Style.content}>
                    <Categories items={groups.filter(e => `${e.id}` === activeGroup)[0].categories} />
                </div>
            </div>
        )
    }
}
export default Catalogue;