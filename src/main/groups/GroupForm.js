import React, { useState } from "react";

import styles from "../groups/GroupForm.module.css";
import FusionLogo from "../../img/green-power.png";
import Header from "./../shared-components/header/Header";
import FormListButton from "./../shared-components/form/FormListButton";
import Search from "../shared-components/search/Search";

const GroupForm = ({ groups }) => {
  const [query, setQuery] = useState("");

  return (
    <form>
      <Header
        style={styles.titleGroupForm}
        title="Groups"
        image={FusionLogo}
        imageStyle={styles.log}
      />
      <Search
        type="search"
        style={styles.searchUsers}
        placeholder="Search..."
        autoComplete="off"
        id="search"
        onChange={(e) => setQuery(e.target.value)}
      />
      <FormListButton query={query} groups={groups} />
    </form>
  );
};
export default GroupForm;
