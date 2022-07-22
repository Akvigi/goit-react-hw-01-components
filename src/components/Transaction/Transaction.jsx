import styled from "styled-components";
import PropTypes from "prop-types"

const Transactions = ({array}) => {
    return  <section>
        <ul>
            <Item><Span>Type</Span><Span>Amount</Span><Span>Currency</Span></Item>
            {array.map(({ id, type, amount, currency}) => {
                return <Item key={id}>
                            <Span>{type}</Span><Span>{amount}</Span><Span>{currency}</Span>
                        </Item>
                    })}
                </ul>
            </section>
}

Transactions.propTypes = {
    amount: PropTypes.string,
    id: PropTypes.string,
    currency: PropTypes.string,
    type: PropTypes.string,
}

const Item = styled.li`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 450px;
`

const Span = styled.span`
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