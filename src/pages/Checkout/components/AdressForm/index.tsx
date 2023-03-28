import { DeliveryAdressForm } from "./styles";
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
                type="number"
                {...register("cep")}
                className="cep"
                error={errors.cep?.message}
            />

            <Input
                placeholder="Rua"
                {...register("street")}
                className="street"
                error={errors.street?.message}
            />

            <Input
                placeholder="Número"
                className="number"
                {...register("number")}
                error={errors.number?.message}
            />
            <Input
                placeholder="Complemento"
                className="complement"
                {...register("complement")}
                error={errors.complement?.message}
                rightText="Optional"
            />

            <Input
                placeholder="Bairro"
                className="neighborhood"
                {...register("neighborhood")}
                error={errors.neighborhood?.message}
            />

            <Input
                placeholder="Cidade"
                className="city"
                {...register("city")}
                error={errors.city?.message}
            />

            <Input
                placeholder="UF"
                className="uf"
                {...register("uf")}
                error={errors.uf?.message}
            />
        </DeliveryAdressForm>
    )
}