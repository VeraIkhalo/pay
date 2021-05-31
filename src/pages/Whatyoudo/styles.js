import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
 grid1: {
    background:' url(https://image.freepik.com/free-photo/smiling-pretty-young-woman-white-t-shirt-wearing-sunglasses-her-head-thinking-while-holding-shopping-bags-white-wall_141793-31464.jpg)' ,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    color:'white',
    display:'flex',
    flexDirection:'column',
    justifyContent:'space-between',
    alignItems:'left',
    "@media (max-width: 760px)": {
      display:'none'
  },
},
  coloroverlay: {
  width: '25%',
  height: '100%',
  background: 'linear-gradient(to right, #7f1047, #c70147)',
  opacity: .8,
  position: 'absolute'
 },
 grid2: {
     backgroundColor:'#eeeeee',
     display:'flex',
     paddingTop:40,
     flexDirection:'column',
     paddingLeft:50,
     height:659,
     "@media (max-width: 760px)": {
      display:'none'
  },
 },
 store: {
    display:'flex',
    alignItems:'center'
},  
 image: {
      width:'70%',
      zIndex:11
  },
  image2: {
    width:'80%',
    height:'80%'
},
 icon: {
      cursor:'pointer',
      fontSize: 15  
  },
 paper2: {
      fontSize:12,
      display:'flex',
      justifyContent:'center',
      flexDirection:'column',
      borderRadius:10
 },
 paper3: {
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
},
  paper4: {
    display:'flex',
    justifyContent:'space-around',
    borderRadius:10,
    height:'8%',
    width:'80%',
    marginTop:10 
  },
  one: {
      width:20,
      height:13,
      borderRadius:'50%',
      backgroundColor:'#ff005e',
      color:'white',
      textAlign:'center',
      padding:4
  },
  two: {
    width:20,
      height:20,
      borderRadius:'50%',
      backgroundColor:'#cbcbcb',
      color:'white',
      textAlign:'center',
      position:'absolute',
      left:116
},
  three: {
      width:20,
      height:20,
      borderRadius:'50%',
      backgroundColor:'#cbcbcb',
      color:'white',
      textAlign:'center',
      position:'absolute',
      left:236
},
  four: {
    width:20,
    height:20,
    borderRadius:'50%',
    backgroundColor:'#cbcbcb',
    color:'white',
    position:'absolute',
    left:356,
    textAlign:'center'
},
  dash1: {
      backgroundColor:'#cbcbcb',
      width:100,
      height:5,
      top:8,
      position:'absolute'
  },
  dash2: {
    backgroundColor:'#cbcbcb',
    width:100,
    height:5,
    top:8,
    left:136,
    position:'absolute'
  },
  dash3: {
    backgroundColor:'#cbcbcb',
    width:100,
    height:5,
    top:8,
    left:256,
    position:'absolute'
  },
  grid3:{
    display:'flex',
    flexDirection:'column',
    paddingTop:20,
    paddingLeft:70,
    paddingRight:70,
},    
  form: {
      display:'flex',
      flexDirection:'column',
      alignItems:'start',
      color:'#b478a5',
      fontSize:20
  },
  label: {
      marginBottom: 10,
      marginTop: 10
  },
  input: {
      width:'90%',
      marginBottom:10,
      border:'none',
      outline:'none',
      fontSize:20,
      paddingLeft:30,
      height:20,
      borderRadius:10
  },
  naira:  {
      position:'absolute',
      color:'white',
      left:0,
      padding:4,
      top:1.3,
      backgroundColor:'#b478a5'
  },
  button: {
      border:'2px solid #cc1b54',
      width:200,
      marginTop:40,
      borderRadius:25,
      color:'#cc1b54'
  },
  line1: {
    width:3,
    height:20,
    backgroundColor:'#cbcbcb',
    position:'absolute',
  }


}));



