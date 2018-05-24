export function square(num: number): number {
    return num * num;
}

// example, [2, 5, 10] --> [4, 25, 100]
export function squares(nums: Array<number>): Array<number> {
    return nums.map(n => n * n);
    // return nums.map(function (n) { return n * n; })
}

export const PI: number = 3.141567;
