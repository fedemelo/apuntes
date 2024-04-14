import Container from '@mui/material/Container'

import Notacion from '@/apuntes/matematica/Notacion';

import { MathJaxContext } from "better-react-mathjax";


export default function NotesFrame() {
    return (<>
        <Container>
            <MathJaxContext>
                <Notacion />
            </MathJaxContext>
        </Container>
    </>)
}