// ES6 Syntax 

// separately export different variables
// export const fullName = 'Nishant Singh'
// export const userName = '@nsnishant51'

// export all variables
// const fullName = 'Nishant Singh'
// const userName = '@nsnishant51'
// export { fullName, userName }

// Default export
// It lets you export only a single variable, array, object, function, etc., from your file.
// const fullName = 'Nishant Singh'
// const userName = '@nsnishant51'

// const userData = {
//     fullName,
//     userName
// }

// export default userData;

//ES5 Syntax
const fullName = 'Nishant Singh'
const userName = '@nsnishant51'

module.exports = {
    fullName,
    userName
}
