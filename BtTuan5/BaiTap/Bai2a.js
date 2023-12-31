import {
    StyleSheet,
    Text,
    View,
    TextInput,
    CheckBox,
    Pressable,
  } from "react-native";
  
  import { useReducer } from "react";
  
  const initialState = {
    result: "",
    lengthPassword: 0,
    isSelected1: false,
    isSelected2: false,
    isSelected3: false,
    isSelected4: false,
  };
  
  function reducer(state, action) {
    switch (action.type) {
      case "SET_RESULT":
        return { ...state, result: action.payload };
      case "SET_LENGTH_PASSWORD":
        return { ...state, lengthPassword: action.payload };
      case "SET_SELECTION_1":
        return { ...state, isSelected1: action.payload };
      case "SET_SELECTION_2":
        return { ...state, isSelected2: action.payload };
      case "SET_SELECTION_3":
        return { ...state, isSelected3: action.payload };
      case "SET_SELECTION_4":
        return { ...state, isSelected4: action.payload };
      default:
        throw new Error();
    }
  }
  
  export default function Bai2a() {
    const [state, dispatch] = useReducer(reducer, initialState);
  
    const handleGeneratePassword = (len) => {
      const lowerCase = "abcdefghijklmnopqrstuvwxyz";
      const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      const numbers = "0123456789";
      const specialSymbol = "!@#$%^&*()_+{}:\"<>?|[];',./`~";
  
      let strArr = "";
      for (let i = 0; i < len; i++) {
        if (state.isSelected1) {
          strArr += randomChar(state.isSelected1, lowerCase);
        }
        if (state.isSelected2) {
          strArr += randomChar(state.isSelected2, upperCase);
        }
        if (state.isSelected3) {
          strArr += randomChar(state.isSelected3, numbers);
        }
        if (state.isSelected4) {
          strArr += randomChar(state.isSelected4, specialSymbol);
        }
      }
      strArr = strArr.slice(0, len);
  
      let pwdShow = shuffleString(strArr);
  
      dispatch({ type: "SET_RESULT", payload: pwdShow });
    };
  
    function randomChar(selected, type) {
      if (selected) {
        let iRandom = Math.floor(Math.random() * type.length);
        return type.charAt(iRandom);
      }
    }
  
  
    function shuffleString(str) {
      let strArr = str.split("");
      let shfArr = strArr.sort(() => Math.random() - 0.5);
      return shfArr.join("");
    }
  
    return (
      <View style={styles.container}>
        <View style={styles.box}>
          <View style={styles.top}>
            <Text
              style={{
                fontSize: 30,
                color: "white",
                alignSelf: "center",
                width: 200,
                textAlign: "center",
              }}
            >
              PASSWORD GENERATOR
            </Text>
          </View>
          <View style={styles.middle}>
            <TextInput
              readOnly={true}
              style={styles.textShow}
              value={state.result}
              onChangeValue={(e) => {
                dispatch({ type: "SET_RESULT", payload: e });
              }}
              placeholder="Show password generator"
            />
          </View>
          <View style={styles.middle1}>
            <View style={styles.layoutButton}>
              <Text style={styles.textLabel}>Password length</Text>
              <TextInput
                style={styles.textInput}
                value={state.lengthPassword}
                inputMode="numeric"
                onChangeText={(e) => {
                  dispatch({ type: "SET_LENGTH_PASSWORD", payload: e });
                }}
              />
            </View>
  
            <View style={styles.layoutCheckbox}>
              <View style={styles.layoutCheckbox1}>
                <Text style={styles.textLabel}>Include lower case letters</Text>
                <Text style={styles.textLabel}>Include upcase letters</Text>
                <Text style={styles.textLabel}>Include number</Text>
                <Text style={styles.textLabel}>Include special symbol</Text>
              </View>
              <View style={styles.layoutCheckbox2}>
                <CheckBox
                  style={styles.checkbox}
                  value={state.isSelected1}
                  onValueChange={(e) => {
                    dispatch({ type: "SET_SELECTION_1", payload: e });
                  }}
                />
                <CheckBox
                  style={styles.checkbox}
                  value={state.isSelected2}
                  onValueChange={(e) => {
                    dispatch({ type: "SET_SELECTION_2", payload: e });
                  }}
                />
                <CheckBox
                  style={styles.checkbox}
                  value={state.isSelected3}
                  onValueChange={(e) => {
                    dispatch({ type: "SET_SELECTION_3", payload: e });
                  }}
                />
                <CheckBox
                  style={styles.checkbox}
                  value={state.isSelected4}
                  onValueChange={(e) => {
                    dispatch({ type: "SET_SELECTION_4", payload: e });
                  }}
                />
              </View>
            </View>
  
            <View style={styles.bottom}>
              <Pressable
                onPress={() => handleGeneratePassword(state.lengthPassword)}
                style={({ pressed }) => [
                  {
                    backgroundColor: pressed ? "white" : "#3B3B98",
                  },
                  styles.button,
                ]}
              >
                {({ pressed }) => (
                  <Text
                    style={[
                      styles.textButton,
                      { color: pressed ? "#3B3B98" : "white" },
                    ]}
                  >
                    GENERATE PASSWORD
                  </Text>
                )}
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      backgroundImage: "linear-gradient(190deg, #3B3B98, #C4C4C4)",
      width: "100%",
      height: "100%",
    },
    box: {
      flex: 1,
      backgroundColor: "#23235B",
      borderRadius: 18,
      width: "90%",
      height: "90%",
      margin: 20,
    },
    top: {
      flex: 0.2,
      alignItems: "flex-start",
      justifyContent: "flex-end",
    },
    middle: {
      flex: 0.1,
      alignItems: "center",
      justifyContent: "space-evenly",
    },
    middle1: {
      flex: 0.5,
      alignItems: "center",
      justifyContent: "space-evenly",
    },
    bottom: {
      flex: 0.1,
      flexDirection: "row",
      justifyContent: "center",
    },
    layoutButton: {
      flexDirection: "row",
      justifyContent: "space-evenly",
      alignItems: "center",
    },
    layoutCheckbox: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
    layoutCheckbox1: {
      flex: 1,
      justifyContent: "space-between",
      marginLeft: -20,
    },
    layoutCheckbox2: {
      flex: 0.1,
    },
    checkbox: {
      width: 45,
      height: 45,
    },
    button: {
      width: "320px",
      height: "50px",
      border: "1px solid #3B3B98",
      padding: "5px",
      borderRadius: "3px",
    },
    textLabel: {
      color: "white",
      fontSize: 20,
      fontWeight: "bold",
    },
    textButton: {
      fontWeight: "bold",
      textAlign: "center",
      fontSize: 20,
    },
    textShow: {
      height: 45,
      width: 320,
      border: "1px solid #151537",
      backgroundColor: "#151537",
      fontSize: 20,
      color: "rgba(101, 129, 209, 0.5)",
      textAlign: "center",
    },
    textInput: {
      height: 45,
      width: "30%",
      border: "1px solid white",
      backgroundColor: "white",
      textAlign: "center",
      fontSize: 20,
    },
    iconEmail: {
      border: "3px solid #524f4e",
      margin: 12,
      height: 40,
      backgroundColor: "#C4C4C4",
    },
  });