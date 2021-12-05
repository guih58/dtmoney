import { Summary } from "../Summary"
import { TrasactionsTable } from "../TransactionsTable"
import { Container } from "./styles"

export function Dashborad(){
    return(
        <Container>
            <Summary />
            <TrasactionsTable></TrasactionsTable>
        </Container>
    )
}