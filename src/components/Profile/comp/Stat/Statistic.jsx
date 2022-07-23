import SimpleItem from '../../../Item/Item'
import styles from './Statistic.module.scss'
import PropTypes from 'prop-types'

function Statistic ({ followers, views, likes }) {
    return <>
        <ul className = {`${styles.list}`} id = "profile-list">
            <SimpleItem>Followers<span>{followers}</span></SimpleItem>
            <SimpleItem>Views<span>{views}</span></SimpleItem>
            <SimpleItem>Likes<span>{likes}</span></SimpleItem>
        </ul>
    </>
}

Statistic.propTypes = {
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
}


export default Statistic