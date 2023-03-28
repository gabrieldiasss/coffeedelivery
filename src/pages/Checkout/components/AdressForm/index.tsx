import { DeliveryAdressForm, InputWrapper } from "./styles";
import { useFormContext } from 'react-hook-form'

interface ErrorsType {
    errors: {
        [key: string]: {
            message: string;
        }
    }
}

export function AdressForm() {

    const { register, formState } = useFormContext()

    const { errors } = formState as unknown as ErrorsType

    console.log(!!errors)

    return (
        <DeliveryAdressForm>
            <InputWrapper className="cep">
                <input placeholder="CEP" {...register("cep")} />
                <p>{errors.cep?.message}</p>
            </InputWrapper>

            <InputWrapper className="street" >
                <input placeholder="Rua" {...register("street")} />
                <p>{errors.street?.message}</p>
            </InputWrapper>

            <InputWrapper className="number">
                <input placeholder="Número" {...register("number")} />
                <p>{errors.number?.message}</p>
            </InputWrapper>

            <InputWrapper className="complement" >
                <input placeholder="Complemento" {...register("complement")} />
                <p>{errors.complement?.message}</p>
            </InputWrapper>

            <InputWrapper className="neighborhood">
                <input placeholder="Bairro" {...register("neighborhood")} />
                <p>{errors.neighborhood?.message}</p>
            </InputWrapper>

            <InputWrapper className="city">
                <input placeholder="Cidade" {...register("city")} />
                <p>{errors.city?.message}</p>
            </InputWrapper>

            <InputWrapper className="uf">
                <input placeholder="UF" {...register("uf")} />
                <p>{errors.uf?.message}</p>
            </InputWrapper>
        </DeliveryAdressForm>
    )
}