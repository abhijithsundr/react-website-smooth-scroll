import React from 'react'
import {FormContent, 
        FormWrap, 
        Container,
        Icon,
        Form,
        FormH1,
        FormLabel,
        FormInput,
        FormButton,
        Text } from './signin-elements'

const SigninComponent = () => {
    return (
        <>
         <Container>
            <FormWrap>
                <Icon to= "/"> Fintech</Icon>
                <FormContent>
                    <Form action="#">
                        <FormH1>Sign in to your account</FormH1>
                        <FormLabel htmlFor='for'>Email</FormLabel>
                        <FormInput type='email' required />
                        <FormLabel htmlFor='for'>Password</FormLabel>
                        <FormInput type='password' required />
                        <FormButton type='submit'>Continue</FormButton>
                        <Text>Forgot Password?</Text>
                    </Form>
                </FormContent>
            </FormWrap>
        </Container>   
        </>
    )
}

export default SigninComponent
