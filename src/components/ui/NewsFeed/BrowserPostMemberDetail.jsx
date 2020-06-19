import React from "react";
import { createUseStyles } from "react-jss";
import Break from "../themantic-break/Break";
import {withRouter,Link} from 'react-router-dom'
import Auth from '../../../authorization/Auth'
import IconButton from '../../ui/button/IconButton'
import { BsPencil, MdAdd } from "react-icons/all";
import PostForm from '../../form/PostForm'
import ModalCustom from '../modals/ModalCustom'



function BrowserPostMemberDetail(props) {
  const { post, profilesexperience } = props;
  const useStyles = createUseStyles((theme) => ({


    container: {
      padding: "0 0 0 8px",
      flex: " 1 0 0",
      display: "flex",
      flexDirection: "column",
      position:'relative'
    },
    name: {
      maxWidth: "200px",
      
      overflow: "hidden",

      fontSize: theme.text.size.t12,
      fontWeight: theme.text.weight.bold,
      color: theme.text.color.dark,

   
      paddingBottom: "0",
    },
    nameAndIcon: {
      display: "flex",

      lineHeight: "0.9",
    },
    distanceBadge: {
      fontWeight: theme.text.weight.normal,
      verticalAlign: "baseline",
      position: "relative",
      fontSize: theme.text.size.t1,

      color: theme.text.color.light,
      marginLeft: "10px",
    },
    span: {
      fontSize: theme.text.size.t1,

      fontWeight: theme.text.weight.normal,
      color: theme.text.color.dark,
      maxWidth: "200px",
    },
    pen:{
      position:'absolute',
      top:'0',
      right:'0',
    },
  }));
  const classes = useStyles();

  return (

  

    <div className={classes.container}>
        {Auth.user === post.username && (
      <ModalCustom
        title={"Update Experience"}
        button={
          <IconButton>
          <BsPencil />
          </IconButton>
        }
      >
   
        {/* <UpdateData
          data={profilesexperience}
          method={"PUT"}
          endpoint={`https://striveschool.herokuapp.com/api/posts/${}`}
          {...props}
        >
          <PostForm />
        </UpdateData> */}
            <PostForm />
      </ModalCustom>
    )}
      <span className={classes.name}>
        <span className={classes.nameAndIcon}>
        
     
          <span>
           <Link to={'/profile/'+post.username}>{post.user.name} {post.user.surname}</Link>
          </span>
       
            
          <span>
            <span className={classes.distanceBadge}>2nd</span>
          </span>
        </span>
      </span>
  
      <span className={classes.span}>{post.user.bio}</span>
      <span>{post.text}</span>

     

    </div>
  );
}

export default BrowserPostMemberDetail;
