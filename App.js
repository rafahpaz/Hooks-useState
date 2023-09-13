import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Picker, DatePickerAndroid } from 'react-native';

export default function CadastroScreen() {
  const [nome, setNome] = useState('');
  const [genero, setGenero] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [email, setEmail] = useState('');
  const [confirmarEmail, setConfirmarEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [idioma, setIdioma] = useState('');
  const [valoresCapturados, setValoresCapturados] = useState(null);

  const handleCadastro = () => {
    // Implemente a lógica de cadastro aqui.
    // Após o cadastro, você pode atualizar os valores capturados.
    const valores = {
      Nome: nome,
      Gênero: genero,
      'Data de Nascimento': dataNascimento,
      Usuário: usuario,
      Senha: senha,
      'E-mail': email,
      'Confirmar E-mail': confirmarEmail,
      CPF: cpf,
      'Idioma do Currículo': idioma,
    };
    setValoresCapturados(valores);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nome</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => setNome(text)}
        value={nome}
        placeholder="Seu Nome"
      />

      <Text style={styles.label}>Gênero</Text>
      <Picker
        selectedValue={genero}
        style={styles.input}
        onValueChange={(itemValue, itemIndex) => setGenero(itemValue)}
      >
        <Picker.Item label="Selecione" value="" />
        <Picker.Item label="Masculino" value="Masculino" />
        <Picker.Item label="Feminino" value="Feminino" />
        <Picker.Item label="Outro" value="Outro" />
      </Picker>

      <Text style={styles.label}>Data de Nascimento</Text>
      <Button
        title="Selecionar Data"
        onPress={async () => {
          try {
            const { action, year, month, day } = await DatePickerAndroid.open({
              date: new Date(),
            });
            if (action === DatePickerAndroid.dateSetAction) {
              const selectedDate = new Date(year, month, day);
              setDataNascimento(selectedDate.toLocaleDateString());
            }
          } catch ({ code, message }) {
            console.warn('Cannot open date picker', message);
          }
        }}
      />
      <Text>{dataNascimento}</Text>

      <Text style={styles.label}>Usuário</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => setUsuario(text)}
        value={usuario}
        placeholder="Nome de Usuário"
      />

      <Text style={styles.label}>Senha</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => setSenha(text)}
        value={senha}
        placeholder="Senha"
        secureTextEntry
      />

      <Text style={styles.label}>E-mail</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => setEmail(text)}
        value={email}
        placeholder="Seu E-mail"
        keyboardType="email-address"
      />

      <Text style={styles.label}>Confirme seu E-mail</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => setConfirmarEmail(text)}
        value={confirmarEmail}
        placeholder="Confirme seu E-mail"
        keyboardType="email-address"
      />

      <Text style={styles.label}>CPF</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => setCpf(text)}
        value={cpf}
        placeholder="Seu CPF"
        keyboardType="numeric"
      />

      <Text style={styles.label}>Idioma do Currículo</Text>
      <Picker
        selectedValue={genero}
        style={styles.input}
        onValueChange={(itemValue, itemIndex) => setGenero(itemValue)}
      >
        <Picker.Item label="Selecione" value="" />
        <Picker.Item label="Inglês" value="Masculino" />
        <Picker.Item label="Espanhol" value="Feminino" />
        <Picker.Item label="Francês" value="Outro" />
      </Picker>

      <Button
        title="CADASTRAR"
        onPress={handleCadastro}
      />

      {valoresCapturados && (
        <View style={styles.valoresCapturadosContainer}>
          <Text style={styles.valoresCapturadosLabel}>Valores Capturados:</Text>
          {Object.entries(valoresCapturados).map(([key, value]) => (
            <Text key={key}>{`${key}: ${value}`}</Text>
          ))}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 40,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 12,
    borderRadius: 5,
  },
  valoresCapturadosContainer: {
    marginTop: 20,
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 5,
  },
  valoresCapturadosLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});
