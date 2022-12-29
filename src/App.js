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
        <h1>Palestrantes</h1>

      </SSection2>
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
height: 500px;
`

const SDiv1 = styled.div`
display:flex;
flex-direction: column;
margin-top: -90px;
color: white;

& img {
  width: 355px;
  margin-left: 40px;
}

& h1 {
  margin-top: -70px;
  background-color: red;
  color: white;
  width: 330px;
  text-align: center;
  align-items: center;
  font-size: 25px;
  margin-left: 50px;
}

& h2 {
  color: #FF6FC1;
  font-size: 30px;
  margin-top: 15px;
}

& h3 {
  margin-top: -10px;
  font-size: 28px;
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
height: 935px;


& img {
  width: 355px;
  margin-left: 28px;
  margin-top: -65px;
}

& h2 {
  text-align: center;
  margin-top: -90px;
  font-size: 20px;
  line-height: 30px;
  margin-bottom: 50px;
}

& label {
  font-size: 15px;
  padding-top: 10px;
}
& input {
  height: 25px;
  width: 400px;
}

& select {
  height: 30px;
  width: 408px;
}

& button {
  background-color: #FF6FC1;
  border: #FF6FC1;
  margin-top: 25px;
  border-radius: 10px;
  font-size: 20px;
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

`