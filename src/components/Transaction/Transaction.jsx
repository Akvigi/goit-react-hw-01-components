import styled from "styled-components";
import PropTypes from "prop-types"

const Transactions = ({array}) => {
    return  <section>
                <table>
                    <thead>
                        <Row>
                            <Block>Type</Block>
                            <Block>Amount</Block>
                            <Block>Currency</Block>
                        </Row>
                    </thead>
                    <tbody>
                        {array.map(({ id, type, amount, currency }) => {
                        return <Row key={id}>
                                    <Block>{type}</Block><Block>{amount}</Block><Block>{currency}</Block>
                                </Row>
                    })}
                    </tbody>
                </table>
            </section>
}

Transactions.propTypes = {
    amount: PropTypes.string,
    id: PropTypes.string,
    currency: PropTypes.string,
    type: PropTypes.string,
}

const Row = styled.tr`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 450px;
`

const Block = styled.th`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 150px;
    background-color: #4e4e4e6f;
    :nth-child(even){
        background-color: #80808053;
    }
`

export default Transactions