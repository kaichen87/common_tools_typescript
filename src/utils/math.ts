/**
 * 常用数学方法
 *
 * @export
 * @interface IUtilsMath
 */
export interface IUtilsMath {
    add(numList: number[]): number;
}

export class UtilsMath implements IUtilsMath {
    /**
     * 加法，传入需要相加的数组成的数组
     * 此方法主要用于解决小数相加精度的问题
     * @export
     * @param {number[]} numList
     * @returns {number}
     */
    add(numList: number[]): number {
        if (numList.length === 1) {
            return numList[0];
        }
        let maxDecimalsLen = 0;
        for (const tempNum of numList) {
            const decimalsLen = tempNum.toString().split('.')[1].length;
            maxDecimalsLen = Math.max(maxDecimalsLen, decimalsLen);
        }
        const tempPow = Math.pow(10, maxDecimalsLen);
        let tempSum = 0;
        for (const tempNum of numList) {
            tempSum = tempSum + tempNum * tempPow;
        }
        return Number((tempSum / tempPow).toFixed(maxDecimalsLen));
    }
}