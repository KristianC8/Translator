import 'bootstrap/dist/css/bootstrap.min.css'
import { useStore } from './hooks/useStore'

function App () {

  const {fromLanguage, setFromLanguage} = useStore()
  console.log(fromLanguage)

  return (
    <div className="card">
      <h1>Translator</h1>
      <button onClick={() => {
        setFromLanguage('es')
      }}>Cambiar Loading</button>{fromLanguage}
    </div>
  )
}

export default App
