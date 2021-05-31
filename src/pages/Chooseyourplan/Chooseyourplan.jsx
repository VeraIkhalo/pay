import {Grid, Paper, Typography, Button} from '@material-ui/core';
import Logo from '../../assets/logo.jpg';
import Phone from '../../assets/phone.jpg';
import Shirt from '../../assets/shirt.jpg';
import useStyles from './styles';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import DoneIcon from '@material-ui/icons/Done';
import Month1 from '../../assets/month1.png';
import Month2 from '../../assets/month2.png';
import Month3 from '../../assets/month3.png';
import Month4 from '../../assets/month4.png';
import Month5 from '../../assets/month5.png';
import Month6 from '../../assets/month6.png';
import { Link } from "react-router-dom";


const Products = () => {
const classes = useStyles();

return (
    <main >
      <Grid container justify="center">
            <Grid className={classes.grid1} item xs={6} sm={6} md={3} lg={3} >
                <div className={classes.coloroverlay}></div>
                <p style={{paddingLeft:20, zIndex:11}} className={classes.store}> <ArrowBackIcon className={classes.icon} />Back to store</p>
                <img style={{paddingLeft:20}}src={Logo} alt=""  className={classes.image} />
                <ul style={{zIndex:11}}>
                    <li>Get pre-approved instantly</li>
                    <li>Spread payment for up to six months</li>
                    <li>Provide some basic information to get started</li>   
                </ul>
            </Grid>
            <Grid className={classes.grid2} item xs={6} sm={6} md={3} lg={3}>
                <Typography  style={{paddingBottom:15,fontWeight:700}}> ORDER SUMMARY </Typography>
                <Paper className={classes.paper2} style={{height:'40%',width:'80%'}}>
                    <div style={{display:'flex',justifyContent:'center'}} >
                    <Paper className={classes.paper3}  style={{height:'90%',width:'40%',marginRight:10,marginBottom:10}}>
                        <img src={Phone} alt=""  className={classes.image2} />
                    </Paper>
                    <div style={{lineHeight:0.7, color:'#bebebe'}}>
                        <p>Meeysoo P45 Pro</p>
                        <p> ₦42,900</p>
                        <p>Qty: 1</p>
                    </div> 
                    </div> 
                    <div style={{display:'flex',justifyContent:'center'}}>
                    <Paper className={classes.paper3}  style={{height:'90%',width:'40%',marginRight:10}}>
                        <img src={Shirt} alt=""  className={classes.image2} />
                    </Paper>
                    <div style={{lineHeight:0.7, color:'#bebebe'}}>
                        <p>Meeysoo P45 Pro</p>
                        <p> ₦42,900</p>
                        <p>Qty: 1</p>
                    </div>
                    </div>      
                </Paper>
                <Paper className={classes.paper4} >
                    <p style={{color:'#bebebe'}}>Total Cart Value:</p>
                    <p>₦52,100</p>
                </Paper>
                
            </Grid>

            <Grid className={classes.grid3} item xs={12} sm={12} md={6} lg={6}> 
                <div style={{ position:'relative',marginBottom:30,marginLeft:70}}>  
                 <Link exact to="/">
                    <span style={{color:'#ff005e',position:'absolute',left:-70,fontWeight:'bold',display:'flex',alignItems:'center'}}><ArrowBackIcon className={classes.icon} />Back </span></Link>                   
                    <span className={classes.one} ><DoneIcon /></span><span className={classes.dash1}></span><span className={classes.two} >2</span><span className={classes.dash2}></span><span className={classes.three}>3</span><span className={classes.dash3}></span><span className={classes.four}>4</span>
                </div>
                <div>
                    <Typography variant="h5" style={{color:'#b478a5',fontWeight:700,textAlign:'center',marginBottom:30}}>Choose Your Plan</Typography>
                    <div style={{display:'flex',justifyContent:'center',marginBottom:60}}>
                        <img src={Month1} alt="" style={{width:80,height:80,marginRight:10}} />
                        <img src={Month2} alt="" style={{width:80,height:80,marginRight:10}} />
                        <img src={Month3} alt="" style={{width:80,height:80,marginRight:10}} />
                        <img src={Month4} alt="" style={{width:80,height:80,marginRight:10}} />
                        <img src={Month5} alt="" style={{width:80,height:80,marginRight:10}} />
                        <img src={Month6} alt="" style={{width:80,height:80,marginRight:10}} />
                    </div> 
                </div>    
                <div>
                    <Typography variant="h5" style={{color:'#b478a5',fontWeight:700,textAlign:'center',marginBottom:30}}>Payment Breakdown</Typography>
                    <Paper className={classes.paper} >
                        <span className={classes.line1}></span> 
                        <div style={{width:230,color:'#b478a5'}}>
                            <p>Shopping Credit</p>
                            <p>Down Payment</p>
                            <p>Monthly Installment</p>
                            <p>Tenure</p>
                        </div>
                        <div style={{width:230,color:'#b478a5',fontWeight:700}}>
                            <p>₦45,000</p>
                            <p>₦21,000</p>
                            <p>₦25,000</p>
                            <p>1 month</p>
                        </div>
                        <div className={classes.form}style={{width:230,color:'#b478a5',textAlign:'center',position:'relative'}}>
                            <form >
                                <p className={classes.customize}>Customize Down Payment</p>
                                <span class={classes.line2}></span>
                                <span class={classes.naira}>₦</span>
                                <input class={classes.input} type="number"placeholder="21,000|" />
                                <Button className={classes.button2}>Update Breakdown</Button>
                            </form>
                        </div>
                    </Paper>
                </div>    
                <div style={{margin:'auto'}} >
                        <Button className={classes.button}>Continue</Button>
                </div>   
            </Grid>
    
      </Grid>
    </main>
  );
};

export default Products;
