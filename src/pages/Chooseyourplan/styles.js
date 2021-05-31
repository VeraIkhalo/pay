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
  },},
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
      fontSize: 17, 
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
      height:20,
      borderRadius:'50%',
      backgroundColor:'#ff005e',
      color:'white',
      textAlign:'center',
      left:27,
      fontSize:10,
      position:'absolute'
  },
  two: {
    width:20,
      height:20,
      borderRadius:'50%',
      backgroundColor:'#ff005e',
      color:'white',
      textAlign:'center',
      position:'absolute',
      left:136
},
  three: {
      width:20,
      height:20,
      borderRadius:'50%',
      backgroundColor:'#cbcbcb',
      color:'white',
      textAlign:'center',
      position:'absolute',
      left:246
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
      width:90,
      height:5,
      top:8,
      left:47,
      position:'absolute'
  },
  dash2: {
    backgroundColor:'#cbcbcb',
    width:90,
    height:5,
    top:8,
    left:156,
    position:'absolute'
  },
  dash3: {
    backgroundColor:'#cbcbcb',
    width:90,
    height:5,
    top:8,
    left:266,
    position:'absolute'
  },
  grid3:{
    display:'flex',
    flexDirection:'column',
    paddingTop:20,
    paddingLeft:70,
    paddingRight:70,
  },    
  button: {
      border:'2px solid #cc1b54',
      width:230,
      marginTop:40,
      borderRadius:25,
      color:'#cc1b54',
      textTransform:'lowercase',
      fontSize:20
  },
  form: {
  background:'linear-gradient(to right, #751846, #ca1651)',
  borderRadius:10,
  padding:10,
  height:130
 },
  paper: {
  width:'100%', 
  height:150, 
  display:'flex',
  paddingLeft:10,
  borderRadius:10,
  position:'relative'
  },
  line1: {
    width:2,
    height:120,
    position:'absolute',
    backgroundColor:'#cbcbcb',
    left:155,
    top:15
  },
  customize:{
    color:'white',
    width:100,
    margin:'auto',
    marginBottom:20
  },
  button2: {
    textTransform:'lowercase',
    color:'white',
    border:'1px solid white',
    borderRadius:20,
    marginTop:25,
    fontSize:10,
    padding:5,
    width:100,
    marginBottpm:15,
  },
  input: {
    paddingLeft:30,
    width:'70%',
    outline:'none'
  },
  naira: {
    position:'absolute',
    left:27,
    top:68
    },
    line2: {
      width:2,
      height:18,
      backgroundColor:'#cbcbcb',
      position:'absolute',
      left:45,
      top:68
    },
    

}));



