
import { CoffeeShoppingCart } from "./components/CoffeeShoppingCart";
import { CheckoutContainer } from "./styles";
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, FormProvider } from 'react-hook-form'
import { AdressForm } from "./components/AdressForm";
import { CompleteOrderForm } from "./components/CompleteOrderForm";

const confirmOrderValidationSchema = zod.object({
    cep: zod.string().min(1, "Informe o CEP"),
    street: zod.string().min(1, "Informe o Rua"),
    number: zod.string().min(1, "Informe o Número"),
    complement: zod.string(),
    neighborhood: zod.string().min(1, "Informe o Bairro"),
    city: zod.string().min(1, "Informe a Cidade"),
    uf: zod.string().min(1, "Informe a UF"),
})

export type OrderData = zod.infer<typeof confirmOrderValidationSchema>

type ConfirmOrderFormData = OrderData

export function Checkout() {

    const confirmOrderForm = useForm<ConfirmOrderFormData>({
        resolver: zodResolver(confirmOrderValidationSchema)
    })

    const { handleSubmit } = confirmOrderForm

    function handleConfirmOrder(data: ConfirmOrderFormData) {
        console.log(data)
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