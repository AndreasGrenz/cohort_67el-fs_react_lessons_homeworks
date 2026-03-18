import {PageWrapper, Title, ClientsContainer, ClientCard, ClientLink} from "./styles"

function Clients () {
    return (
        <PageWrapper>
            <Title>Our Clients</Title>
            <ClientsContainer>
                <ClientCard>
                    <ClientLink to="/clients/apple">Apple</ClientLink>
                </ClientCard>

                <ClientCard>
                    <ClientLink to="/clients/samsung">Samsung</ClientLink>
                    
                </ClientCard>

                <ClientCard>
                    <ClientLink to="/clients/xiaomi">Xiaomi</ClientLink>
                </ClientCard>
            </ClientsContainer>
        </PageWrapper>
    );
}

export default Clients;