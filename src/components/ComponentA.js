import carImg from '../assets/bmw-sport.jpg';
import { Stack, Button } from 'react-bootstrap';
import Navbar from './Navbar';

function ComponentA() {
    return (
        <div>
            <Navbar />
            <Stack direction="horizontal" gap={2}>
                <Button as="a" variant="primary">
                    Button as link
                </Button>
                <Button as="a" variant="success">
                    Button as link
                </Button>
            </Stack>
            <img src={carImg} alt="bmw car" />
        </div>
    )
}

export default ComponentA;