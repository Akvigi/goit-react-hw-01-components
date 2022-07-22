import styled from "styled-components";
import styles from "./Description.module.scss"
import PropTypes from "prop-types"
const { image, name, description } = styles

const ProfileCard = ({username, tag, location, avatar}) => {
   return <ContainerCard>
        <img className = {`${image}`} src={avatar} alt="avatar" />
        <p className = {`${name}`}>{username}</p>
        <p className = {`${description}`}>{tag}</p>
        <p className = {`${description}`}>{location}</p>
    </ContainerCard>
}

const ContainerCard = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: white;
    width: 200px;
`

ProfileCard.propTypes = {
    username: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string
}

export default ProfileCard