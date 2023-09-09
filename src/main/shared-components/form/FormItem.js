import React from 'react'
import { FaUser, FaUsers } from 'react-icons/fa';
import styles from '../form/FormItem.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { postActions } from './../../store/post-slice';
import Input from '../input/Input';

export default function FormItem({ member }) {

 const dispatch = useDispatch();

 const checkMembers = useSelector((state) => state.post.checkMembers);

 const checkUsers = (e) => {
      if(e.target.checked){
        dispatch(postActions.addCheckMembers(member));
      }else{
        dispatch(postActions.removeCheckMembers(member));
      }
  };
  return (
    <div className={styles.forget}>
      <label className={styles.checkbox}>
        <Input
          type="checkbox"
          id={member.id}
          name={member.name}
          value={member.name}
          onChange={e => checkUsers(e)}
          checked={checkMembers.some((checkMem) => checkMem.id === member.id)}
          />
        <span className={styles['checkbox-custom']}></span>
        <span className={styles.users}>{member.lastName ? member.name + " " + member.lastName : member.name}</span>
        <i className={styles['faiconsforuser-s']}>
          {member.type === 0 ? <FaUser /> : <FaUsers />}</i>
      </label>
    </div>
  )
}
