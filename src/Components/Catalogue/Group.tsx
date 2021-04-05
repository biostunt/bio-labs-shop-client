import { Menu, MenuItemProps } from "semantic-ui-react";



interface Props {
    id: number;
    name: string;
    activeGroup: string;
    onGroupChanged: (e: React.MouseEvent<HTMLAnchorElement>, id: number) => void;
}

const Group = (props: Props) => {
    const {id, name, activeGroup, onGroupChanged } = props;
    const onClick = (e: React.MouseEvent<HTMLAnchorElement>, { name }: MenuItemProps) => onGroupChanged(e, props.id);
    return (
        <Menu.Item
            name={name}
            active={`${id}` === activeGroup}
            onClick={onClick}
        />
    )
}

export default Group;