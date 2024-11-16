import React, { useTransition } from "react";
import { Image, ImageBackground, ScrollView, StyleSheet, Text, View } from "react-native";
function Facebook() {
  return (
    <>
      <View style={style.myview1}>
        <View style={{ width: "60%" }}>
          <Text style={style.mytext1}>Facebook</Text>
        </View>
        <View style={{ width: "40%", flexDirection: "row", justifyContent: "space-around", alignContent: "flex-start" }}>
          <Text style={style.icons}>➕</Text>
          <Text style={style.icons}>🔍</Text>
          <Text style={style.icons}>📩</Text>
        </View>
      </View>{/*===================================================================*/}
      <View style={style.myview2}>
        <Text style={style.icon1}>🏠</Text>
        <Text style={style.icon2}>👩‍👦</Text>
        <Text style={style.icon3}>📺</Text>
        <Text style={style.icon4}>🏫</Text>
        <Text style={style.icon5}>🔔</Text>
        <Text style={style.icon6}>🟰</Text>
      </View>{/*===================================================================*/}
      <ScrollView>
      <>
            <View style={style.post}>
              <Text style={style.pic} >🤴</Text>
              <View style={style.write}>
                <Text style={style.tex}>Write somthing here...</Text>
              </View>
              <Text style={style.ico}>🖼️</Text>
            </View>{/*===================================================================*/}
            <View style={style.storyarea}>
              <ScrollView horizontal={true}>
                  <View style={style.aadstory}>
                    <Text style={style.add}>🤴</Text>
                    <View style={style.add2}>
                      <View style={style.addicobg}>
                        <Text style={style.addico}> + </Text>
                        <Text style={style.adstory}> create story </Text>
                      </View>
                    </View>
                  </View>
                  <View style={style.aadstory}>
                      <View style={style.user}></View>
                      <Text style={style.usernm}>user name</Text>           
                  </View>
                  <View style={style.aadstory}>
                      <View style={style.user}></View>
                      <Text style={style.usernm}>user name</Text>           
                  </View>
                  <View style={style.aadstory}>
                      <View style={style.user}></View>
                      <Text style={style.usernm}>user name</Text>           
                  </View>
                  <View style={style.aadstory}>
                      <View style={style.user}></View>
                      <Text style={style.usernm}>user name</Text>           
                  </View>
                  <View style={style.aadstory}>
                      <View style={style.user}></View>
                      <Text style={style.usernm}>user name</Text>           
                  </View>
                  <View style={style.aadstory}>
                      <View style={style.user}></View>
                      <Text style={style.usernm}>user name</Text>           
                  </View>
                  <View style={style.aadstory}>
                      <View style={style.user}></View>
                      <Text style={style.usernm}>user name</Text>           
                  </View>
              </ScrollView>
            </View>{/*===================================================================*/}         
            <View>
                  <View style={style.userpostnotdis}>
                        <View style={style.userpro}>
                              <Image source={require("./img/2.jpg")} style={style.userpic2}></Image>
                        </View>
                          <Text style={style.username}>User Name </Text>
                          <Text style={style.postdata}>1 min. ago 🌐</Text>
                          <Text style={style.threedot}>•••</Text>
                          <Text style={style.not}>✕</Text>
                  </View> 
                  <View style={style.userpostimgarea}>
                        <Image style={style.postphoto} source={require("./img/1.jpg")}></Image>
                  </View>
                  <View style={style.likebar}>
                        <Text style={style.like}>👍Like</Text>
                        <Text style={style.like}>🗨️Comment</Text>
                        <Text style={style.like}>➦Share</Text>
                  </View>
            </View>{/*===================================================================*/}
            <View>
                  <View style={style.userpost}>
                        <View style={style.userpro}>
                              <Image source={require("./img/6.jpg")} style={style.userpic2}></Image>
                        </View>
                          <Text style={style.username}>User Name </Text>
                          <Text style={style.postdata}>1 day ago.</Text>
                          <Text style={style.threedot}>•••</Text>
                          <Text style={style.not}>✕</Text>
                          <Text style={style.discription}>Everything is in God's hands<Text style={style.see}>....See more</Text>  </Text>
                  </View> 
                  <View style={style.userpostimgarea}>
                        <ImageBackground resizeMode="contain" style={style.postphoto} source={require("./img/3.jpg")}>
                          <Text style={{color:"orange",fontWeight:"bold",textAlign:"center",fontSize:30,}}>JAY SHREE RAM</Text>
                        </ImageBackground>
                  </View>
                  <View style={style.likebar}>
                        <Text style={style.like}>👍Like</Text>
                        <Text style={style.like}>🗨️Comment</Text>
                        <Text style={style.like}>➦Share</Text>
                  </View>
            </View>{/*===================================================================*/}
            <View>
                  <View style={style.userpost}>
                        <View style={style.userpro}>
                              <Image source={require("./img/5.jpg")} style={style.userpic2}></Image>
                        </View>
                          <Text style={style.username}>Facebook🌀</Text>
                          <Text style={style.postdata}>1 week ago.</Text>
                          <Text style={style.threedot}>•••</Text>
                          <Text style={style.not}>✕</Text>
                          <Text style={style.discription}>Like , Share and<Text style={style.see}>....See more</Text>  </Text>
                  </View> 
                  <View style={style.userpostimgarea}>
                        <Image resizeMode="cover" style={style.postphoto} source={require("./img/4.jpg")}></Image>
                  </View>
                  <View style={style.likebar}>
                        <Text style={style.like}>👍Like</Text>
                        <Text style={style.like}>🗨️Comment</Text>
                        <Text style={style.like}>➦Share</Text>
                  </View>
            </View>{/*===================================================================*/}            
      </>    
      </ScrollView>
    </>

  )
}
export default Facebook;
// ==========================================----CSS----=================================================
const style = StyleSheet.create({
  myview1: {
    height: 55,
    width: "100%",
    backgroundColor: "white",
    flexDirection: "row",
    paddingTop: 8,
  },
  mytext1: {
    fontSize: 35,
    fontWeight: "900",
    color: "rgb(24 119 242)",
    marginLeft: 10,
  },
  icons: {
    color: "black",
    height: 40,
    width: 40,
    fontSize: 19,
    textAlign: "center",
    paddingTop: 14, paddingBottom: 5,
    borderRadius: 50,
    backgroundColor: "rgb(226,226,226)",
  },
  myview2: {
    height: 50,
    flexDirection: "row",
    borderStyle: 'solid',
    borderBottomWidth: 2,
    borderColor: "grey",
  },
  icon1: {
    height: "100%",
    fontSize: 30,
    width: "16.66%",
    padding: 8,
    color:"black",
    borderBottomColor:"rgb(24 119 242)",
    borderBottomWidth:3,
  },
  icon2: {
    height: "100%",
    fontSize: 30,
    width: "16.66%",
    padding: 8,
    color:"black",
    // borderBottomColor:"rgb(24 119 242)",
    // borderBottomWidth:3,
  },
  icon3: {
    height: "100%",
    fontSize: 30,
    width: "16.66%",
    padding: 8,
    color:"black",
    // borderBottomColor:"rgb(24 119 242)",
    // borderBottomWidth:3,
  },
  icon4: {
    height: "100%",
    fontSize: 30,
    width: "16.66%",
    padding: 8,
    color:"black",
    // borderBottomColor:"rgb(24 119 242)",
    // borderBottomWidth:3,
  },
  icon5: {
    height: "100%",
    fontSize: 30,
    width: "16.66%",
    padding: 8,
    color:"black",
    // borderBottomColor:"rgb(24 119 242)",
    // borderBottomWidth:3,
  },
  icon6: {
    height: "100%",
    fontSize: 30,
    width: "16.66%",
    padding: 8,
    color:"black",
    // borderBottomColor:"rgb(24 119 242)",
    // borderBottomWidth:3,
  },
  post: {
    paddingTop: 5,
    height: 50,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  pic: {
    height: 40,
    width: 40,
    borderRadius: 50,
    overflow: "hidden",
    fontSize: 25,
    color:"black",
    paddingTop: 10, paddingLeft: 4,
    borderWidth: 1, borderColor: "grey",
    backgroundColor: "rgb(226,226,226)",
  },
  write: {
    height: 40,
    width: 230,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "grey",
  },
  tex: {
    fontSize: 15,
    padding: 12,
  },
  ico: {
    height: 40,
    width: 40,
    fontSize: 25,
    paddingTop: 11,
    color:"black",
  },
  storyarea: {
    height: 170,
    // width:"100%",
    borderTopWidth: 6,
    borderBottomWidth: 6,
    borderColor: "grey",
    padding: 7.5,
    flexDirection: "row",
  },
  aadstory: {
    height: 143,
    width: 90,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "grey",
    marginLeft:5,
  },
  add: {
    height: '60%',
    fontSize: 70,
    paddingTop: 15,
    color:"black",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: "rgb(226,226,226)",
  },
  add2: {
    height: "40%",
    backgroundColor: "white",
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8,
    // paddingLeft: 28,
  },
  addicobg: {
    position:"absolute",
    left:"33%",
    top:"-18%",
    width: 30,
    height: 30,
    backgroundColor: "white",
    padding: 2.3,
    borderRadius: 25,
  },
  addico: {
    height: 25,
    width: 25,
    backgroundColor: "rgb(24 119 242)",
    borderRadius: 25,
    fontWeight: "bold",
    color: "white",
    fontSize: 30,
    paddingLeft: 1,
  },
  adstory :{
    position:"absolute",
    bottom:-30,
    left:-18,
    width:70,
    color:"black",
  },
  user :{
    position:"absolute",
    top:5,left:5,
    height:35,
    width:35,
    borderWidth:3,
    borderOffset:2,
    borderColor:"rgb(24 119 242)",
    borderRadius:20,
    backgroundColor:"rgb(226,226,226)",
  },
  usernm :{
    position:"absolute",
    top:"85%",
    left:16,
    textAlign:"center",
    color:"black",
  },
  userpostnotdis:{
    height:50,
    borderBottomWidth:1,
    borderColor:"grey", 
  },
  userpost :{
    height:70,
    borderBottomWidth:1,
    borderColor:"grey",
  },
  userpro :{
    position:"absolute",
    top:5,left:10,
    height:40,
    width:40,
    borderRadius:20,
    borderWidth:1,
    // backgroundColor:"grey", 
  },
  userpic2 :{
    height:"100%",
    width:"100%",
    borderRadius:50,
  },
  username :{
    fontSize:18,
    position:"absolute",
    left:55,top:10,
    color:"black"
  },
  postdata :{
    position:"absolute",
    left:60,top:25,
    fontSize:13,
    color:"black",
  },
  threedot :{
    // backgroundColor:"yellow",
    fontSize:25,
    color:"grey",
    position:"absolute",
    left:280,top:15,
  },
  not :{
    fontSize:20,
    color:"grey",
    fontWeight:"bold",
    position:"absolute",
    left:320,top:15,
  },
  discription :{
    position:"absolute",
    fontSize:18,
    // backgroundColor:"yellow",
    top:50,left:15,color:"black",
  },
  see :{
    fontSize:13,
    color:"grey",
  },

  userpostimgarea:{
    height:320,
  },
  // userpostimg:{
  //   height:"100%",
  //   fontSize:270,
  //   textAlign:"center",
  //   paddingTop:50,
  //   color:"black",
  // },
  postphoto:{
    height:"100%",
    width:"100%"
  },
  likebar :{
    height:45,
    borderTopWidth:1,
    borderBottomWidth:6,
    borderColor:"grey",
    flexDirection:"row",
    justifyContent:"space-evenly",
    paddingTop:10,
  },
  like :{
    fontSize:15,
    color:"grey",
  }
})


