import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { SubmissionError } from 'redux-form';

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function submitHandler(values) {
    return sleep(1000).then(() => {
        // simulate server latency
        if (!['john', 'paul', 'george', 'ringo'].includes(values.username)) {
            throw new SubmissionError({
                username: 'User does not exist',
                _error: 'Login failed!',
            });
        } else if (values.password !== 'redux-form') {
            throw new SubmissionError({
                password: 'Wrong password',
                _error: 'Login failed!',
            });
        } else {
            window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
        }
    });
}

const renderField = ({ input, label, type, meta: { touched, error } }) => (
    <div>
        <label>{label}</label>
        <div>
            <input {...input} placeholder={label} type={type} />
            {touched && error && <h3>{error}</h3>}
        </div>
    </div>
);

const SubmitValidationForm = (props) => {
    const { error, handleSubmit, pristine, reset, submitting } = props;
    return (
        <>
            <h2 className='text-center m-5'>Submit Validation Form</h2>
            <form onSubmit={handleSubmit(submitHandler)}>
                <Field name='username' type='text' component={renderField} label='Username' />
                <Field name='password' type='password' component={renderField} label='Password' />
                {error && <strong>{error}</strong>}
                <div>
                    <button type='submit' disabled={submitting}>
                        Log In
                    </button>
                    <button type='button' disabled={pristine || submitting} onClick={reset}>
                        Clear Values
                    </button>
                </div>
            </form>
        </>
    );
};

export default reduxForm({
    form: 'submitValidation', // a unique identifier for this form
})(SubmitValidationForm);
