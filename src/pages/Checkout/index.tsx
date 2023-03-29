import { CoffeeShoppingCart } from "./components/CoffeeShoppingCart";
import { CheckoutContainer } from "./styles";
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, FormProvider } from 'react-hook-form'
import { CompleteOrderForm } from "./components/CompleteOrderForm";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CoffeeCartContext } from "../../contexts/CoffeeCartContext";

enum PaymentMethods {
    money = "money",
    credit = "credit",
    debit = "debit",
}

const confirmOrderValidationSchema = zod.object({
    cep: zod.string().min(1, "Informe o CEP"),
    street: zod.string().min(1, "Informe o Rua"),
    number: zod.string().min(1, "Informe o Número"),
    complement: zod.string(),
    neighborhood: zod.string().min(1, "Informe o Bairro"),
    city: zod.string().min(1, "Informe a Cidade"),
    uf: zod.string().min(1, "Informe a UF"),
    paymentMethod: zod.nativeEnum(PaymentMethods, {
        errorMap: () => {
          return { message: "Informe o método de pagamento" };
        },
      }),
})

export type OrderData = zod.infer<typeof confirmOrderValidationSchema>

type ConfirmOrderFormData = OrderData

export function Checkout() {

    const { cleanCart } = useContext(CoffeeCartContext)

    const confirmOrderForm = useForm<ConfirmOrderFormData>({
        resolver: zodResolver(confirmOrderValidationSchema)
    })

    const { handleSubmit } = confirmOrderForm

    const navigate = useNavigate()

    function handleConfirmOrder(data: ConfirmOrderFormData) {
        navigate("/success", {
            state: data
        })
        cleanCart()
    }

    return (
        <FormProvider {...confirmOrderForm}>
            <CheckoutContainer onSubmit={handleSubmit(handleConfirmOrder)}>
                <CompleteOrderForm />

                <CoffeeShoppingCart />
            </CheckoutContainer>
        </FormProvider>
    )
}