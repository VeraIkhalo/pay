
import {Grid, Paper, Typography, Button} from '@material-ui/core';
import Logo from '../../assets/logo.jpg';
import Phone from '../../assets/phone.jpg';
import Shirt from '../../assets/shirt.jpg';
import Paidemp from '../../assets/paid-emp.jpg';
import Selfemp from '../../assets/self-emp.jpg';
import Corporate from '../../assets/corporate-emp.jpg';
import useStyles from './styles';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
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
                    <span className={classes.one} >1</span><span className={classes.dash1}></span><span className={classes.two} >2</span><span className={classes.dash2}></span><span className={classes.three}>3</span><span className={classes.dash3}></span><span className={classes.four}>4</span>
                </div>
                <div>
                    <Typography variant="h4" style={{color:'#b478a5',fontWeight:700,textAlign:'center',marginBottom:30}}>What Do You Do?</Typography>
                    <div style={{display:'flex',justifyContent:'space-between'}}>
                        <div style={{display:'flex',flexDirection:'column',color:'#b478a5',fontWeight:700}}>
                            <img src={Selfemp} alt="" style={{width:120,height:130}} />
                            <p>Paid Employment</p>
                        </div>
                        <div style={{display:'flex',flexDirection:'column'}}>
                            <img src={Paidemp} alt=""  style={{width:120,height:130}} />
                            <p style={{width:100,color:'#b478a5'}}>Self Empoyed/ Freelance</p>
                        </div>
                        <div style={{display:'flex',flexDirection:'column'}}>
                            <img src={Corporate} alt=""  style={{width:120,height:130}}/>
                            <p style={{width:150,color:'#b478a5'}}>Corporate Organization</p>
                        </div>
                    </div>    
                </div>
                <div >   
                <form className={classes.form}>
                        <label className={classes.label}>How much do you get paid monthly?</label>
                    <Paper style={{width:'90%',position:'relative'}}>
                        <span className={classes.naira}>₦</span>
                        <input className={classes.input} type="number" placeholder="|"/>
                    </Paper>
                        <label className={classes.label}>When is your salary date?</label>
                    <Paper style={{width:'90%'}}>
                        <input className={classes.input} type="date"/>
                    </Paper>
                        <label className={classes.label}>Do you have an existing loan(s)?</label>
                    <Paper style={{display:'flex',justifyContent:'space-around', width:'90%',height:'20%', position:'relative'}}>
                        <div style={{display:'flex',alignItems:'center'}}><input style={{webkitAppearance:'none',marginRight:15,width:10, height:10,borderRadius:'50%',outline:'none',boxShadow:'0 0 0 2px #cc1b54'}} type="radio" /><label>Yes</label></div>
                        <span className={classes.line1}></span>
                        <div style={{display:'flex',alignItems:'center'}}><input style={{webkitAppearance:'none',marginRight:15,width:10, height:10,borderRadius:'50%',outline:'none',boxShadow:'0 0 0 2px #cc1b54'}} type="radio" /><label>No</label></div>
                    </Paper>
                    <div style={{margin:'auto'}} >
                        <Link style={{textDecoration:'none'}} exact to="/Chooseyourplan" >
                            <Button className={classes.button}>Continue</Button>
                        </Link>    
                    </div>
                </form>  
                </div>   
            </Grid>
      </Grid>
    </main>
  );
};

export default Products;
