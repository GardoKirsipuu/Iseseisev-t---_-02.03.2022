import {injectableHook} from '../../core/inject';

type NetSalaryServiceData = {
    calculate: (salary: number) => number | undefined;
};

export const NetSalaryService = (): NetSalaryServiceData => {
    const calculate = (salary: number): number | undefined => {

        if (isNaN(salary)) return undefined;

        if (salary > 500) {
            salary = (salary - 500) * 0.8 + 500;
        }

        return Math.round(salary * 100) / 100;
    };

    return {calculate};
};

export const useNetSalaryService = injectableHook(NetSalaryService);