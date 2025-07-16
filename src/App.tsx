import {
  Updater,
  Consumer,
  AnotherConsumer,
  ComponentOne,
  ComponentTwo,
  ComponentThree,
  BulkerComponent,
  Form,
} from './components';

function App() {
  return (
    <div>
      <h1>Zustand Example</h1>
      <Updater />
      <BulkerComponent />
      <ComponentOne>
        <ComponentTwo>
          <ComponentThree>
            <Consumer />
          </ComponentThree>
        </ComponentTwo>
      </ComponentOne>
      <ComponentOne>
        <ComponentTwo>
          <ComponentThree>
            <AnotherConsumer />
          </ComponentThree>
        </ComponentTwo>
      </ComponentOne>
      <Form />
    </div>
  );
}

export default App;
