// Form.tsx

import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';



// SelectMenu Component
interface SelectProps {
  label: string;
  options: { label: string; value: string }[];
  error?: string;
  placeholder: string;
}

const SelectMenu: React.FC<SelectProps & React.SelectHTMLAttributes<HTMLSelectElement>> = ({ label, options, error, placeholder, ...props }) => {
  return (
    <div className="mt-2 mb-2 max-sm:w-full      max-md:px-3 ml-auto ">
      <label className="  mt-1 text-xl leading-7 text-[#171710] josefin-sans-font    ">
        {label}
      </label>
      <br />
      <Field as="select" {...props} className={`rounded-lg border-b  mb-2 text-[18px]  justify-center border-pink-300 bg-[rgba(19,19,19,0.05)] bg-opacity-25 py-1 mt-1 w-[333px] max-md:w-full text-[#525252] pl-2 josefin-sans-font ${error ? 'border-red-500' : ''}`}>
        <option value="" disabled style={{ fontSize: '16px', width: '50px' }}>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Field>
      {error && (
        <div className="text-red-500 mt-1">{error}</div>
      )}
    </div>
  );
};

// Form Component
const Forms: React.FC<any> = ({ showRes, setShowRes, handleSubmit }) => {
  const careers = [
    { value: "Software Engineer", label: "Software Engineer" },
    { value: "DevSecOps Engineer", label: "DevSecOps Engineer" },
    { value: "Full Stack Engineer", label: "Full Stack Engineer" },
    { value: "Data-Science Engineer", label: "Data-Science Engineer" },
    { value: "Hr", label: "Hr" },
    { value: "Team Leader", label: "Team Leader" },
  ];

  const number_of_years = [
    { value: "0", label: "0" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
    { value: "5", label: "5" },
    { value: "7", label: "7" },
    { value: "10", label: "10" },
    { value: "15", label: "15" }
  ];

  const country = [
    { label: "Tunisie", value: "Tunisie" },
    { value: "Palestine", label: "Palestine" },
    { value: "India", label: "India" },
    { value: "Algerie", label: "Algerie" },
  ];
 

  return (
    <div className="my-auto items-center px-3 py-4 mr-2 max-w-[336px] text-white rounded-lg leading-[100%] min-ml-auto  md:ml-[108px] md:max-w-lg mt-auto max-md:px-3 ">
      <Formik
        initialValues={{
          career: "",
          years: "",
          country: "",
        }}
        validationSchema={Yup.object({
          career: Yup.string().required("Select a career option"),
          years: Yup.string().required("Choose number of years"),
          country: Yup.string().required("Select country you live in"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          handleSubmit(values);

          setSubmitting(false);
        }}
       
      >
        {({ isSubmitting,resetForm,initialValues,errors }) => (
          <Form>
            <SelectMenu
              name="career"
              options={careers}
              label="Choose a field"
              placeholder="Select a career option"
              disabled={showRes}
              error={errors.career}
            />
            
            <SelectMenu
              name="years"
              options={number_of_years}
              label="Choose number of years"
              placeholder="Choose number of years"
              disabled={showRes}
              error={errors.years}
            />
            <SelectMenu
              name="country"
              options={country}
              label="Choose country"
              placeholder="Select country you live in"
              disabled={showRes}
              error={errors.country}
            />
            {!showRes?<button
              type="submit"
              className={`h-12  min-ml-auto rounded-md shadow-sm justify-center font-lato mt-[22px] items-center px-4 max-md:w-full leading-100 w-[336px] text-white bg-[linear-gradient(91.2deg,_#FF8ED0_-1.28%,_#FB8971_103.24%)]`}
            >
            Know the scope &gt;
            </button> :
        
              <button 
            

               onClick={()=>{resetForm({values:initialValues});
              setShowRes(!showRes)}}
              className={`h-12 rounded-md font-bold shadow-sm justify-center mt-[22px] items-center px-3 max-md:w-full leading-100 w-[336px] text-gradient-pink-orange max-md:px-3 bg-with-100 border border-pink-300`}
            >
              Reset &gt;
            </button>}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Forms;
