import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Button,
} from 'react-native';
import React, {useState, useContext} from 'react';
import {TodosContext} from '../store/TodosContext';
import {TodosStorageHelper} from '../Helpers/TodosStorageHelper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AntDesign from 'react-native-vector-icons/AntDesign';
const WorkScreen = () => {
  const [title, setTitle] = useState('');

  const {todos, setTodos} = useContext(TodosContext);
  const renderItem = ({item}) => {
    return (
      <View style={styles.item}>
        <Text>{item.title}</Text>
        <AntDesign
          onPress={() => addStar(item.title)}
          name={item.isStar ? 'star' : 'staro'}
          size={20}
          color={'#FF7B54'}
        />
      </View>
    );
  };
  const addStar = title => {
    var todoIndex = todos.findIndex(e => e.title == title);
    todos[todoIndex].isStar = !todos[todoIndex].isStar;
    setTodos([...todos]);
    TodosStorageHelper.set([...todos]);
  };
  const addTodo = title => {
    let obj = {
      title: title,
      isStar: false,
    };
    setTodos([...todos, obj]);
    TodosStorageHelper.set([...todos, obj]);
  };
  return (
    <>
      <View style={styles.container}>
        <View style={styles.inputWrapper}>
          <TextInput style={styles.input} onChangeText={setTitle} />
          <TouchableOpacity
            style={styles.button}
            onPress={() => addTodo(title)}>
            <Text style={styles.buttonText}>Add</Text>
          </TouchableOpacity>
        </View>
        <FlatList data={todos} renderItem={renderItem} />
        {/* <Button
          title="reset"
          onPress={() => {
            AsyncStorage.clear();
          }}
        /> */}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#ccc',
    borderRadius: 10,
    marginBottom: 10,
    width: '100%',
  },
  inputWrapper: {
    marginBottom: 10,
    alignItems: 'flex-end',
  },
  button: {
    padding: 10,
    backgroundColor: 'green',
    borderRadius: 10,
    width: 100,
  },
  buttonText: {
    textAlign: 'center',
  },
  item: {
    padding: 10,
    marginBottom: 7,
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
export default WorkScreen;
