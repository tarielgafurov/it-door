import styled from "styled-components"
import itdoor from "..//assets/icons/it-door.png"
import ButtonUI from "../components/UI/Button"
import SelectUi from "./Select"


const Header = () =>{
    return(
        <HeaderStyled>
            <ImgStyled>
            <img src={itdoor} alt="" />
            <span>Курсы</span>
            <span>Менторы</span>
            <span>О Нас</span>
            <span>Контакты</span>
            </ImgStyled>
            <ButtonUI>Войти</ButtonUI>
            <SelectUi/>
        </HeaderStyled>
    )
}

export default Header



const HeaderStyled = styled.header`
    width: 1440px;
    height: 97px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: rgba(4, 17, 36, 1);
    color: white;
`

const ImgStyled = styled.div`
    width: 648px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    >span{
        font-size: 18px;
        line-height: 21.74px;

        &:hover{
            color: red;
            cursor: pointer;
        }
    }

`

const BtnStyled = styled.div`

    >button{
        padding: 5px 45px 5px 41.5px;
        background-color: #2185D9;
        font-size: 17px;
        border-radius: 4px;
        border: none;
        color: white;
        line-height: 20.53px;

        &:hover{
            background-color: blue;
        }
    }
`
