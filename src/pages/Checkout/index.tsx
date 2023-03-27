import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react";
import { CoffeeShoppingCart } from "./components/CoffeeShoppingCart";
import { CheckoutContainer, CompleteOrder, DeliveryAdress, FormOfPayment, FormOfPaymentMethods } from "./styles";
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, FormProvider } from 'react-hook-form'
import { AdressForm } from "./components/AdressForm";

const confirmOrderValidationSchema = zod.object({
    cep: zod.string().min(1, "Informe o CEP"),
    street: zod.string().min(1, "Informe o Rua"),
    number: zod.string().min(1, "Informe o Número"),
    complement: zod.string(),
    neighborhood: zod.string().min(1, "Informe o Bairro"),
    city: zod.string().min(1, "Informe a Cidade"),
    uf: zod.string().min(1, "Informe a UF"),
   /*  paymentMethod: zod.nativeEnum(PaymentMethods, {
      errorMap: () => {
        return { message: "Informe o método de pagamento" };
      },
    }), */
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
                <CompleteOrder>
                    <h2>Complete seu pedido</h2>

                    <DeliveryAdress>
                        <header>
                            <MapPinLine size={24} />

                            <div>
                                <p>Endereço da entrega</p>
                                <p>Informe o endereço onde deseja receber seu pedido</p>
                            </div>
                        </header>

                       <AdressForm />
                    </DeliveryAdress>

                    <FormOfPayment>
                        <header>
                            <CurrencyDollar size={24} />

                            <div>
                                <p>Pagamento</p>
                                <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
                            </div>
                        </header>

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
                    </FormOfPayment>
                </CompleteOrder>

                <CoffeeShoppingCart />
            </CheckoutContainer>
        </FormProvider>
    )
}