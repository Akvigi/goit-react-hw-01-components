import styled from "styled-components"
import SimpleItem from "../Item/Item"
import PropTypes from 'prop-types'

function Statistic({ title, data }) {
    return <Section>
                { title ? <ListHeader>{title}</ListHeader> : '' } 
                <List>
                    {data.map(({ id, label, percentage }) => <SimpleItem key = {id}>
                        <span>{label}</span>
                        <span>{percentage}%</span>
                    </SimpleItem>)}
                </List>
            </Section>
}

Statistic.propTypes = {
    title: PropTypes.string,
    data: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            label: PropTypes.string,
            percentage: PropTypes.number
        })).isRequired
}

const List = styled.ul` 
    display: flex;
    flex-direction: row;
    padding: 0;
`
const ListHeader = styled.h2`
    font-size: 20px;
    margin-bottom: 10px;
`

const Section = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px black solid;
    :not(:last-child) {
        margin-bottom: 10px;
    }
    padding: 0;
`

export default Statistic