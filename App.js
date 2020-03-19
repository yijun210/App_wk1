import React from 'react';//import react模組
import { StyleSheet, Text, View, Image } from 'react-native';//原生預設沒載入->都要將套件載入
//所有用到標籤都要import進來
const app =() => {//App可為任意名字->能載入jsx語法(很像html)
  //let str1 = "Hello World";  所有東西都放在標籤裡面(第10)
  return (
    <View>
    <View style={styles.container}>
      <Text style={styles.text1}>About Me</Text>
    </View>
    <View style={styles.background}>
    <Image source={require("./imgs/yijun.png")} 
    style={{ width: 200, height: 200 }}/>
    <Text style={styles.text2}>資財四甲 105AB0009 賴宜君</Text>
    </View>
    
   </View>
  );
};

const styles = StyleSheet.create({//const=>固定不變得宣告(很像css)
  container: {
    backgroundColor: "#ff8fbc",
    justifyContent: "center",
    alignItems: "center",
    height: 90,
    paddingTop: 30,
    shadowColor: "#751d62",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    // Android Only
    elevation: 2,
  },
  text1:{
    color:"#FFFFFF",
    fontSize:20,
  },
  background:{
    backgroundColor: "#ffce2e",
    height: 600,
    paddingTop: 30,
    alignItems: "center",
  },
  text2:{
    paddingTop: 20,
  }
});
export default app;