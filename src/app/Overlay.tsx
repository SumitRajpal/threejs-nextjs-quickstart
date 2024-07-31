import { Container, TopLeft, BottomLeft, BottomRight, Menu, BottomCenter } from './styles'
interface OverlayLayout {

}
export default function Overlay() {
    return (
        <Container>
            <BottomCenter>
                <h1>
                    DRONE
                    <br />
                    MATIC
                </h1>
            </BottomCenter>
            <BottomLeft>
                <button>Home</button>
            </BottomLeft>
            <BottomCenter>

                <button>Contact us</button>

            </BottomCenter>
            <BottomRight>
                <button>Contact us</button>
            </BottomRight>
        </Container>
    )
}
