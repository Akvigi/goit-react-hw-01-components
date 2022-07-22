import styled from "styled-components";
import PropTypes from "prop-types"

function FriendList({ friends }) {
    return <section>
                <ul>
                    {friends.map(({ avatar, name, isOnline, id }) => {
                            return <Item key={id}>
                                        <Marker isOnline={isOnline}></Marker>
                                        <Img src={avatar} alt="Avatar" />
                                        <p>{name}</p>
                                    </Item> 
                    })}
                </ul>
            </section>
}

FriendList.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    id: PropTypes.string,
    isOnline: PropTypes.bool,
}

const Marker = styled.div`
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: ${({ isOnline }) => (isOnline ? "green" : "red")};
`

const Img = styled.img`
    width: 50px;
    height: 50px;
    margin-right: 10px;
    margin-left: 5px;
`

const Item = styled.li`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 170px;
    box-shadow: 1px 4px 6px 0px #00000029, 0px 4px 4px 0px #0000000f, 0px 1px 1px 0px #0000001f;
    :not(:first-child) {margin-top: 10px;}
    
`

// const Section = styled.section`
//     display: block;
//     justify-content: end;
// `

export default FriendList;