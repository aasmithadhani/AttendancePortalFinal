export default function validateInfo(values, page) {
    let errors = {};
  
    // if (!values.username.trim()) {
    //   errors.username = 'Username required';
    // }
    // else if (!/^[A-Za-z]+/.test(values.name.trim())) {
        //   errors.name = 'Enter a valid name';
        // }
        
        // if (!values.email) {
        //     errors.email = 'Email required';
        // } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        //     errors.email = 'Email address is invalid';
        // }
        if (!values.SapId) {
            errors.SapId = 'SapId is required';
        } else if (values.SapId.length = !11) {
            errors.SapId = 'Sapid needs to be 6 characters or more';
        }
        if (!values.password) {
            errors.password = 'Password is required';
        } else if (values.password.length < 6) {
            errors.password = 'Password needs to be 6 characters or more';
        }
        

        // Old code

        // if (!values.password2 && page === "signup") {
        //     errors.password2 = 'Password is required';
        // } else if (values.password2 !== values.password && page === "signup") {
        //     errors.password2 = 'Passwords do not match';
        // }
        // if (!values.gender.trim() && page === "signup") {
        //     errors.gender = 'gender required';
        //   }
        //   if (!values.DOB.trim() && page === "signup") {
        //     errors.DOB = 'Date Of Birth required';
        //   }
        return errors;
    }