import  React  from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Content from './pages/content'

function App() {
  return (
    <>
      <div className='main'>
        <Header/>
        <Content/>
        <Footer/>
      </div>
    </>
  )
}

export default App
