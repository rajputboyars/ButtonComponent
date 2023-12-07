import './App.css'
import Button from './components/Button'

function App() {
  const clickfun = () => {
    console.log("button clicked");
  }
  return (
    <>
      <Button type='default' onclick={clickfun}>
        Default Button
      </Button>
    </>
  )
}

export default App
