import './App.css';
import {PriceCalculations} from './forms/price-calculations/PriceCalculations';
import {CourseGrade} from './forms/course-grade/CourseGrade';
import {PaidVacationDays} from './forms/paid-vacation-days/PaidVacationDays';
import { NetSalary } from './forms/net-salary/NetSalary';

const App = () => (
  <div className="App">
    <header className="Header">
      <strong>Test Automation</strong> | Independent work
    </header>
    <main className="Main">
      <div className="Container">
        <PriceCalculations />
        <PaidVacationDays />
        <CourseGrade />
        <NetSalary />
      </div>
    </main>
  </div>
);

export default App;
