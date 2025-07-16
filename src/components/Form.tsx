import { useFormStore } from '../store/useFormStore';

export default function Form() {
  const { form, updateField, resetForm } = useFormStore();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    updateField(name as 'name' | 'email', value);
  };

  return (
    <form className="form">
      <input
        type="text"
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Your Name"
        className="input"
      />
      <input
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Your Email"
        className="input"
      />
      <textarea
        name="comments"
        value={form.comments}
        onChange={(e) => updateField('comments', e.target.value)}
        placeholder="Your Comments"
        className="textarea"
      />
      <button type="button" onClick={resetForm} className="button">
        Reset
      </button>
    </form>
  );
}
