import React, { useState, useReducer, useRef, useEffect } from 'react';
import Modal from './Modal';
import {reducer} from './reducer'
// reducer function

const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent: '',
}

const Index = () => {

  const [name, setName] = useState('');

  const [state, dispatch] = useReducer(reducer, defaultState);

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      const newItem = {id: new Date().getTime().toString(), name};
      dispatch({type: 'ADD_ITEM', payload: newItem});
      setName('');
    }
    else {
      dispatch({type: 'NO_VALUE'})
    }
  }

  const closeModal = () => {
    dispatch({type: 'CLOSE_MODAL'});
  }

  return (<>

    {state.isModalOpen && <Modal closeModal={closeModal} modalContent={state.modalContent}/>}
    <form onSubmit={handleSubmit} className='form'>
      <div>
        <label htmlFor='mytext'>Text</label>
        <input
          type='text'
          ref={inputRef}
          name='mytext'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <button type='submit'>add</button>
    </form>

    {
      state.people.map((person) => {
        return (
          <div key={person.id} className='item'>
            <h4>{person.name}</h4>
            <button onClick={() => dispatch({type: 'REMOVE_ITEM', payload: person.id})}>X</button>
          </div>
        );
      })
    }

  </>);
};

export default Index;
