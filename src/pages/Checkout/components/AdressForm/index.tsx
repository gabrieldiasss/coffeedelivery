import { DeliveryAdressForm, InputWrapper } from "./styles";
import { useFormContext } from 'react-hook-form'
import { Input } from "../../../../components/Input";

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

    return (
        <DeliveryAdressForm>
            <Input
                placeholder="CEP"
                {...register("cep")}
            />

            <Input
                placeholder="Rua"
                {...register("street")}
            />

            <Input
                placeholder="Número"
                {...register("number")}
            />
            <Input
                placeholder="Complemento"
                {...register("complement")}
            />

            <Input
                placeholder="Bairro"
                {...register("neighborhood")}
            />

            <Input
                placeholder="Cidade"
                {...register("city")}
            />

            <Input
                placeholder="Cidade"
                {...register("uf")}
            />
        </DeliveryAdressForm>
    )
}