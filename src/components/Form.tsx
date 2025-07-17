import React, { useState } from 'react';
import { useFormStore } from '../store/useFormStore';

export const Form: React.FC = () => {
  const {
    form,
    updatePersonalInfo,
    updateAddress,
    addEducation,
    updateEducation,
    removeEducation,
    updateComments,
    resetForm,
  } = useFormStore();

  const [newEducation, setNewEducation] = useState({
    institution: '',
    degree: '',
    year: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', form);
    resetForm();
  };

  const handleAddEducation = () => {
    addEducation(newEducation);
    setNewEducation({ institution: '', degree: '', year: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <h1>Form Example</h1>

      {/* Personal Information */}
      <div>
        <h2>Personal Information</h2>
        <div>
          <div>
            <label>Name</label>
            <input
              type="text"
              value={form.personalInfo.name}
              onChange={(e) => updatePersonalInfo('name', e.target.value)}
              className="input"
            />
          </div>
          <div>
            <label>Email</label>
            <input
              type="email"
              value={form.personalInfo.email}
              onChange={(e) => updatePersonalInfo('email', e.target.value)}
              className="input"
            />
          </div>
          <div>
            <label>Phone</label>
            <input
              type="tel"
              value={form.personalInfo.phone}
              onChange={(e) => updatePersonalInfo('phone', e.target.value)}
              className="input"
            />
          </div>
        </div>
      </div>

      {/* Address */}
      <div className="border p-4 rounded">
        <h2 className="text-xl mb-3">Address</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-2">
            <label>Street</label>
            <input
              type="text"
              value={form.address.street}
              onChange={(e) => updateAddress('street', e.target.value)}
              className="input"
            />
          </div>
          <div>
            <label>City</label>
            <input
              type="text"
              value={form.address.city}
              onChange={(e) => updateAddress('city', e.target.value)}
              className="input"
            />
          </div>
          <div>
            <label>Zip Code</label>
            <input
              type="text"
              value={form.address.zipCode}
              onChange={(e) => updateAddress('zipCode', e.target.value)}
              className="input"
            />
          </div>
        </div>
      </div>

      {/* Education History */}
      <div>
        <h2>Education History</h2>

        {/* Existing Education Entries */}
        {form.educationHistory.length > 0 && (
          <div>
            <h3>Saved Education:</h3>
            {form.educationHistory.map((edu) => (
              <div key={edu.id} className="education-entry">
                <div>
                  <span>
                    {edu.institution} - {edu.degree}{' '}
                    {edu.year && <span> - {edu.year}</span>}
                  </span>
                  <button
                    type="button"
                    onClick={() => removeEducation(edu.id)}
                    className="button remove floating-right"
                  >
                    &times;
                  </button>
                </div>
                <div>
                  <div>
                    <label>Institution</label>
                    <input
                      type="text"
                      value={edu.institution}
                      onChange={(e) =>
                        updateEducation(edu.id, 'institution', e.target.value)
                      }
                      className="input"
                    />
                  </div>
                  <div>
                    <label>Degree</label>
                    <input
                      type="text"
                      value={edu.degree}
                      onChange={(e) =>
                        updateEducation(edu.id, 'degree', e.target.value)
                      }
                      className="input"
                    />
                  </div>
                  <div>
                    <label>Year</label>
                    <input
                      type="text"
                      value={edu.year}
                      onChange={(e) =>
                        updateEducation(edu.id, 'year', e.target.value)
                      }
                      className="input"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Add New Education */}
        <div className="education-block">
          <h3>Add New Education</h3>
          <div>
            <div>
              <label>Institution</label>
              <input
                type="text"
                value={newEducation.institution}
                onChange={(e) =>
                  setNewEducation({
                    ...newEducation,
                    institution: e.target.value,
                  })
                }
                className="input"
              />
            </div>
            <div>
              <label>Degree</label>
              <input
                type="text"
                value={newEducation.degree}
                onChange={(e) =>
                  setNewEducation({ ...newEducation, degree: e.target.value })
                }
                className="input"
              />
            </div>
            <div>
              <label>Year</label>
              <input
                type="text"
                value={newEducation.year}
                onChange={(e) =>
                  setNewEducation({ ...newEducation, year: e.target.value })
                }
                className="input"
              />
            </div>
          </div>
          <button
            type="button"
            onClick={handleAddEducation}
            className="button"
            disabled={!newEducation.institution || !newEducation.degree}
          >
            Add Education
          </button>
        </div>
      </div>

      {/* Comments */}
      <div>
        <label>Additional Comments</label>
        <textarea
          value={form.comments}
          onChange={(e) => updateComments(e.target.value)}
          className="textarea"
          rows={4}
        />
      </div>

      {/* Form Actions */}
      <div className="flex justify-between">
        <button type="button" onClick={resetForm} className="button reset">
          Reset
        </button>
        <button type="submit" className="button">
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;
