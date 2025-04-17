
import './App.css'
import ControlledFiled from './components/ControlledField/ControlledFiled'
import FormAction from './components/FormAction/FormAction'
import HookForm from './components/HookForm/HookForm'
import SimpleForm from './components/SimpleForm/SimpleForm'
import UnControlledFiled from './components/UnControlledFiled/UnControlledFiled'

function App() {


  return (
   <div>
   <h1 className='text-3xl'>Explore react form</h1>

   <div>

    {/* <SimpleForm></SimpleForm> */}

    {/* <FormAction></FormAction> */}

    {/* <ControlledFiled></ControlledFiled> */}
    {/* <UnControlledFiled></UnControlledFiled> */}

    <HookForm></HookForm>
   </div>
   </div>
  )
}

export default App
