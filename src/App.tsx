import style from './App.module.scss';
import Card from './components/Card';
import Form from './components/Form';
import Calendar from './components/Calendar';
import EventList from './components/EventList';
import { RecoilRoot } from "recoil";

function App() {
  return (
    <RecoilRoot>
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
    </RecoilRoot>
  );
}

export default App;
