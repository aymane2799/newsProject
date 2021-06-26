import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import {Container} from 'react-bootstrap'
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import CheckNews from './pages/CheckNews';
import Home from './pages/Home';
import NewsList from './pages/NewsList';
import Header from './components/Header';
import SearchPage from './pages/SearchPage'
import CheckFeeling from './pages/CheckFeeling'



const client = new ApolloClient({
  cache : new InMemoryCache(),
  uri : "http://localhost:8000/graphql/",
});

function App() {
  return (
      <ApolloProvider client = {client}>
      <Header/>
      <Container>
        <Switch>
          <Route exact path="/" children={<Home/>}/>
          <Route exact path="/news" children={<NewsList/>}/>
          <Route exact path="/check" children={<CheckNews/>}/>
          <Route exact path="/check-feelings" children={<CheckFeeling/>} />
          <Route exact path="/search" children={<SearchPage/>}/>
        </Switch>
      </Container>
    </ApolloProvider>

  );
}

export default App;
