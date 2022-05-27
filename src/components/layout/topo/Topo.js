import styled from 'styled-components';

export default function Topo() {

    const usrImg= "http://ec2-54-207-222-235.sa-east-1.compute.amazonaws.com/full-stack-challenge/admin/assets/images/faces/2.jpg";


    return (
        
        <>  
            <Header>
                <Logo>TrackIt</Logo>
                <Avatar src={usrImg} ></Avatar>
            </Header>
        </>
        
    )
}

/* --- STYLES --- */
const Header = styled.div`
    width: 100%;
    height: 70px;
    padding: 10px;
    padding-left: 20px;
    padding-right: 20px;
    position: fixed;
    top: 0;
    left: 0;
    background: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
const Logo = styled.div`
    font-family: 'Playball', cursive;
    color: #fff;
    font-size: 40px;
    line-height: 50px;
`;
const Avatar = styled.img`
    max-height: 100%;
    width: auto;
    border-radius: 50%;
`;