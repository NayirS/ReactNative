
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { colors, spacing } from '../styles/GlobalStyles';

const Card = ({ title, description, image, price, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress} activeOpacity={0.8}>
      {image && (
        <Image 
          source={{ uri: image }}
          style={styles.image}
          resizeMode="cover"
        />
      )}
      
      <View style={styles.content}>
        <Text style={styles.title} numberOfLines={2}>{title}</Text>

        {description && (
          <Text style={styles.description} numberOfLines={3}>{description}</Text>
        )}

        {price && (
          <View style={styles.priceContainer}>
            <Text style={styles.price}>{price}€</Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: 12,
    marginBottom: spacing.md,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 200,
  },
  content: {
    padding: spacing.md,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.black,
    marginBottom: spacing.sm,
  },
  description: {
    fontSize: 14,
    color: colors.gray,
    lineHeight: 20,
    marginBottom: spacing.sm,
  },
  priceContainer: {
    alignItems: 'flex-end',
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.primary,
  },
});

export default Card;
