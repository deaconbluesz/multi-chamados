import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import logo from './assets/multi-bg.png'
import backgroundImage from './assets/bg2.jpg'

function App() {
  const [formData, setFormData] = useState({
    linha: '',
    posto: '',
    sintomas: '',
    departamento: '',
    observacao: ''
  })

  // Lista de opções para o campo "Linha"
  const linhasList = [
    'LT01', 'LT02', 'LT03', 'LT04', 'LT05', 'LT06', 
    'LT07', 'LT08', 'LT09', 'LT10', 'LRD2', 'LIM5', 'LRD1'
  ]

  // Lista de sintomas
  const sintomasList = [
    'Botão não atua', 'Bateria', 'Touchpad não atua', 'Sem imagem',
    'Placa não liga', 'Teste de corrente', 'HD não atua', 'Wi-fi não atua',
    'Falha de GPS', 'Jig desligando', 'Teclado não atua', 'Cabo Mic não atua',
    'SSD não atua', 'Pen-drive não atua', 'Speaker não atua', 'Vibrator não atua',
    'Alto falante não atua', 'Falha de GSM', 'Falha de Bluetooth', 'Botão não atua',
    'OTG não atua', 'Cabo LAN não atua', 'Agulha danificada', 'Scanner não atua',
    'Falha de Engate Rápido', 'Falha de cabo HDMI', 'Falha de cabo AV',
    'Falha de Sintonia', 'Cabo P2 não atua', 'Cabo Optical não atua',
    'Falha de Soundbar', 'Câmera não atua', 'Cabo Flat danificado',
    'Falha de USB', 'Cabo LCD danificado', 'Falha no Cabo Auxiliar',
    'Monitor não liga', 'Falha de áudio', 'Falha de bosa',
    'Falha no teste de voz', 'Fusível danificado', 'Led não liga',
    'Falha na leitura de etiqueta', 'Falha no teste de MAC',
    'Outro (Descrever nas OBS)'
  ]

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form Data Submitted:', formData)
  }

  return (
    <>
      {/* Container da imagem de fundo */}
      <div className="background-image" style={{ backgroundImage: `url(${backgroundImage})` }}></div>

      {/* Fundo com formas geométricas */}
      <div className="background-shapes">
        {/* Formas à esquerda */}
        <div className="shape circle" style={{ top: '10%', left: '5%', width: '120px', height: '120px' }}></div>
        <div className="shape square" style={{ top: '60%', left: '80%', width: '100px', height: '100px' }}></div>
        <div className="shape circle" style={{ top: '50%', left: '20%', width: '80px', height: '80px' }}></div>
        
        {/* Formas à direita */}
        <div className="shape circle right-shape" style={{ top: '20%', right: '10%', width: '150px', height: '150px' }}></div>
        <div className="shape square right-shape" style={{ top: '75%', right: '5%', width: '100px', height: '100px' }}></div>
        <div className="shape circle right-shape" style={{ top: '40%', right: '20%', width: '90px', height: '90px' }}></div>
      </div>

      {/* Header com logo à direita e texto centralizado */}
      <header className="navbar navbar-dark" style={{ backgroundColor: '#0000', padding: '1rem 2rem', position: 'relative' }}>
        <div className="container-fluid d-flex justify-content-center align-items-center">
          <a className="position-absolute end-0" href="#">
            <img className="logo" src={logo} alt="Logo" width="50" height="40" />
          </a>
          <span className="navbar-brand mb-0 h1" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
            Sistema de Chamados
          </span>
        </div>
      </header>

      {/* Conteúdo principal */}
      <div className="container d-flex align-items-center justify-content-center" style={{ minHeight: '90vh' }}>
        <div className="w-100" style={{ maxWidth: '500px' }}>
          <div className="card p-4">
            <form onSubmit={handleSubmit}>
              {/* Campo Linha como um select */}
              <div className="mb-3">
                <label htmlFor="linha" className="form-label">Linha</label>
                <select
                  id="linha"
                  name="linha"
                  value={formData.linha}
                  onChange={handleChange}
                  className="form-select"
                  required
                >
                  <option value="" disabled>Selecione a linha</option>
                  {linhasList.map((linha, index) => (
                    <option key={index} value={linha}>{linha}</option>
                  ))}
                </select>
              </div>

              <div className="mb-3">
                <label htmlFor="posto" className="form-label">Posto</label>
                <input
                  type="text"
                  id="posto"
                  name="posto"
                  value={formData.posto}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Digite o posto"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="departamento" className="form-label">Departamento</label>
                <select
                  id="departamento"
                  name="departamento"
                  value={formData.departamento}
                  onChange={handleChange}
                  className="form-select"
                  required
                >
                  <option value="" disabled>Selecione o departamento</option>
                  <option value="Engenharia de Processo">Engenharia de Processo</option>
                  <option value="Engenharia de Teste">Engenharia de Teste</option>
                  <option value="Qualidade">Qualidade</option>
                </select>
              </div>

              <div className="mb-3">
                <label htmlFor="sintomas" className="form-label">Sintomas</label>
                <select
                  id="sintomas"
                  name="sintomas"
                  value={formData.sintomas}
                  onChange={handleChange}
                  className="form-select"
                  required
                >
                  <option value="" disabled>Selecione o sintoma</option>
                  {sintomasList.map((sintoma, index) => (
                    <option key={index} value={sintoma}>{sintoma}</option>
                  ))}
                </select>
              </div>

              <div className="mb-3">
                <label htmlFor="observacao" className="form-label">Observação</label>
                <textarea
                  id="observacao"
                  name="observacao"
                  value={formData.observacao}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Digite uma observação (máximo 250 caracteres)"
                  rows="3"
                  maxLength="250"
                ></textarea>
                <div className="text-end text-muted">{formData.observacao.length} / 250</div>
              </div>

              <button type="submit" className="btn btn-primary w-100">Abrir chamado</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
