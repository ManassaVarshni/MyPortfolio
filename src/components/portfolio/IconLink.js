import React from 'react';
import Button from "react-bootstrap/Button";
import { AiOutlineCode } from "react-icons/ai";
import { Row } from "react-bootstrap";

function IconLink(props) {
   const {link, title} = props;
   return (
      <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={link}
            target="_blank"
            style={{ padding: '8px 20px' }}
          >
            <AiOutlineCode />
            &nbsp;{title}&nbsp;
          </Button>
        </Row>
   );
}
// function IconLink(props) {
//    const {link, title, icon} = props;
//    return (
//       <a href={link} target={"_blank"} rel="noopener noreferrer">
//          <i className={icon}/> {title}
//       </a>
//    );
// }

export default IconLink;