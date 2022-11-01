import {FormikForm, ReactHookForm, SimpleReactValidatorForm} from './components'

function App() {
  return (
    <div style={{
      display: 'flex',
      width: '100%',
      justifyContent: 'space-evenly'
    }}>
      <FormikForm/>
      <ReactHookForm/>
      <SimpleReactValidatorForm/>
    </div>
  );
}

export default App;
