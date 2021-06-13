import {
  FooterStyled,
  FooterContainer,
  FooterTitle,
  AppList,
} from "./Footer.style";
import { Typography, Box } from "@material-ui/core";
const Footer = () => {
  return (
    <FooterStyled>
      <FooterContainer>
        <Box sx={{ maxWidth: "400px" }}>
          <FooterTitle>Quem somos</FooterTitle>
          <Typography variant="body2" sx={{ mt: 2 }}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias
            error, rerum ullam ipsa quisquam voluptatum velit illum, deleniti
            facere eveniet corrupti voluptatibus vitae in asperiores odit alias
            nobis officiis tenetur.
          </Typography>
        </Box>

        <Box>
          <FooterTitle>Baixe nossos aplicativos</FooterTitle>
          <AppList>
            <li>
              <a href="/" target={"_black"} rel={"noopener noreferrer"}>
                <img src="/img/logos/app-store.png" alt="App Store" />
              </a>
            </li>
            <li>
              <a href="/" target={"_black"} rel={"noopener noreferrer"}>
                <img src="/img/logos/google-play.png" alt="Google Play" />
              </a>
            </li>
          </AppList>
        </Box>
      </FooterContainer>
    </FooterStyled>
  );
};

export { Footer };
