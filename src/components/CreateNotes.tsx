import React, { useRef, useState } from 'react';
import { Form, Button } from 'react-bootstrap';

interface ICreateNotesProps {}

const CreateNotes: React.FunctionComponent<ICreateNotesProps> = (props) => {
  const [error, setError] = useState<string>('');
  const titleRef = useRef<HTMLInputElement | null>(null);
  const textRef = useRef<HTMLTextAreaElement | null>(null);
  const colorRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (titleRef.current.value === '' || textRef.current.value === '') {
      return setError('Please fill in all fields');
    }
  };
  <>
    <h2>Create Notes</h2>
    <Form className="mt-3 mb-3" onSubmit={(e) => handleSubmit(e)}>
      <Form.Group className="mb-3" controlId="formBasicTitle">
        <Form.Label>Title:</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Title for the Note"
          ref={titleRef}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Text:</Form.Label>
        <Form.Control
          placeholder="Enter your notes"
          as="textarea"
          rows={3}
          ref={textRef}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label htmlFor="colorInput">Notes Color</Form.Label>
        <Form.Control
          type="color"
          id="colorInput"
          defaultValue="#DFDFDF"
          ref={colorRef}
          title="Choose your color"
        />
      </Form.Group>
      <Button type="submit" variant="primary">
        Submit
      </Button>
    </Form>
  </>;
};

export default CreateNotes;
