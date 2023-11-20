import style from './App.module.scss';
import Card from './components/Card';
import Form from './components/Form';
import Calendar from './components/Calendar';
import EventList from './components/EventList';
import { RecoilRoot } from "recoil";
import { Suspense } from "react";
import DebugObserver from './components/DebuggerObserver';

function App() {
  return (
    <RecoilRoot>
      <DebugObserver />
      <Suspense fallback="Está carregando">
        <div className={style.App}>
          <div className={style.Column}>
            <Card>
              <Form />
            </Card>
            <hr />
            <Card>
              <EventList />
            </Card>
          </div>
          <div className={style.Column}>
            <Calendar />
          </div>
        </div>
      </Suspense>
    </RecoilRoot>
  );
}

export default App;
