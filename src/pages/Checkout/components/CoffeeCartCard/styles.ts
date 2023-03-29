import styled from "styled-components";

export const CoffeeCart = styled.div`
  display: flex;
  justify-content: space-between;

  padding-bottom: 1.5rem;
  margin-bottom: 1.5rem;

  border-bottom: 1px solid ${(props) => props.theme["gray-400"]};

  > div {
    display: flex;
    align-items: center;
    gap: 1.25rem;
  }

  img {
    width: 4rem;
    height: 4rem;
  }
`;

export const CoffeeCartElements = styled.div`
  display: flex;
  align-items: center;

  gap: 1rem;
`;

export const CoffeeCartActions = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;

  gap: 0.5rem;
`;

export const DeleteCoffeeCart = styled.button`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme["gray-400"]};
  border: 0;
  padding: 0.5rem 0.5rem;
  border-radius: 6px;
  font-size: 0.75rem;
  gap: 4px;
  color: ${(props) => props.theme["gray-700"]};

  svg {
    color: ${(props) => props.theme["purple-500"]};
    font-size: 20px;
  }

  :hover {
    transition: 0.4s;
    background-color: ${(props) => props.theme["gray-500"]};
  }
`;
