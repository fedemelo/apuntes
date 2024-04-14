import Container from '@mui/material/Container'

import AlgebraLineal from '@/notes/math/algebraLineal'

import { MathJaxContext } from "better-react-mathjax";


export default function NotesFrame() {
    return (<>
        <Container>
            <MathJaxContext>
                <AlgebraLineal />
            </MathJaxContext>
        </Container>
    </>)
}