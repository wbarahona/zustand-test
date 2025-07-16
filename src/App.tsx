import {
  Updater,
  Consumer,
  AnotherConsumer,
  ComponentOne,
  ComponentTwo,
  ComponentThree,
  BulkerComponent,
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
    </div>
  );
}

export default App;
