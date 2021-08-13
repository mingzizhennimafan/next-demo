import styled from "styled-components"

type ButtonProps = {
    className?: string | undefined
    onClick?: React.MouseEventHandler<HTMLElement>
}

const ButtonWarp = styled.button`
    line-height: 1.5715;
    position: relative;
    display: inline-block;
    font-weight: 400;
    white-space: nowrap;
    text-align: center;
    background-image: none;
    border: 1px solid transparent;
    cursor: pointer;
    transition: all .3s cubic-bezier(.645,.045,.355,1);
    user-select: none;
    touch-action: manipulation;
    height: 32px;
    padding: 4px 15px;
    font-size: 14px;
    border-radius: ${props => props.theme.radius.buttonRadius};
    color: #fff;
    border-color: ${props => props.theme.colors.primary};
    background: ${props => props.theme.colors.primary};
    text-shadow: 0 -1px 0 rgb(0 0 0 / 12%);
    box-shadow: 0 2px #0000000b;
    :hover, :focus {
    color: #fff;
    border-color: ${props => props.theme.colors.hover};
    background: ${props => props.theme.colors.hover};
}
`

const Button: React.FC<ButtonProps> = ({ className, children, onClick }) => {
    // Render
    return (
        <ButtonWarp className={className} onClick={onClick}>{children}</ButtonWarp>
    )
}

export default Button
