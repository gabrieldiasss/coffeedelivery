import { Clock, CurrencyDollar, MapPin } from "phosphor-react";
import { InfoWithIcon } from "../../components/InfoWithIcon";
import confirmedOrderIllustration from "../../assets/confirmed-order.svg";

import { OrderConfirmedContainer, OrderDetailsContainer } from "./styles";
import { useLocation, useNavigate } from "react-router-dom";
import { OrderData } from "../Checkout";
import { paymentMethods } from "../Checkout/components/PaymentMethods";
import { useEffect } from "react";
import { useTheme } from "styled-components";

interface LocationType {
  state: OrderData;
}

export function CheckoutSuccess() {
  const colors = useTheme();

  const { state } = useLocation() as unknown as LocationType;

  const navigate = useNavigate();

  useEffect(() => {
    if (!state) {
      navigate("/");
    }
  }, []);

  if (!state) return <></>;

  return (
    <OrderConfirmedContainer className="container">
      <div>
        <h2>Uhu! Pedido confirmado</h2>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </div>

      <section>
        <OrderDetailsContainer>
          <InfoWithIcon
            icon={<MapPin weight="fill" />}
            iconBg={colors["purple-500"]}
            text={
              <p>
                Entrega em <b>{state.street}</b>, {state.number}
                <br />
                {state.neighborhood} - {state.city}, {state.uf}
              </p>
            }
          />

          <InfoWithIcon
            icon={<Clock weight="fill" />}
            iconBg={colors["yellow-500"]}
            text={
              <p>
                Previsão de entrega
                <br />
                <b>20 min - 30 min</b>
              </p>
            }
          />

          <InfoWithIcon
            icon={<CurrencyDollar weight="fill" />}
            iconBg={colors["yellow-900"]}
            text={
              <p>
                Pagamento na entrega
                <br />
                <b>{paymentMethods[state.paymentMethod].label}</b>
              </p>
            }
          />
        </OrderDetailsContainer>
        <img src={confirmedOrderIllustration} />
      </section>
    </OrderConfirmedContainer>
  );
}
