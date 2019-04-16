/**
 * Created by 励颖 on 2019/4/16.
 */
import React from "react";
import PropTypes from "prop-types";
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
});

class MeetingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDetail: false,
      meeting_id:"",
      title:"",
      description:"",
      location:"",
      start_time: -1,
      end_time: -1,
      date:"",
      hostname:"",
      attendants:[],

    };
  }

  render(){
  return(
      <div>

      </div>
  )}
}

export default withStyles(styles)(MeetingPage);