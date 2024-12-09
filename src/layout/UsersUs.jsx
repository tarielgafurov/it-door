import styled from "styled-components"
import forma from "..//assets/icons/forma-red-white.png"
// import ItDoor from "..//assets/images/IT-DOOR.png"
import home from "../assets/icons/home.png"
import users from "../assets/icons/users.png"
import korzinka from "../assets/icons/korzinka.png"
import like from "../assets/icons/like.png"
// import red from "../assets/icons/red.png"
// import white from "../assets/icons/white.png"
<style>
@import url('https://fonts.googleapis.com/css2?family=Raleway:ital@0;1&display=swap');
</style> 

const UsersUs = () =>{
    return(
        <InformationStyled>
            <H1Styled>
                 <h1>Немного о нас</h1>
            </H1Styled>
            <ItDoorFormaStyled>
                <div>
                    {/* <div>
                    <img src={red} alt="" />
                    <img src={white} alt="" />
                    </div> */}
                    <ItDoorContentStyled src={forma} alt="" />
                    <h1>IT-DOOR</h1>
                </div>
            </ItDoorFormaStyled>

        <HomeInformation>
            <HomeUsersStyled>
                <div>
                    <img src={home} alt="" />
                    <span>Выпускаем Junior–разработчиков с 2022 года</span>
                </div>
                <div>
                    <img src={users} alt="" />
                    <span>Поддержка от преподавателей помогает эффективнее учиться</span>
                </div>
                {/* <KursStyled> */}
                    <KursStyled>Курсы It-Door — это прекрасная возможность погрузиться в профессию и освоить новую специальность всего за год.</KursStyled>
                {/* </KursStyled> */}
            </HomeUsersStyled>



            <LikeKorzinkaStyled>
                <div>
                    <img src={korzinka} alt="" />
                    <span>90% выпускников трудоустраиваются в первые месяцы после окончания обучения</span>
                </div>
                <div>
                    <img src={like} alt="" />
                    <span>Наши преподаватели – действующие разработчики с опытом от 3 лет</span>
                </div>
                <div></div>
            </LikeKorzinkaStyled>

        </HomeInformation>

        </InformationStyled>
    )
}

export default UsersUs

const InformationStyled = styled.div`
    width: 69.375rem;
    height: 42.938rem;
    margin: auto;
    background-color: rgba(4, 17, 36, 1);
    color: white;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 100px;
    text-align: start;

`

const H1Styled = styled.div`
    width: 100%;
    >h1{
        text-align: start;
        font-family: Corbel;
        font-size: 32px;
        font-weight: 700;
        line-height: 38px;
    }
`

const ItDoorFormaStyled = styled.div`
    width: 69.375rem;
    height: 20.125rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-around;
    border-radius: 1.875rem;
    background: linear-gradient(180deg, rgba(19, 50, 87, 0.75) 0%, rgba(26, 15, 29, 0.75) 100%);
    >div{
        width: 16.625rem;
        height: 9.625rem;
        display: flex;
        align-items: center;
        flex-direction: column;

        >h1{
            font-size: 3em;
        }

    }

`
const ItDoorContentStyled = styled.img`
   width: 9.063rem;
    height: 5.366rem; 
`

const HomeInformation = styled.div`
    width: 69.375rem;
    height: 14.346rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
`



const HomeUsersStyled = styled.div`
    width: 32.625rem;
    height: 14.346rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;

    >div{
        width: 100%;
        height: 4.125rem;
        text-align: start;
        display: flex;
        align-items: center;
        justify-content: space-between;

        >img{
            width: 4.125rem;
            height: 4.125rem;
        }

        >span{
            text-align: start;
            width: 27rem;
            font-size: 18px;
            font-weight: 300;
            line-height: 19px;
            // <uniquifier>: Use a unique and descriptive class name
            font-family: "Raleway", sans-serif;
            font-optical-sizing: auto;
            font-weight: 335;
            font-style: normal;


        }
    }

`

const LikeKorzinkaStyled = styled.div`
    width: 32.625rem;
    height: 14.346rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;

    >div{
        width: 100%;
        height: 4.125rem;
        display: flex;
        align-items: center;
        justify-content: space-between;

        >img{
            width: 4.125rem;
            height: 4.125rem;
        }

        >span{
            width: 550px;
            font-size: 18px;
            font-weight: 300;
            line-height: 19px;
            font-family: "Raleway", sans-serif;
            font-optical-sizing: auto;
            font-weight: 335;
            font-style: normal;

        }
    }

`

const KursStyled = styled.span`
        /* border: 2px solid green; */
        width: 550px;
        font-size: 18px;
        color: rgba(122, 126, 147, 1);
        line-height: 1.188rem;
        font-family: "Raleway", sans-serif;
            font-optical-sizing: auto;
            font-weight: 335;
            font-style: normal;

    
`