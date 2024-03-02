import styled from "styled-components";
import { BusinessLinkCard } from "../BusinessLinkCard";
import { businesses } from "../constants";

const Wrapper = styled.div`
  // border: black solid 2px;
  margin: auto;
`;

export const BusinessLinks = () => {
  return (
    <Wrapper>
      {businesses.map(({ name, address, website, icon }) => (
        <BusinessLinkCard
          name={name}
          address={address}
          website={website}
          icon={icon}
        />
      ))}
    </Wrapper>
  );
};
