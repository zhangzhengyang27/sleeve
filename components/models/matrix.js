/**
 * @作者 7七月
 * @创建时间 2019-10-22 06:53
 */

class Matrix {
    m

    constructor(martix) {
        this.m = martix
    }

    // 获取多少行
    get rowsNum() {
        return this.m.length
    }

    get colsNum() {
        return this.m[0].length
    }

    //设计一个回调函数
    each(cb) {
        // 先从列遍历
        for (let j = 0; j < this.colsNum; j++) {
            for (let i = 0; i < this.rowsNum; i++) {
                const element = this.m[i][j]
                //将获取到的结果通过回调函数传出去
                cb(element, i, j)
            }
        }
    }

    //转秩的函数
    transpose() {
        const desArr = []
        for (let j = 0; j < this.colsNum; j++) {
            desArr[j] = []
            for (let i = 0; i < this.rowsNum; i++) {
                desArr[j][i] = this.m[i][j]
            }
        }
        return desArr
    }


}

export {
    Matrix
}