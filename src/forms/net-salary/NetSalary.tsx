import React, {useState} from 'react';
import {useNetSalaryService} from './NetSalaryService';

export const NetSalary: React.FC = () => {
    const {calculate} = useNetSalaryService();
    const [salary, setSalary] = useState<string>('');
    const [result, setResult] = useState<number>();

    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        setResult(calculate(+salary));
    };

    return(
    <form className="Form" onSubmit={handleSubmit}>
      <p><strong>04</strong> | Net salary calculation</p>
      <div className="row align-items-center">
        <div className="col col-4">
          <label className="Label">Salary</label>
          <input type="number" className="Input" value={salary} onChange={e => setSalary(e.target.value)} />
        </div>
      </div>
      <div className="row justify-content-between">
        <div className="col">
          <button type="submit" className="Button">Calculate</button>
        </div>
        <div className="col">
          <div className="Poster">
            <strong>Net Salary:</strong> {result ?? '-'}
          </div>
        </div>
      </div>
    </form>
    );
}