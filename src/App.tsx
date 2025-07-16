import {
  Updater,
  Consumer,
  AnotherConsumer,
  ComponentOne,
  ComponentTwo,
  ComponentThree,
} from './components';

function App() {
  return (
    <div>
      <h1>Zustand Example</h1>
      <Updater />
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
