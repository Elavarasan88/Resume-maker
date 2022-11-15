import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    value : {
        name : '',
        secondName : '',
        age : 0,
        email : '',
        fatherName : '',
        jobRole : '',
        nationality : '',
        mobileNumber : '',
        college : '',
        course : '',
        collegeYear : '',
        higherSecondary : '',
        higherSecondaryPassedOut :'',
        higherSecondaryPercentage : '',
        sslc : '',
        sslcPassedOut : '',
        sslcPercentage : '',
        languageKnow : [],
        personalSkills : [],
        projectLinks : [],
        address : '',
        pincode : '',
        technicalSkills:[] 
    }

}

const formSlice = createSlice({
    name:'form',
    initialState,
    reducers:{
        submit: (state,action) =>{
            state.value = action.payload
        }
    }

})
export const {submit} = formSlice.actions
export const formValue = state => state.form.value
export default formSlice.reducer