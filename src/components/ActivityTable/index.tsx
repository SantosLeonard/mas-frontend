import {Container} from './styles';

export function ActivityTable(){
    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Unidade Curricular</th>
                        <th>Atividades</th>
                        <th>Avaliação</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Programação Web</td>
                        <td>Desenvolvimento do Frontend</td>
                        <td>8.5</td>
                        <td>05/04/2021</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}