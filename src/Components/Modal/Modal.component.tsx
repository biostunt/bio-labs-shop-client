import React from 'react';
import {Modal, Header} from 'semantic-ui-react'
import { SemanticICONS } from 'semantic-ui-react';



interface Props {
    basic?: boolean
    onOpen: () => void;
    onClose: () => void;
    open: boolean;
    icon?: SemanticICONS;
    title: string;
    trigger: React.ReactNode;
    content: React.ReactNode;
};

const ModalComponent = (props: React.PropsWithChildren<Props>) => {
    
    const { icon, title } = props;
    const { onOpen, onClose, open, trigger, basic } = props;
    const { children, content } = props;

    return (
        <Modal onOpen={props.onOpen} onClose={props.onClose} open={open} trigger={trigger} centered closeIcon basic={basic}>
            <Header icon={icon} content={title} />
            <Modal.Content>
                {content}
            </Modal.Content>
            {
                children ?
                    (
                        <Modal.Actions>
                            {children}
                        </Modal.Actions>
                    ) : ""
            }
        </Modal>
    )
}

export default ModalComponent;