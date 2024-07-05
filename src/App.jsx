import './App.css';
import ContactHeader from './components/ContactHeader/ContactHeader';
import ContactForm from '../src/components/ContactForm/ContactForm';
import Navbar from './components/Navbar/Navbar';


function App() {

  return (
    <div>
      <Navbar/>
      <main className='main_container'>
      <ContactHeader/>
      <ContactForm/>
      </main>
    </div>
  )
} 

export default App
