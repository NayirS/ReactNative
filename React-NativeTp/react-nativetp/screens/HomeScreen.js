import React, { useEffect, useState } from 'react';
import { ScrollView, Button } from 'react-native';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import Card from '../components/Card';

export default function HomeScreen({ navigation }) {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchCards = async () => {
      const snapshot = await getDocs(collection(db, 'cards'));
      setCards(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };

    fetchCards();
  }, []);

  return (
    <ScrollView>
      <Button title="Ajouter une carte" onPress={() => navigation.navigate('AddCard')} />
      {cards.map(card => (
        <Card key={card.id} {...card} />
      ))}
    </ScrollView>
  );
}
