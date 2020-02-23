import { Dimensions } from 'react-native'

const colors = {
    /**
     * #E5D4ED
     */
    pink: '#E5D4ED',
    /**
     * #6D72C3
     */
    lightPurple: '#6D72C3',
    /**
     * #5941A9
     */
    mediumPurple: '#5941A9',
    /**
     * #514F59
     */
    neutralGrey: '#514F59',
    /**
     * #1D1128
     */
    darkGrey: '#1D1128',
    /**
     * #FFF
     */
    white: '#FFF'
}

const spacing = {
    /**
     * 8
     */
    xxs: 8,
    /**
     * 12
     */
    xs: 12,
    /**
     * 16
     */
    sm: 16,
    /**
     * 20
     */
    md: 20,
    /**
     * 24
     */
    lg: 24,
    /**
     * 30
     */
    xl: 30
}

const fontSize = {
    /**
     * 12
     */
    xs: 12,
    /**
     * 15
     */
    sm: 15,
    /**
     * 17
     */
    md: 17,
    /**
     * 20
     */
    lg: 20,
    /**
     * 24
     */
    xl: 24
}

const screen = {
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height
}

export const theme = {
    colors,
    spacing,
    fontSize,
    screen
}
