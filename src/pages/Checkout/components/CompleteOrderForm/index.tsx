import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react";
import { AdressForm } from "../AdressForm";
import { PaymentMethods } from "../PaymentMethods";
import { SectionTitle } from "../SectionTitle";
import { CompleteOrder, FormSectionContainer } from "./styles";

export function CompleteOrderForm() {

    return (
        <CompleteOrder>
            <h2>Complete seu pedido</h2>

            <FormSectionContainer>
               <SectionTitle
                    title="Endereço de entrega"
                    subtitle="Informe o endereço onde deseja receber seu pedido"
                    icon={<MapPinLine size={24} />}
               />

                <AdressForm />
            </FormSectionContainer>

            <FormSectionContainer>
                <SectionTitle
                    title="Pagamento"
                    subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
                    icon={<CurrencyDollar size={24} />}
                />

               <PaymentMethods />
            </FormSectionContainer>
        </CompleteOrder>
    )
}