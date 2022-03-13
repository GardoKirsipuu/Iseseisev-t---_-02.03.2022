import {injectableHook} from '../../core/inject';

type NetSalaryServiceData = {
    calculate: (salary: number) => number | undefined;
};

export const NetSalaryService = (): NetSalaryServiceData => {
    const calculate = (salary: number): number | undefined => {

        if (isNaN(salary)) return undefined;

        if (salary * 12 <= 14400) {
            salary = salary - 150
        }

        if (salary * 12 > 14400 && salary * 12 < 25200) {
            salary = salary - 300
        }

        if (salary * 12 >= 25200) {
            salary = salary - 600
        }

        return Math.round(salary * 100) / 100;
    };

    return {calculate};
};

export const useNetSalaryService = injectableHook(NetSalaryService);