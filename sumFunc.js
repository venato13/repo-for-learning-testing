export default function (...args) {
    const numbersArr = [...args];
    return numbersArr.reduce((acc, currentValue)=> acc+currentValue )
}