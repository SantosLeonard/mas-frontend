import { Container } from "./styles";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { ActivityTable } from "../../components/ActivityTable";

export function Dashboard(){
    return(
        <>
            <Header/>
            <Container>
                <Summary/>
                <ActivityTable/>
            </Container>
        </>
    )
}