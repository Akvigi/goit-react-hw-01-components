import Profile from './components/Profile/Profile';
import Statistic from './components/Statistic/StatisticList';
import FriendList from './components/Friends/FriendsList';
import Transactions from './components/Transaction/Transaction';
import styled from 'styled-components';
import * as info from './backend-data/user.json'
import data from './backend-data/data.json'
import friends from './backend-data/friends.json'
import transactions from './backend-data/transactions.json'

function App() {
  return (
    <Container>
      <div>
        <Profile user={info} />
        <Statistic title="Upload stats" data={data} />
        <Statistic data={data} />
      </div>
      <Transactions array={transactions}/>
      <FriendList friends={friends}/>
    </Container>)
}

const Container = styled.div`
  border: 1px black solid;
  width: 80%;
  display: block;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 2% 4%;
  justify-content: space-between;
`

export default App;
