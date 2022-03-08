import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";

const InviteUser = () => {
  const { username } = useParams();
  const [output, setoutput] = React.useState('Loading...');

  useEffect(() => {
    if ( username === "omarlxta" ) {
      window.location.href = "https://videoconference.evanalin.com/31faaf95-a2b7-41b8-a114-089d8d9c737c";
    } else if ( username === "roberttaylor" ) {
      window.location.href = "https://videoconference.evanalin.com/7bcdefa8-6d93-4251-a321-164cdcbc8f88";
    } else {
      setoutput("Invalid Username");
    }
  }, []);
  
  return (
    <div>
        {output}
    </div>
  )
}

export default InviteUser