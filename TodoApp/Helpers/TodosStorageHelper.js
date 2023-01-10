import AsyncStorage from '@react-native-async-storage/async-storage';

export const TodosStorageHelper = {
  set: async todos => {
    try {
      await AsyncStorage.setItem('todos', JSON.stringify(todos));
    } catch (e) {
      // saving error
    }
  },
  get: async () => {
    let data = await AsyncStorage.getItem('todos');
    if (data != null) return JSON.parse(data);
    else return [];
  },
};
