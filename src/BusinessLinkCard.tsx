import styled from "styled-components";
import { BusinessProps } from "./types";
import { useWindowDimensions } from "./hook/useWindowDimensions";

const Wrapper = styled.div`
  text-align: left;
  margin-bottom: 1rem;
  padding: 1rem 0.8rem;
  // border: 1px solid black;
  display: flex;
  gap: 12px;
  align-items: center;
  flex-wrap: wrap;
`;
const Company = styled.div`
  font-size: 1.6rem;
`;
const Icon = styled.div<{ img: string | undefined }>`
  width: 36px;
  height: 36px;
  background-image: url(${({ img }) => img});
  background-size: contain;
  background-repeat: no-repeat;
`;
const TopRow = styled.div`
  display: flex;
  gap: 10px;
  line-height: 0;
  align-items: baseline;
  flex-wrap: wrap;
  line-height: 24px;
`;

export const BusinessLinkCard: React.FC<BusinessProps> = ({
  name,
  address,
  website,
  icon,
}) => {
  const { width } = useWindowDimensions();

  const isSmallWindow = width < 615;
  const LargeLayout = () => {
    return (
      <>
        <Icon img={icon} />
        <div>
          <TopRow>
            <Company>
              <strong>{name}</strong>
            </Company>
            <div>{address}</div>
          </TopRow>
          <div>
            <a href={website} target="_blank" rel="noopener noreferrer">
              Website
            </a>
          </div>
        </div>
      </>
    );
  };

  const SmallLayout = () => {
    return (
      <>
        <div>
          <TopRow style={{ marginBottom: "6px" }}>
            <Icon img={icon} />
            <Company>
              <strong>{name}</strong>
            </Company>
          </TopRow>
          <div>{address}</div>
          <div>
            <a
              style={{ wordWrap: "break-word" }}
              href={website}
              target="_blank"
              rel="noopener noreferrer"
            >
              Website
            </a>
          </div>
        </div>
      </>
    );
  };
  return <Wrapper>{isSmallWindow ? <SmallLayout /> : <LargeLayout />}</Wrapper>;
};
