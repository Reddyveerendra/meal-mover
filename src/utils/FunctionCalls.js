/* eslint-disable no-useless-escape */

export function checkLog(email, password) {
    const isEmailValid = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/.test(email);
    const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/.test(password);

    if (!(isEmailValid && isPasswordValid)) {
        return "Please check email and password";
    }
    return null; // or return null if you want to be explicit about returning nothing
}
export function checkCreate(email, password, confirmPassword) {
    const isEmailValid = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/.test(email);
    const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/.test(password);
    if (!(isEmailValid && isPasswordValid && password === confirmPassword)) {
        return "Please check email and password";
    }
    return null; // or return null if you want to be explicit about returning nothing
}
