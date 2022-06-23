import { styled } from "@mui/material";
export const Title = ({title, subtitle}) => {
  return <>
  <StyledTitle>
    {title}
  </StyledTitle>
  <Subtitle>
    {subtitle}
  </Subtitle>  
  </>;
};
const StyledTitle = styled("h1")`
    font-size: 20px;
    text-align:center;
    margin-top: ${({theme})=>theme.spacing(4)};
`
const Subtitle = styled("h2")`
    font-size: 18px;
    font-weight:normal;
    text-align: center;
    margin-bottom: ${({theme})=>theme.spacing(5)};
    color:  ${({theme})=>theme.palette.text.secondary};
`