import carImg from '../assets/bmw-sport.jpg';
import { Stack, Button } from 'react-bootstrap';
import Navbar from './Navbar';

import { useTranslation } from 'react-i18next';

function ComponentA() {

    const { t } = useTranslation();
    return (
        <div>
            <Navbar />
            {
                t("text2")
            }
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