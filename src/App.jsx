
import './App.css'
import ControlledFiled from './components/ControlledField/ControlledFiled'
import FormAction from './components/FormAction/FormAction'
import SimpleForm from './components/SimpleForm/SimpleForm'

function App() {


  return (
   <div>
   <h1 className='text-3xl'>Explore react form</h1>

   <div>

    {/* <SimpleForm></SimpleForm> */}

    {/* <FormAction></FormAction> */}

    <ControlledFiled></ControlledFiled>
   </div>
   </div>
  )
}

export default App
