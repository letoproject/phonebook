import { useState } from "react";
import { nanoid } from "nanoid";
import s from './ContactForm.module.css'

const ContactForm = ({onSubmit}) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const nameId = nanoid(4);
  const numberId = nanoid(4);

  const handleInputChange = (e) => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit({name, number});

    setName('');
    setNumber('');
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label htmlFor={nameId}>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          id={nameId}
          value={name}
          onChange={handleInputChange}
        />
      </label>
      <label htmlFor={numberId}>
        Number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          id={numberId}
          value={number}
          onChange={handleInputChange}
        />
      </label>
      <button className={s.btn} type="submit">
        Add contact
      </button>
    </form>
  );
}

// class oldContactForm extends Component {
//   state = {
//     name: "",
//     number: "",
//   };

//   nameId = nanoid(4);
//   numberId = nanoid(4);

//   handleInputChange = (e) => {
//     const { name, value } = e.currentTarget;

//     this.setState({ [name]: value });
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();

//     this.props.onSubmit(this.state);

//     this.reset();
//   };

//   reset = () => {
//     this.setState({ name: "", number: "" });
//   };

//   render() {
//     return (
//       <form className={s.form} onSubmit={this.handleSubmit}>
//         <label htmlFor={this.nameId}>
//           Name
//           <input
//             type="text"
//             name="name"
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             required
//             id={this.nameId}
//             value={this.state.name}
//             onChange={this.handleInputChange}
//           />
//         </label>
//         <label htmlFor={this.numberId}>
//           Number
//           <input
//             type="tel"
//             name="number"
//             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//             required
//             id={this.numberId}
//             value={this.state.number}
//             onChange={this.handleInputChange}
//           />
//         </label>
//         <button className={s.btn} type="submit">Add contact</button>
//       </form>
//     );
//   }
// }

export default ContactForm;
