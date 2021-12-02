import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';
// reducer function
const reducer = (state, action) => {
  if (action.type === 'TESTING') {
    return {
      ...state,
      people: data,
      isModalOpen: true,
      modalContent: 'item added'
    };
  }
}

const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent: '',
};

const Index = () => {

  const [name, setName] = useState('');
  const [state, dispatch] = useReducer(reducer, defaultState);


  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      dispatch({type: 'TESTING'})
    }
    else {

    }
  }

  return (<>

    {state.isModalOpen && <Modal modalContent={state.modalContent} />}
    <form onSubmit={handleSubmit} className='form'>
      <div>
        <label htmlFor='mytext'>Text</label>
        <input
          type='text'
          name='mytext'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <button type='submit'>add</button>
    </form>

    {state.people.map((person) =>{
      return (
        <div key={person.id}>
          <h4>{person.name}</h4>
        </div>
      )}
    )}

  </>);
};

export default Index;
