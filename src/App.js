import logo1 from './assets/logo1.svg'
import logo2 from './assets/logo2.svg'
import icon1 from './assets/icon1.svg'
import icon2 from './assets/icon2.svg'
import icon3 from './assets/icon3.svg'
import icon4 from './assets/icon4.svg'
import profile1 from './assets/profile1.png';
import profile2 from './assets/profile2.png';
import styled from 'styled-components';

function App() {
  return (
    <>
      <SSection>
        <SDiv1>
          <img src={logo1} alt='' />
          <h1>INSCRIÇÕES ENCERRADAS</h1>

          <h2>Educação corporativa na transformação digital</h2>
          <h3>Como o digital pode revolucionar a aprendizagem</h3>

          <p><b>Com Renata Furlan e Richard Uchoa Vasconcelos</b></p>
          <p><b>12 de Setembro</b></p>
          <p><b>Horário:</b> 8h às 11h</p>
          <p><b>Local: </b>Centro de Treinamento da Crescimentum | Rua Otávio Tarquinio de Souza, 1187, Campo Belo - São Paulo -SP</p>
          <p><b>Entrada Social: </b>Traga 2kg de alimento não perecível</p>
        </SDiv1>
        <SDiv2>
          <img src={logo2} alt='' />
          <h2>As vagas estão esgotadas. Preencha o formulário abaixo para fazer parte da lista de espera do evento.</h2>

          <label>Nome*</label>
          <input type='text'></input>

          <label>Email*</label>
          <input type='text'></input>

          <label>Telefone*</label>
          <input type='tel'></input>

          <label>Empresa*</label>
          <input type='text'></input>

          <label>Área*</label>
          <input type='text'></input>

          <label for='cargo'>Qual seu cargo?</label>
          <select name='cargo'>
            <option value='proprietário(a)'>Proprietário(a)</option>
            <option value='CEO'>CEO</option>
            <option value='Gerente Geral'>Gerente Geral</option>
            <option value='Colaborador'>Colaborador</option>
          </select>

          <label>4 + 8 = ?</label>
          <input type='text'></input>

          <button>Quero me inscrever para a lista de espera</button>
        </SDiv2>
      </SSection>

      <SSection2>
        <SText>
          <h1>Sobre o Evento</h1>
          <hr></hr>
          <p>Não é novidade que as <b>tecnologias</b> estão impactando o dia a dia das organizações.
            As empresas vivem a chamada <b>transformação digital</b> e estão aproveitando a tecnologia para melhorar processos, performance e aumentar resultados.</p>
          <p>O jeito das <b>pessoas aprenderem</b> também mudou. Novos professores, como Google, Wikipedia e Youtube, surgiram e informações estão disponiveis o tempo todo.
            Por isso, <b>temos um novo perfil de colaboradores nas empresas.</b> De acordo com a Deloitte, as pessoas têm 1% da semana disponivel para dedicar-se a treinamento e desenvolvimento, uma média de 24 de minutos.</p>
          <p>Em meio a tantas mudanças, como os profissionais de T&D têm encontrado formas <b>inovadoras e adequadas</b> de <b>desenvolver pessoas?</b>
            O RH da sua empresa tem oferecido novas formas de levar conhecimento para as pessoas <b>utilizado a tecnologia</b> a seu favor?</p>
          <p>A <b>educação corporativa na transformação digital</b> é o tema do próximo <b>Manhã com RH</b> com os especialistas <b>Renata Furlan</b>, Head de Digital da Crescimentum e <b>Richard Uchoa Vasconcelos,</b> CEO da LEO Learning Brasil.
            Aprenda como o digital pode <b>revolucionar a aprendizagem</b> nas organizações! Participe e conheça: </p>
        </SText>

        <Grid>
          <img src={icon1} alt='' />
          <p>A revolução da aprendizagem a partir das novas tecnologias e como o RH pode utilizá- las a seu favor.</p>
          <img src={icon3} alt='' />
          <p>Ferramentas de Neurociência para potencializar o desenvolvimento de pessoas.</p>
          <img src={icon2} alt='' />
          <p>Estratégias de Educação Corporativa para atender ao novo perfil de colaboradores e universidades corporativas.</p>
          <img src={icon4} alt='' />
          <p>O papel do RH na Implementação do lifelong learning e blended learning nas organizações.</p>
        </Grid>

        <hr id='hr'></hr>
      </SSection2>

      <SSection3>
        <h1>Palestrantes</h1>
        <hr></hr>

        <Grid2>
          <div className='palestrante1'>
            <img src={profile1} alt='' />
            <h2>Renata Furlan</h2>
            <p>Head de Digital Learning na Crescimentum. É graduada em Psicologia e pós-graduada em Gestão de Pessoas.
              Atua há 17 anos na área de treinamento e desenvolvimento de pessoas.
            </p>
            <p>Atuou na condução de team buildings, programas de desenvolvimento de lideres, novos lideres e
              formação de profissionals de RH em diversos segmentos como indústria de cosméticos, automotivas,
              seguradoras e serviços financeiros.
            </p>
            <p>E Practitioner. Master em PNLe Trainer Traching pela Sociedade Braseira de PNI.
              Behavioral Analyst pela Thomas International, certificada em Coaching pessoal, profissional e
              de equipes pela Comunidade interraciona de Coaching.
              É especialista em Gestap de Cultura pelo Barrett Values Centre.
            </p>
          </div>

          <div className='palestrante2'>
            <img src={profile2} alt='' />
            <h2>Richard Uchoa Vasconcelos</h2>
            <p>É mestre em Tecnologias Educacionais pela University of Oxford e atua neste segmento há 10 anos,
              acumulando extensiva experiência em todos os aspectos relacionades a EAD, tecnologias e inovação
              para desenvolvimento profissional.
            </p>
            <p>E CEO da LEO Brasil, empresa global de capital aberto com tres décadas de experiência em soluções
              e tecnologias educacionais customizadas, entregues para clientes de mais de 50 países.
            </p>
            <p>Trabalhou mais de cinco anos na Universidade Estácio de Sa onde fal responsável por implantar
              novas tecnologias eduracionais e educação a distancia.
            </p>
          </div>
        </Grid2>

        <hr id='hr2'></hr>
      </SSection3>

      <SSection4>
        <p>Descubra como revolucionar a educação corporativa na sua organização e como o RH
          pode atuar de forma estratégica na transformação digital!
        </p>
        <button>Quero me inscrever</button>
      </SSection4>
    </>
  );
}

export default App;

// -------------------------------------STYLES-----------------------------------------------------//

const SSection = styled.section`
display: flex;
justify-content: center;
padding-left: 90px;
padding-right: 100px;
align-items: center;


`
const SDiv1 = styled.div`
display:flex;
flex-direction: column;
margin-top: -90px;
color: white;

& img {
  width: 300px;
  margin-left: 40px;
}

& h1 {
  margin-top: -70px;
  background-color: #E51892;
  color: white;
  width: 220px;
  text-align: center;
  align-items: center;
  font-size: 15px;
  margin-left: 80px;
}

& h2 {
  color: #FF6FC1;
  font-size: 20px;
  margin-top: 15px;
}

& h3 {
  margin-top: -10px;
  font-size: 18px;
  color: #FF6FC1;
  margin-bottom: 55px;
}

& p {
  font-size: 15px;
  margin-top: -5px;
}
`
const SDiv2 = styled.div`
display:flex;
flex-direction: column;
margin-top: -30px;
background-color: #272526;
color: white;
padding: 15px;
width: 415px;
margin-left: 150px;
height: 600px;


& img {
  width: 250px;
  margin-left: 75px;
  margin-top: -65px;
}

& h2 {
  text-align: center;
  margin-top: -70px;
  font-size: 15px;
  line-height: 30px;
  margin-bottom: 10px;
}

& label {
  font-size: 12px;
  padding-top: 10px;
}
& input {
  margin-top: 2px;
  height: 25px;
  width: 400px;
}

& select {
  height: 30px;
  width: 408px;
}

& button {
  background-color: #E51892;
  border: #E51892;
  margin-top: 15px;
  border-radius: 10px;
  font-size: 15px;
  padding: 20px;
  color: white;
  font-weight: 900;
  width: 400px;
  margin-left: 5px;

}
`
const SSection2 = styled.section`
background-color: white;
height: 800px;

& #hr {
  margin-top: 150px;
  width: 100px;
  border-top: 2px solid #FF6FC1;
}


`
const Grid = styled.div`
  display: grid;
  grid-template-columns: 260px 260px 260px 260px;
  grid-template-rows: 100px 100px;
  grid-column-gap: 5px;
  grid-row-gap: 5px;
  margin-left: 80px;
  margin-top: -40px;
  
  & p { 
    margin-left: -60px;
    margin-top: 120px;
    width: 350px;
    font-size: 15px;
  }
`
const SText = styled.div`
display: flex;
flex-direction: column;
justify-content: center;

& hr {
  width: 200px;
  border-top: 8px solid #FF6FC1;
  margin-bottom: 20px;
}


& h1 {
  margin-top: 30px;
  text-align: center;
  font-size: 30px;
}


& p {
  width: 1000px;
  font-size: 15px;
  margin-left: 200px;
  margin-top: 20px;
}
`
const SSection3 = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
background-color: white;
height: 900px;

& hr {
  width: 200px;
  border-top: 8px solid #FF6FC1;
  margin-bottom: 20px;
}

& h1 {
  margin-top: 10px;
  text-align: center;
  font-size: 30px;
}
& #hr2 {
  margin-top: 450px;
  width: 100px;
  border-top: 2px solid #FF6FC1;
}

`
const Grid2 = styled.div`
  display: grid;
  grid-template-columns: 500px 500px;
  grid-template-rows: 100px 100px;
  grid-column-gap: 55px;
  grid-row-gap: 5px;
  margin-left: 170px;
  margin-top: 40px;

  

  & .palestrante1 {
    display: flex;
    justify-items: center;
    flex-direction: column;

    & img {
      width: 120px;
      margin-left: 190px;
    }

    & h2 {
      text-align: center;
    }
  }

  & .palestrante2 {
    display: flex;
    justify-items: center;
    flex-direction: column;

    & img {
      width: 120px;
      margin-left: 190px;
    }

    & h2 {
      text-align: center;
    }
  }
`

const SSection4 = styled.section`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: #272526;

& p {
  line-height: 35px;
  width: 600px;
  color: white;
  text-align: center;
}

& button {
  background-color: #E51892;
  border: #E51892;
  margin-top: 10px;
  margin-bottom: 25px;
  border-radius: 10px;
  font-size: 15px;
  padding: 5px;
  color: white;
  font-weight: 900;
  width: 200px;
  margin-left: 5px;
  cursor: pointer;

}

`