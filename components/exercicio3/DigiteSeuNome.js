import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

export default function DigiteSeuNome() {

    const {nome, setNome} = useState('')
    const {valorDigitado, setValorDigitando} = useState('')
  return (
    <View>
      <Text style={styles.texto}>Digite seu Nome</Text>
      <Text style={styles.texto}>(nome)</Text>
      <TextInput
      style={styles.input}
      onChangeText={e => setValorDigitando(e)}
      placeholder= 'Digite seu Nome'

      />

      <Button
      title='Enviar'
      onPress={()=>alert('Enviar')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    texto: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    input:{
        fontSize: 30,
        color: 'red',
        borderWidth: 2,
        margin: 10
    }
})
