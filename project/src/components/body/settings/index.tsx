import {
  Bookmark,
  Browsers,
  CheckCircle,
  Checks,
  CheckSquare,
} from "phosphor-react";
import {
  Container,
  Content,
  ContentBody,
  ContentFooter,
  ContentHeader,
  PasswordKey,
} from "./style";
import visa from "../../../assets/visa.png";
import master from "../../../assets/master.png";
import elo from "../../../assets/elo.png";
import american from "../../../assets/american.png";
import hipercard from "../../../assets/hipercard.png";
import { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { z } from "zod";
import { useForm } from "react-hook-form";

const passwordKey = z.object({
  passKey: z.string(),
});
type PasswordKey = z.infer<typeof passwordKey>;

export function Settings() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const [passwordKeyValidate1, setPasswordKeyValidate1] = useState(false);
  const [passwordKeyValidate2, setPasswordKeyValidate2] = useState(false);

  const {
    register: register1,
    handleSubmit: handleSubmit1,
    reset: reset1,
  } = useForm<PasswordKey>();
  const {
    register: register2,
    handleSubmit: handleSubmit2,
    reset: reset2,
  } = useForm<PasswordKey>();

  const passKeyCode = "72041c82abfb6a8fd50baae8cdcfeac3";
  const passKeyCodeSecond = "cff079c6104b05aa38f9618e68fd47c9";

  function handlePasswordKey1(data: PasswordKey) {
    if (data.passKey === passKeyCode) {
      setPasswordKeyValidate1(true);
    } else {
      setPasswordKeyValidate1(false);
    }
    reset1();
  }

  function handlePasswordKey2(data: PasswordKey) {
    if (data.passKey === passKeyCodeSecond) {
      setPasswordKeyValidate2(true);
    } else {
      setPasswordKeyValidate2(false);
    }
    reset2();
  }

  return (
    <>
      <Container>
        <Content data-aos="fade-up">
          <ContentHeader>
            <Browsers size={52} />
            <div>
              <p>
                LandingPage{" "}
                <CheckSquare color="#0046a1" size={22} weight="fill" />{" "}
              </p>
              <span>Entre 1 e 2 páginas</span>
            </div>
            <Bookmark size={52} color="#b4b8c9" weight="fill" />
          </ContentHeader>
          <ContentBody>
            <div>
              <p>Tenha um site moderno, responsivo e funcional</p>
              <span>
                Apresentamos um site profissional, rápido e totalmente
                responsivo, perfeito para qualquer negócio ou projeto. Com um
                design elegante e intuitivo, ele se adapta a qualquer
                dispositivo, garantindo uma experiência impecável para seus
                visitantes.
              </span>
              <span>
                <Checks color="#1c7fff" size={22} />
                Carregamento rápido e otimizado
              </span>
              <span>
                <Checks color="#1c7fff" size={22} />
                Interface moderna e fácil de navegar
              </span>
              <span>
                <Checks color="#1c7fff" size={22} />
                Totalmente Responsivo
              </span>
            </div>
          </ContentBody>
          <PasswordKey>
            {passwordKeyValidate1 && (
              <div data-aos="flip-up" >
                <span>
                  <p>Verificado com sucesso</p>
                  <p>
                    <CheckCircle color="#24a703" size={30} weight="fill" />
                  </p>
                </span>
                <small>(Você já pode fazer o pagamento)</small>
              </div>
            )}
            {!passwordKeyValidate1 && (
              <form onSubmit={handleSubmit1(handlePasswordKey1)}>
                <input
                  placeholder="Insira o código"
                  type="text"
                  {...register1("passKey")}
                />
                <button type="submit">Enviar</button>
              </form>
            )}
          </PasswordKey>
          <ContentFooter>
            <div>
              <p>
                R$ 400,00 <small>**confira as parcelas**</small>
              </p>
              <span>
                <img src={american} alt="" />
                <img src={visa} alt="" />
                <img src={elo} alt="" />
                <img src={master} alt="" />
                <img src={hipercard} alt="" />
              </span>
            </div>
            <button
              onClick={() =>
                (window.location.href = "https://mpago.la/1WUApHq")
              }
              disabled={!passwordKeyValidate1}
            >
              Comprar Projeto
            </button>
          </ContentFooter>
        </Content>
        <Content data-aos="fade-up">
          <ContentHeader>
            <Browsers size={52} />
            <div>
              <p>
                Site de Vendas
                <CheckSquare color="#0046a1" size={22} weight="fill" />{" "}
              </p>
              <span>Entre 1 e 2 páginas</span>
            </div>
            <Bookmark size={52} color="#f1c604" weight="fill" />
          </ContentHeader>
          <ContentBody>
            <div>
              <p>Tenha um site de Vendas, responsivo e funcional</p>
              <span>
                Está em busca de uma plataforma moderna e eficiente para vender
                comida ou qualquer outro tipo de produto online? Apresentamos um
                site completo e otimizado para vendas, com todas as
                funcionalidades essenciais para impulsionar seu negócio!
              </span>
              <span>
                <Checks color="#1c7fff" size={22} />
                Loja Virtual Intuitiva
              </span>
              <span>
                <Checks color="#1c7fff" size={22} />
                Carrinho de Compras
              </span>
              <span>
                <Checks color="#1c7fff" size={22} /> Login Seguro com Google
              </span>
              <span>
                <Checks color="#1c7fff" size={22} />
                Integração com WhatsApp Business
              </span>
            </div>
          </ContentBody>
          <PasswordKey>
          {passwordKeyValidate2 && (
              <div data-aos="flip-up" >
                <span>
                  <p>Verificado com sucesso</p>
                  <p>
                    <CheckCircle color="#24a703" size={30} weight="fill" />
                  </p>
                </span>
                <small>(Você já pode fazer o pagamento)</small>
              </div>
            )}
            {!passwordKeyValidate2 && (
              <form onSubmit={handleSubmit2(handlePasswordKey2)}>
                <input
                  placeholder="Insira o código"
                  type="text"
                  {...register2("passKey")}
                />
                <button type="submit">Enviar</button>
              </form>
            )}
          </PasswordKey>
          <ContentFooter>
            <div>
              <p>
                R$ 600,00 <small>**confira as parcelas**</small>
              </p>
              <span>
                <img src={american} alt="" />
                <img src={visa} alt="" />
                <img src={elo} alt="" />
                <img src={master} alt="" />
                <img src={hipercard} alt="" />
              </span>
            </div>
            <button
              onClick={() =>
                (window.location.href = "https://mpago.la/2XRoNSX")
              }
              disabled={!passwordKeyValidate2}
            >
              Comprar Projeto
            </button>
          </ContentFooter>
        </Content>
      </Container>
    </>
  );
}
