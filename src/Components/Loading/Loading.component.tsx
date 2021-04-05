import {Segment, Loader, Dimmer, Image} from 'semantic-ui-react'
import image from './short-paragraph.png'

const Loading = () => {
    return (
        <Segment>
            <Dimmer active inverted>
                <Loader inverted>Loading</Loader>
            </Dimmer>
            <Image src={image} />
        </Segment>
    )
}

export default Loading;