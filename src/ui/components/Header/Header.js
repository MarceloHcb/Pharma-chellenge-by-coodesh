import { styled } from "@mui/material";
import { theme } from "../../themes/themes";
import { MdPersonSearch } from "react-icons/md";

export const Header = () => {
  return (
    <>
      <HeaderStyled>
        <Div>
          <Logo
            src="https://princepharma.co/wp-content/uploads/2019/08/Prince-Pharma-Icon.png"
            alt="Logo"
          ></Logo>
          <h1>Pharma .Inc</h1>
        </Div>
        <Icon>
          <MdPersonSearch />
        </Icon>
      </HeaderStyled>
    </>
  );
};
const HeaderStyled = styled("header")`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #f0f0f0;
  padding: ${() => theme.spacing(4)};
`;
const Logo = styled("img")`
  width: 100px;
`;
const Div = styled("div")`
  display: flex;
`;
const Icon = styled("div")`
  width: 200px;
  font-size: 40px;
`;