import Style from '../style.module.scss';
import { Button, Icon } from 'semantic-ui-react';
import { useState } from 'react';
import { Modal } from '../../../../Components';
import {Catalogue as CatalogueContent} from '../../../../Components'

const Catalogue = () => {
    const [open, setOpen] = useState(false);
    const onOpen = () => setOpen(true);
    const onClose = () => setOpen(false);

    return (
        <div className={Style['header-bottom-line-link']}>
            <Modal
                title='Catalogue'
                icon='list'
                onOpen={onOpen.bind(this)}
                onClose={onClose.bind(this)}
                open={open}
                content={<CatalogueContent/>}
                trigger={
                    <Button className={Style['header-bottom-line-button']} size='big' color='green'>
                        <Icon size='small' name='list' />
                        Catalogue
                    </Button>
                }
            />
        </div>
    )
}

export default Catalogue;