import { Bank, CreditCard, Money } from "phosphor-react";
import { FormOfPaymentMethods } from "./styles";

export function PaymentMethods() {
    return (
        <FormOfPaymentMethods>
            <button type="button" >
                <CreditCard /> CARTÃO DE CRÉDITO
            </button>

            <button type="button">
                <Bank /> CARTÃO DE DÉBITO
            </button>

            <button type="button">
                <Money /> DINHEIRO
            </button>
        </FormOfPaymentMethods>
    )
}