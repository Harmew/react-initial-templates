import "styled-components";
import { Theme } from "../styles/theme";

// Definição do tema para o styled-components (tema global). Utilizado mais para autocompletar as props dos temas.
declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
