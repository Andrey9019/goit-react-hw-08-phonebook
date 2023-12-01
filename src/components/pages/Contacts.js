import { Container } from 'components/App.style';
import { Filter } from 'components/Filter/Filter';
import { PhoneList } from 'components/PhoneList/PhoneList';
import { Phonebook } from 'components/Phonebook/Phonebook';

export const Contacts = () => {
  return (
    <Container>
      <Phonebook />
      <Filter></Filter>
      <h2>Contacts</h2>
      <PhoneList />
    </Container>
  );
};
