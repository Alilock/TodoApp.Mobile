import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {TodosContext} from '../store/TodosContext';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {TodosStorageHelper} from '../Helpers/TodosStorageHelper';
const StarsScreen = () => {
  const {todos, setTodos} = useContext(TodosContext);
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    setFilteredTodos(todos.filter(e => e.isStar == true));
  }, [todos]);

  const removeAllStar = () => {
    const newArr = todos.filter(e => e.isStar == false);
    setTodos([...newArr]);
    TodosStorageHelper.set([...newArr]);
  };
  const renderItem = ({item}) => {
    return (
      <View style={styles.item}>
        <Text>{item.title}</Text>
        <AntDesign
          name={item.isStar ? 'star' : 'staro'}
          size={20}
          color={'#FF7B54'}
        />
      </View>
    );
  };
  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={() => removeAllStar()}>
          <Text style={styles.buttonText}>Remove All</Text>
        </TouchableOpacity>
        <FlatList data={filteredTodos} renderItem={renderItem} />
      </View>
    </>
  );
};

export default StarsScreen;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginTop: 10,
  },
  item: {
    marginTop: 10,
    padding: 10,
    marginBottom: 7,
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    padding: 10,
    backgroundColor: '#DC3535',
    borderRadius: 10,
    width: 100,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});
