import { useState } from 'react'
import './App.css'

function App() {
  // procura no servidor o cep informado e retorna o logradouro
  const [cep, setCep] = useState('')
  const [logradouro, setLogradouro] = useState('')
  const [bairro, setBairro] = useState('')
  const [localidade, setLocalidade] = useState('')
  const [uf, setUf] = useState('')

  const [loading, setLoading] = useState(false)
  const [show, setShow] = useState(false)

  const handleButtonClick = () => {
    setLogradouro('')
    setBairro('')
    setLocalidade('')
    setUf('')

    setShow(false)
    setLoading(true)
    setTimeout(() => {
      const url = `https://viacep.com.br/ws/${cep}/json/`;

      fetch(url)
        .then(response => response.json())
        .then(data => {
          setLogradouro(data.logradouro)
          setBairro(data.bairro)
          setLocalidade(data.localidade)
          setUf(data.uf)
          console.log(data)

          setShow(true)
          setLoading(false)
        })
        .catch(error => console.log(error));

    }, 1000)
  }

  const handleCepChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCep(event.target.value)
    setLogradouro('')
    setBairro('')
    setLocalidade('')
    setUf('')
  }

  return (
    <>
      <h2>Logradouro por CEP</h2>
      <div>
        <label htmlFor="cep">CEP: </label>
        <input type="text" id="cep" name="cep" value={cep} onChange={e => handleCepChange(e)} />
        <button type="button" onClick={handleButtonClick}>
          {loading ? 'Buscando...' : 'Pesquisar'}
        </button>
      </div>
      <div>
        {
          logradouro && <h3 style={{ 'display': show ? 'block' : 'none' }}>Resultado de {cep}</h3>
        }
        <p>{logradouro}</p>
        <p>{bairro}</p>
        <p>{localidade}</p>
        <p>{uf}</p>
      </div>

    </>
  )
}

export default App
