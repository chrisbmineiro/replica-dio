export interface IButton {
    title: string 
    variant?: string
    onClick: () => void
    type?: 'button' | 'submit' | 'reset'
}

export interface IButtonStyled {
    variant?: string
}