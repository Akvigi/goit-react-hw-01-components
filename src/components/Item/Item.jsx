import styled from "styled-components"

const SimpleItem = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 0.5px black solid;
    padding: 1px 5px;
    :not(:last-child) {
        border-right: 0px;
    }
`

export default SimpleItem