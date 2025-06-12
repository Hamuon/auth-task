export const validatePhone = (input: string) => /((0?9)|(\+?989))\d{9}/g.test(input);
