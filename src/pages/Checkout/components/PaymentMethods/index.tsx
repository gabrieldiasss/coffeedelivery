import { Bank, CreditCard, Money } from "phosphor-react";
import { PaymentMethodInput } from "../PaymentMethodInput";
import { FormOfPaymentMethods } from "./styles";
import { useFormContext } from 'react-hook-form'

export const paymentMethods = {
    credit: {
        label: "Cartão de Crédito",
        icon: <CreditCard size={16} />
    },
    debit: {
        label: "Cartão de Débito",
        icon: <Bank size={16}/>
    },
    money: {
        label: "Dinheiro",
        icon: <Money size={16}/>
    }
}

export function PaymentMethods() {

    const { register,formState: { errors } } = useFormContext()

    const paymentmethodError = errors.paymentMethod?.message as unknown as string

    return (
        <FormOfPaymentMethods>
            {Object.entries(paymentMethods).map(([key, {label, icon}]) => (
                <PaymentMethodInput
                    key={label}
                    icon={icon}
                    label={label}
                    value={key}
                    {...register("paymentMethod")}
                />
            ))}
            {paymentmethodError && <p>{paymentmethodError}</p>}
        </FormOfPaymentMethods>
    )
}