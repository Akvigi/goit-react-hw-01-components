import ProfileContainer from './comp/Container/ProfileContainer';
import ProfileCard from './comp/Description/Description';
import Statistic from './comp/Stat/Statistic'

const Profile = ({ user }) => {
    const { username, location, tag, avatar, stats } = user;
    const { followers, likes, views } = stats
    return <ProfileContainer>
                <ProfileCard username={username} tag={tag} location={location} avatar={avatar} />
                <Statistic followers={followers } likes = {likes} views = {views} />
            </ProfileContainer>
}

export default Profile