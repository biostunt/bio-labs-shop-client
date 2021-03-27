import React from "react";
import { RouteComponentProps, Router, useParams } from "react-router";
import { Link } from "react-router-dom";
import {Button, Icon} from 'semantic-ui-react'

interface Props extends RouteComponentProps {}

const Card = (props: Props) => {
    const { location, history } = props;

    const {id} = useParams<{id: string}>()
    return <div>
        product info with id: {id}
        <div>
            <Router history={history}>
                <Link to={`${location.pathname + '/change'}`}>
                    <Button basic color='green' animated='fade'>
                        <Button.Content visible>Изменить</Button.Content>
                        <Button.Content hidden><Icon name='edit'/></Button.Content>
                    </Button>
                </Link>
            </Router>
        </div>
    </div>
}

export default Card;