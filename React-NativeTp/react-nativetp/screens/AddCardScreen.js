import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebaseConfig';

export default function AddCardScreen({ navigation }) {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = async () => {
    await addDoc(collection(db, 'cards'), {
      title,
      description: desc,
      price,
      image
    });
    navigation.goBack();
  };

  return (
    <View>
      <TextInput placeholder="Titre" onChangeText={setTitle} />
      <TextInput placeholder="Description" onChangeText={setDesc} />
      <TextInput placeholder="Prix" onChangeText={setPrice} />
      <TextInput placeholder="Image URL" onChangeText={setImage} />
      <Button title="Enregistrer" onPress={handleSubmit} />
    </View>
  );
}
