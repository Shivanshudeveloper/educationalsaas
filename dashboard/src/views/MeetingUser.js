import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";

const MeetingUser = () => {
  const { username } = useParams();
  const [output, setoutput] = React.useState('Loading...');

  useEffect(() => {
    if ( username === "omarlxta" ) {
      window.location.href = "https://videoconference.evanalin.com/36962c45-71f2-4535-8d01-c3cc11b7c915";
    } else if ( username === "roberttaylor" ) {
      window.location.href = "https://videoconference.evanalin.com/e0387537-8bc6-42c1-8bf2-ceb36779bdc6";
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

export default MeetingUser