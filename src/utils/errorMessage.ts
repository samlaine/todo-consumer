type Variant = 'login' | 'register' | 'todo'

const errorMessages = {
    400: {
        login: 'Login failed, check your credentials and try again later.',
        register: 'User with same email exists. Try with different email or login.',
        todo: 'Error occured while executing request, check your internet connection or try again later.'
    },
    401: 'Session has expired, login required to refresh session.',
    500: 'Oops. Looks like something went wrong on our end :/ \n\n Try again later.'
}

export const getErrorMessageByErrorcode = (code: number, variant: Variant): string => {
    switch (code) {
        case 400:
            // bad request
            return errorMessages[code][variant]
        case 401:
            return errorMessages[code]
        case 500:
            // internal server error
            return errorMessages[code]
        default:
            return 'Oops. Something went wrong, try again later.'
    }
}
