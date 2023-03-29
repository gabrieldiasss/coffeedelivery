import { OrderConfirmedContainer, OrderDetailsContainer } from "./styles";

export function CheckoutSuccess() {
  return (
    <OrderConfirmedContainer className="container">
      <div>
        <h2 size="l">Uhu! Pedido confirmado</h2>
        <p>
          Agora é só aguardar que logo o café chegará até você
        </p>
      </div>

      <section>
        <OrderDetailsContainer>
          <InfoWithIcon
            icon={<MapPin weight="fill" />}
            iconBg={colors["brand-purple"]}
            text={
              <RegularText>
                Entrega em <strong>{state.street}</strong>, {state.number}
                <br />
                {state.district} - {state.city}, {state.uf}
              </RegularText>
            }
          />

          <InfoWithIcon
            icon={<Clock weight="fill" />}
            iconBg={colors["brand-yellow"]}
            text={
              <RegularText>
                Previsão de entrega
                <br />
                <strong>20 min - 30 min</strong>
              </RegularText>
            }
          />

          <InfoWithIcon
            icon={<CurrencyDollar weight="fill" />}
            iconBg={colors["brand-yellow-dark"]}
            text={
              <RegularText>
                Pagamento na entrega
                <br />
                <strong>{paymentMethods[state.paymentMethod].label}</strong>
              </RegularText>
            }
          />
        </OrderDetailsContainer>
        <img src={confirmedOrderIllustration} />
      </section>
    </OrderConfirmedContainer>
  );
}
