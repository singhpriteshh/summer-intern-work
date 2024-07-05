import 'bootstrap/dist/css/bootstrap.min.css';
import { Badge, Button } from 'react-bootstrap';

export default function Bdgmain() {
    return (
        <>
            <Badge bg="primary">Primary</Badge>
        </>
    );
}

function Btnbadge() {
    return (
        <>
            <Button variant="primary">
                Profile <Badge bg="secondary"></Badge>
            </Button>

        </>
    );
}

function Successbdge() {
    return (
        <>
            <Badge bg="success">Success</Badge>
        </>
    );
}

function Pillsuccessbadge() {
    return (
        <div>
            <Successbdge />

            <Badge pill bg="primary">
                Primary
            </Badge>
            <Badge pill bg="secondary">
                Secondary
            </Badge>
            <Badge pill bg="success">
                Success
            </Badge>
            <Badge pill bg="danger">
                Danger
            </Badge>
            <Badge pill bg="warning" text="dark">
                Warning
            </Badge>
            <Badge pill bg="info">
                Info
            </Badge>
            <Badge pill bg="light" text="dark">
                Light
            </Badge>
            <Badge pill bg="dark">
                Dark
            </Badge>

        </div>

    );
}


function Passbadge() {
    return (
        <>
            <Badge bg='success'>Pass</Badge>

        </>
    );
}


function Failbadge() {
    return (
        <>
            <Badge bg='danger'>Fail</Badge>
        </>
    );
}


export { Btnbadge, Pillsuccessbadge, Passbadge, Failbadge };