import { AsyncStorage } from "react-native";

const StoreData = async (key: string, value: Array<any>) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (err) {
    console.log(err);
  }
}

export default StoreData;