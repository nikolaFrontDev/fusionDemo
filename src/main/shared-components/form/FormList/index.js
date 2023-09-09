import React from "react";
import styles from "./FormList.module.css";
import FormItem from "../FormItem";
import { useSelector } from "react-redux";

export default function FormList({ criteria }) {
  const members = useSelector((state) => state.postSlice.members);

  return (
    <div className={styles.boxforusers}>
      {members
        ?.filter(
          (member) =>
            member.name.toLowerCase().includes(criteria.toLowerCase()) ||
            member.lastName.toLowerCase().includes(criteria.toLowerCase())
        )
        .map((member) => (
          <FormItem key={member.id} member={member} />
        ))}
    </div>
  );
}
