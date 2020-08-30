import React, { useState } from 'react';
import RangeSlider from 'react-bootstrap-range-slider';

import { Form, Row, Col } from 'react-bootstrap';

const RatingComponent = (props) => {

  const [ value, setValue ] = useState(props.value || 1);

  React.useEffect(() => {
    setValue(props.value);
  }, [props.value]);

  return ( 
    <Form> 
      <Form.Group as={Row}>
        <Form.Label column sm="5">
          {props.label}
        </Form.Label>
        <Col sm="7">
          <RangeSlider
            value={value}
            tooltip='off'
            min={1}
            max={5}
            onChange={e => props.onChangeValue(e.target.value)}
          />
        </Col>
      </Form.Group>
    </Form>
  );

};

export default RatingComponent