import logo1 from './assets/logo1.svg'
import logo2 from './assets/logo2.svg'
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

          <p>Com Renata Furlan e Richard Uchoa Vasconcelos</p>
          <p>12 de Setembro</p>
          <p>Horário: 8h às 11h</p>
          <p><b>Local:</b>Centro de Treinamento da Crescimentum | Rua Otávio Tarquinio de Souza, 1187, Campo Belo - São Paulo -SP</p>
          <p><b>Entrada Social:</b>Traga 2kg de alimento não perecível</p>
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
          <input type='number'></input>

          <button>Quero me inscrever para a lista de espera</button>
        </SDiv2>
      </SSection>

    </>
  );
}

export default App;

// -------------------------------------STYLES-----------------------------------------------------//

const SSection = styled.section`
display: flex;
justify-content: center;
align-items: center;
padding: 200px;

`

const SDiv1 = styled.div`
display:flex;
flex-direction: column;
margin-top: -180px;
color: white;

& img {
  width: 355px;
  margin-left: 70px;
}

& h1 {
  margin-top: -50px;
  background-color: red;
  color: white;
  width: 400px;
  text-align: center;
  align-items: center;
  font-size: 30px;
  margin-left: 50px;
}

& h2 {
  color: #DB1D89;
  font-size: 35px;
}

& h3 {
  margin-top: -10px;
  font-size: 25px;
  color: #DB1D89;
}
`
const SDiv2 = styled.div`
display:flex;
flex-direction: column;

& img {
  width: 355px;
  border: 1px solid yellow;
}
`