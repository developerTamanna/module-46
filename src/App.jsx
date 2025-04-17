
import './App.css'
import ControlledFiled from './components/ControlledField/ControlledFiled'
import FamilyTree from './components/FamilyTree/FamilyTree'
import FormAction from './components/FormAction/FormAction'
import HookForm from './components/HookForm/HookForm'
import ProductMAnwgement from './components/ProductManagement/ProductMAnwgement'
import SimpleForm from './components/SimpleForm/SimpleForm'
import UnControlledFiled from './components/UnControlledFiled/UnControlledFiled'

function App() {


  return (
   <div>
   <h1 className='text-3xl p-5 font-bold'>Explore react form</h1>

   <div>

    {/* <SimpleForm></SimpleForm> */}

    {/* <FormAction></FormAction> */}

    {/* <ControlledFiled></ControlledFiled> */}
    {/* <UnControlledFiled></UnControlledFiled> */}

    {/* <HookForm></HookForm> */}

    {/* <ProductMAnwgement></ProductMAnwgement> */}

    <FamilyTree></FamilyTree>
   </div>
   </div>
  )
}

export default App
