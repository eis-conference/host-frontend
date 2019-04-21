/**
 * Created by 励颖 on 2019/4/22.
 */
import React from "react";
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "@material-ui/core/Button";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardAvatar from "components/Card/CardAvatar.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import withStyles from "@material-ui/core/styles/withStyles";
import TextField from "@material-ui/core/TextField";
import avatar from "assets/img/faces/marc.jpg";

const styles = theme => ({
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "16px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "400",
    fontSize:"22px",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
});

class CreateMeeting extends  React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users:[{username:"Jack"},{username:"Alice"},{username:"Lily"}],
      attendants:[]
    }

  }

  handleChangeAttendants=(username)=>{
    let index = this.state.attendants.indexOf(username);
    console.log(username,":",index);
    if(index === -1)
      this.state.attendants.push(username);
    else
      this.state.attendants.splice(index, 1);

    console.log(this.state.attendants);
  };

  render(){
    const{classes} = this.props;
    return (
        <div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={8}>
              <Card>
                <CardHeader color="primary">
                  <h4 className={classes.cardTitleWhite}>创建会议</h4>
                  <p className={classes.cardCategoryWhite}>请填写以下相关信息</p>
                </CardHeader>
                <CardBody>
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={5}>
                      <TextField
                          label="会议主题"
                          id="title"
                          fullWidth
                          defaultValue="会议主题"
                          style={{marginTop:"10%"}}
                          variant="outlined"
                      />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                      <TextField
                          label="会议地点"
                          id="location"
                          fullWidth
                          defaultValue="会议地点"
                          style={{marginTop:"13%"}}
                          variant="outlined"
                      />
                    </GridItem>
                      <GridItem xs={12} sm={12} md={3}>
                        <TextField
                            label="主持人"
                            id="host"
                            fullWidth
                            disabled={true}
                            defaultValue="励颖"
                            style={{marginTop:"18%"}}
                            variant="outlined"
                        />
                    </GridItem>
                  </GridContainer>
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={4}>
                        <TextField
                            id="date"
                            label="会议日期"
                            type="date"
                            defaultValue="2019-04-22"
                            fullWidth
                            InputLabelProps={{
                              shrink: true,
                            }}
                            className={classes.textField}
                            style={{marginTop:"15%"}}
                            variant="outlined"
                        />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                      <TextField
                          id="time"
                          label="开始时间"
                          type="time"
                          defaultValue="07:30"
                          fullWidth
                          className={classes.textField}
                          InputLabelProps={{
                            shrink: true,
                          }}
                          inputProps={{
                            step: 1800, // 30 min
                          }}
                          style={{marginTop:"15%"}}
                          variant="outlined"
                      />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                      <TextField
                          id="time"
                          label="结束时间"
                          type="time"
                          defaultValue="08:30"
                          fullWidth
                          className={classes.textField}
                          InputLabelProps={{
                            shrink: true,
                          }}
                          inputProps={{
                            step: 1800, // 30 min
                          }}
                          style={{marginTop:"15%"}}
                          variant="outlined"
                      />
                    </GridItem>
                  </GridContainer>
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={6}>
                      <TextField
                          id="description"
                          label="会议描述"
                          multiline
                          rows="4"
                          fullWidth
                          defaultValue="请在此输入会议相关信息.."
                          className={classes.textField}
                          margin="normal"
                          style={{marginTop:"15%"}}
                          variant="outlined"
                      />
                    </GridItem>
                  </GridContainer>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <Card>
              <CardAvatar profile>
                <a href="#pablo" onClick={e => e.preventDefault()}>
                  <img src={avatar} alt="..." />
                </a>
              </CardAvatar>
              <CardBody profile>
                {this.state.users.map(user => (
                    <FormControlLabel
                        control={
                          <Checkbox
                              checked={this.state.attendants.indexOf(user.username) !== -1}
                              onChange={()=>this.handleChangeAttendants(user.username)}
                          />
                        }
                        label={user.username}
                    />
                ))}
                <br/>
                <br/>
                <Button style={{background:"#9C27B0", color:"white", marginLeft:"30%", fontSize:"16px"}}>
                  添加与会人员
                </Button>
              </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
    )
  }
}

export default withStyles(styles)(CreateMeeting);