import React from 'react';
import './App.css';
import { Greet } from './components/Greet';
import { Heading } from './components/Heading';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';
import { Oscar } from './Oscar';
import {Button} from './components/Button';
import {Input} from './components/Input';
import { Container } from './components/Container';
import { ThemeContextProvider } from './components/context/ThemeContext';
import { Box } from './components/context/Box';
import { UserContextProvider } from './components/context/UserContext';
import { User } from './components/context/User';
import { Private } from './components/auth/Private';
import { Profile } from './components/auth/Profile';
import { List } from './components/generics/List';
import { RandomNumber } from './components/restriction/RandomNumber';
import { Toast } from './components/templateliterals/Toast';
import { CustomButton } from './components/html/Button';
import { Text } from './components/polymorphic/Text';
function App() {
  const personName={
    first:'Bruce',
    last:'Wayne'
  }
  const nameList=[
    {
      first:'Bruce',
      last:'Wayne'
    },
    {
      first:'Clark',
      last:'Kent'
    },
    {
      first:'Princess',
      last:'Diana'
    }
  ]
  return (
    <div className="App">
      <Greet name='Soumya' messageCount={10} isLoggedIn={true}/>
      <Person name={personName}/>
      <PersonList names={nameList}/>
      <Status status='error'/>
      <Heading>Placeholder Text</Heading>
      <Oscar>
        <Heading>Oscar goes to Leonard DeCaprio</Heading>
      </Oscar>
      <Button handleClick={(event,id)=>{
        console.log('Button CLicked',event,id)
      }
      }/>
      <Input value='' handleChange={(event)=>console.log(event)}/>
      <Container styles={{border:'1px solid black',padding:'1rem'}}/>
      <ThemeContextProvider><Box/></ThemeContextProvider>
      <UserContextProvider><User/></UserContextProvider>
      <div>
      <Private isLoggedIn={true} component={Profile}/>
      </div>
      <List items={['Superman','Batman','Spiderman']} onClick={(item)=>console.log(item)}/>
      <RandomNumber value={10} isPositive/>
      <Toast position='center'/>
      <CustomButton variant='primary'>PrimaryButton</CustomButton>
      <Text as='h1' size='lg'>Heading</Text>
      <Text as='p' size='md'>Paragraph</Text>
      <Text as='label' htmlFor='someId' size='sm' color='secondary'>Label</Text>
    </div>
  );
}

export default App;
