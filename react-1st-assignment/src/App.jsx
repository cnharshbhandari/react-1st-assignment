import  React  from 'react'
import Header from './components/Header'
import Content from './pages/content'
import Footer from './components/Footer'

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
