import styled, {css} from "styled-components";

type StyledBtnPropsType = {
    btnType: "primary" | "outlined"
    color?: string
}

export const StyledBtn = styled.button<StyledBtnPropsType>`
    width: 86px;
    height: 30px;
    border: none;
    border-radius: 5px;
    
    &:hover {
        background: none;
        color: #4E71FE;
    }

    
    ${props => props.btnType === "primary" &&  css<StyledBtnPropsType>`
        color: ${props => props.color || "#FFFFFF"};
        background: rgba(78, 113, 254, 1);
    `}

    
    ${props => props.btnType === "outlined" && css<StyledBtnPropsType>`
        color: #4E71FE;
        background: transparent;
        border: 2px solid rgba(78, 113, 254, 1);
    `}
`




